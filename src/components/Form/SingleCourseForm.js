import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const MAX_SUBMISSIONS = 3;
const COOLDOWN_DURATION = 3600000;

function SingleCourseForm({ formId, formTitle, formLocalStorageKeyPrefix }) {
const [messageSent, setMessageSent] = useState(false);
const [canSubmit, setCanSubmit] = useState(true);
const [cooldownMessage, setCooldownMessage] = useState('');
const [privacyAccepted, setPrivacyAccepted] = useState(false);
const [submissionsCount, setSubmissionsCount] = useState(0);
const [isLoading, setIsLoading] = useState(false);

const [experience, setExperience] = useState('');
const [sources, setSources] = useState({
    instagram: false,
    facebook: false,
    znajomi: false,
    strona: false,
    inne: false,
});
const [otherSourceText, setOtherSourceText] = useState('');
const [visibleComments, setVisibleComments] = useState('');

const submissionsCountKey = `${formLocalStorageKeyPrefix}_formSubmissionsCount`;
const lastResetTimeKey = `${formLocalStorageKeyPrefix}_formLastResetTime`;

useEffect(() => {
    const storedSubmissions = localStorage.getItem(submissionsCountKey);
    const lastResetTime = localStorage.getItem(lastResetTimeKey);
    const now = new Date().getTime();

    if (lastResetTime) {
    const timeElapsed = now - parseInt(lastResetTime, 10);
    if (timeElapsed >= COOLDOWN_DURATION) {
        localStorage.setItem(submissionsCountKey, '0');
        localStorage.setItem(lastResetTimeKey, now.toString());
        setSubmissionsCount(0);
        setCanSubmit(true);
        setCooldownMessage('');
    } else {
        const currentCount = parseInt(storedSubmissions, 10) || 0;
        setSubmissionsCount(currentCount);
        if (currentCount >= MAX_SUBMISSIONS) {
        setCanSubmit(false);
        const timeLeft = Math.ceil((COOLDOWN_DURATION - timeElapsed) / (60 * 1000));
        setCooldownMessage(`Osiągnięto limit wysyłek dla tego formularza. Spróbuj ponownie za około ${timeLeft} minut.`);
        } else {
        setCanSubmit(true);
        }
    }
    } else {
    localStorage.setItem(submissionsCountKey, '0');
    localStorage.setItem(lastResetTimeKey, now.toString());
    }
}, [formLocalStorageKeyPrefix, submissionsCountKey, lastResetTimeKey]);

const handleSubmit = (event) => {
    event.preventDefault();

    if (!canSubmit || submissionsCount >= MAX_SUBMISSIONS || isLoading) {
    console.warn('Zbyt szybka próba wysłania formularza, osiągnięto limit lub trwa wysyłanie.');
    return;
    }

    setIsLoading(true);
    
    const selectedSources = [];
    if (sources.instagram) selectedSources.push('Instagram');
    if (sources.facebook) selectedSources.push('Facebook');
    if (sources.znajomi) selectedSources.push('Znajomi');
    if (sources.strona) selectedSources.push('Strona internetowa');
    if (sources.inne) {
        selectedSources.push(`Inne: ${otherSourceText || 'nie wpisano'}`);
    }

    const finalMessage = `[edycja Mikołajkowa, start 06.12.2025]

Czy masz doświadczenie w treningu siłowym?: ${experience}
Skąd dowiedziałeś/aś się o kursie?: ${selectedSources.length > 0 ? selectedSources.join(', ') : 'Nie wybrano'}
Treść wiadomości od użytkownika:
${visibleComments || '(Użytkownik nie wpisał treści wiadomości)'}
`;

    const hiddenMessageInput = event.target.elements.Uwagi;
    if (hiddenMessageInput) {
        hiddenMessageInput.value = finalMessage;
    } else {
        console.error('Błąd: Nie znaleziono ukrytego pola "Uwagi"!');
        setIsLoading(false);
        return; 
    }

    emailjs.sendForm('service_pz3h6vb', 'template_o06wu6g', event.target, 'T7YNx0b5GFz5-aLZr')
    .then((result) => {
        console.log(`Formularz ${formId} został wysłany!:`, result.text);
        setMessageSent(true);
        
        event.target.reset();
        
        setExperience('');
        setSources({
            instagram: false,
            facebook: false,
            znajomi: false,
            strona: false,
            inne: false,
        });
        setOtherSourceText('');
        setVisibleComments('');
        setPrivacyAccepted(false);
        setIsLoading(false);

    }, (error) => {
        console.error(`Błąd podczas wysyłania formularza ${formId}:`, error.text);
        setCooldownMessage('Wystąpił błąd podczas wysyłania. Spróbuj ponownie.');
        setIsLoading(false);
    });
};

const handlePrivacyChange = (event) => {
    setPrivacyAccepted(event.target.checked);
};

const handleExperienceChange = (e) => setExperience(e.target.value);
const handleVisibleCommentsChange = (e) => setVisibleComments(e.target.value);
const handleOtherSourceTextChange = (e) => setOtherSourceText(e.target.value);

const handleSourceChange = (e) => {
    const { name, checked } = e.target;
    setSources(prev => ({ ...prev, [name]: checked }));
};


return (
    <div className='FormWrapper'>
    <form id={formId} className="Form" onSubmit={handleSubmit}>
        <h1>{formTitle}</h1>
        <p> 
            Kurs na trenera personalnego - Katowice - edycja Mikołajkowa, start 06.12.2025 
            <br/><br/>
            Ilość miejsc jest ograniczona, decyduje kolejność zgłoszeń.
            Po wypełnieniu formularza skontaktujemy się z Tobą, aby potwierdzić udział i przekazać dalsze szczegóły.
            <br/><br/>
            Z nami masz możliwość rozbicia płatności na 3, 4, 8, 12 lub 24 raty.<br/>
            <a 
                href="https://www.mediraty.pl/wspolpraca-piteam/" 
                style={{ textDecoration: 'underline'}}
            >
                dowiedz się więcej!
            </a>   

        </p>

        <input type="text" name="Imię" placeholder="Imię" required />
        <input type="text" name="Nazwisko" placeholder="Nazwisko" required />
        <input type="email" name="Email" placeholder="Email" required />
        <input type="tel" name="Telefon" placeholder="Telefon" required pattern="[0-9]{9}" maxLength="9" title="Nieprawidłowy numer. Wprowadź 9 cyfr" />

        <div className="form-group-radio">
            <label>Czy masz doświadczenie w treningu siłowym?</label>
            <div className="radio-option">
                <input 
                    type="radio" 
                    id={`exp_tak_${formId}`} 
                    name={`experience_${formId}`} 
                    value="Tak" 
                    checked={experience === 'Tak'} 
                    onChange={handleExperienceChange} 
                    required 
                />
                <label htmlFor={`exp_tak_${formId}`}>Tak</label>
            </div>
            <div className="radio-option">
                <input 
                    type="radio" 
                    id={`exp_nie_${formId}`} 
                    name={`experience_${formId}`} 
                    value="Nie" 
                    checked={experience === 'Nie'} 
                    onChange={handleExperienceChange} 
                    required 
                />
                <label htmlFor={`exp_nie_${formId}`}>Nie</label>
            </div>
        </div>

        <div className="form-group-checkbox">
            <label>Skąd dowiedziałeś/aś się o kursie?</label>
            <div className="checkbox-option">
                <input type="checkbox" id={`src_ig_${formId}`} name="instagram" checked={sources.instagram} onChange={handleSourceChange} />
                <label htmlFor={`src_ig_${formId}`}>Instagram</label>
            </div>
            <div className="checkbox-option">
                <input type="checkbox" id={`src_fb_${formId}`} name="facebook" checked={sources.facebook} onChange={handleSourceChange} />
                <label htmlFor={`src_fb_${formId}`}>Facebook</label>
            </div>
  	        <div className="checkbox-option">
                <input type="checkbox" id={`src_znajomi_${formId}`} name="znajomi" checked={sources.znajomi} onChange={handleSourceChange} />
                <label htmlFor={`src_znajomi_${formId}`}>Znajomi</label>
            </div>
            <div className="checkbox-option">
                <input type="checkbox" id={`src_strona_${formId}`} name="strona" checked={sources.strona} onChange={handleSourceChange} />
                <label htmlFor={`src_strona_${formId}`}>Strona internetowa</label>
            </div>
            <div className="checkbox-option">
                <input type="checkbox" id={`src_inne_${formId}`} name="inne" checked={sources.inne} onChange={handleSourceChange} />
                <label htmlFor={`src_inne_${formId}`}>Inne</label>
            </div>
            {sources.inne && (
                <input
                    type="text"
                    placeholder="Wpisz jakie"
                    className="other-source-input"
                    value={otherSourceText}
                    onChange={handleOtherSourceTextChange}
                />
            )}
        </div>


        <textarea 
            placeholder="Treść wiadomości (opcjonalnie)" 
            style={{ minHeight: '120px' }}
            value={visibleComments}
            onChange={handleVisibleCommentsChange}
        ></textarea>
        
        <input type="hidden" name="Uwagi" />

        <div className="privacy-checkbox-container">
    	<input
            type="checkbox"
            id={`privacyPolicy_${formId}`}
            name="privacyPolicy"
            checked={privacyAccepted}
            onChange={handlePrivacyChange}
            required
        />
        <label htmlFor={`privacyPolicy_${formId}`}>Wyrażam zgodę na przetwarzanie moich danych osobowych przez PI TEAM 
            w celu kontaktu oraz realizacji procesu rekrutacji na „Kurs na trenera personalnego Katowice- edycja Mikołajkowa” zgodnie z <a href="/polityka-prywatnosci" target="_blank" rel="noopener noreferrer">polityką prywatności</a>.
            <br/>Przyjmuję do wiadomości, że podanie danych jest dobrowolne, a zgoda może być w każdej chwili wycofana.
        </label>
        </div>

        <button type="submit" className="Button" disabled={!privacyAccepted || !canSubmit || isLoading}>
        	{isLoading ? 'WYSYŁANIE...' : 'WYŚLIJ'}
        </button>
        {cooldownMessage && <p className="cooldownMessage">{cooldownMessage}</p>}
    </form>

    {messageSent && (
        <p className="successMessage"> 
            Dziękujemy za zgłoszenie!<br/><br/>
            Skontaktujemy się z Tobą w ciągu 24 godzin, aby potwierdzić udział i przekazać szczegóły dotyczące kursu.<br/><br/>
            Do zobaczenia na starcie 6 grudnia!<br/>
          	Zespół PI TEAM
        </p>
    )}
    </div>
);
}

export default SingleCourseForm;