import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './contactFormStyle.css';

const services = [
    { label: 'Wybierz usługę', value: '' },
    { label: 'Treningi Personalne', value: 'treningi_personalne' },
    { label: 'Basen (Treningi pływackie)', value: 'basen_treningi_plywackie' },
    { label: 'Kursy na Trenera Personalnego', value: 'kursy_na_trenera_personalnego' },
    { label: 'Masaże relaksacyjne', value: 'masaze_relaksacyjne' },
    { label: 'Fizjoterapia', value: 'fizjoterapia' },
    { label: 'Obozy sportowe', value: 'obozy_sportowe' },
];

const specialists = {
    treningi_personalne: [
        { label: 'Wybierz trenera', value: '' },
        { label: 'Patryk Iwaszczyszyn', value: 'Patryk Iwaszczyszyn' },
        { label: 'Izabela Pawik', value: 'Izabela Pawik' },
    ],
    basen_treningi_plywackie: [
        { label: 'Wybierz trenera', value: '' },
        { label: 'Izabela Pawik', value: 'Izabela Pawik' },
    ],
    masaze_relaksacyjne: [
        { label: 'Wybierz masażystę', value: '' },
        { label: 'Natalia Polaczek', value: 'Natalia Polaczek' },
    ],
    fizjoterapia: [
        { label: 'Wybierz fizjoterapeutę', value: '' },
        { label: 'Dawid Słonina', value: 'Dawid Słonina' },
    ],
  };

const MAX_SUBMISSIONS = 3;
const COOLDOWN_DURATION = 3600000; // 1 hour

function ContactForm() {
    const [messageSent, setMessageSent] = useState(false);
    const [selectedService, setSelectedService] = useState('');
    const [selectedSpecialist, setSelectedSpecialist] = useState('');
    const [canSubmit, setCanSubmit] = useState(true);
    const [cooldownMessage, setCooldownMessage] = useState('');
    const [privacyAccepted, setPrivacyAccepted] = useState(false);
    const [submissionsCount, setSubmissionsCount] = useState(0);

    useEffect(() => {
        const storedSubmissions = localStorage.getItem('formSubmissionsCount');
        const lastResetTime = localStorage.getItem('formLastResetTime');
        const now = new Date().getTime();

        if (lastResetTime) {
            const timeElapsed = now - parseInt(lastResetTime, 10);
            if (timeElapsed >= COOLDOWN_DURATION) {
                // Reset counter if cooldown period has passed
                localStorage.setItem('formSubmissionsCount', '0');
                localStorage.setItem('formLastResetTime', now.toString());
                setSubmissionsCount(0);
                setCanSubmit(true);
                setCooldownMessage('');
            } else {
                // Otherwise, load stored count and check if submission is allowed
                const currentCount = parseInt(storedSubmissions, 10) || 0;
                setSubmissionsCount(currentCount);
                if (currentCount >= MAX_SUBMISSIONS) {
                    setCanSubmit(false);
                    const timeLeft = Math.ceil((COOLDOWN_DURATION - timeElapsed) / (60 * 1000));
                    setCooldownMessage(`Osiągnięto limit wysyłek. Spróbuj ponownie za około ${timeLeft} minut.`);
                } else {
                    setCanSubmit(true);
                }
            }
        } else {
            // First time loading, initialize storage
            localStorage.setItem('formSubmissionsCount', '0');
            localStorage.setItem('formLastResetTime', now.toString());
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!canSubmit || submissionsCount >= MAX_SUBMISSIONS) {
            console.warn('Zbyt szybka próba wysłania formularza lub osiągnięto limit.');
            return;
        }

        emailjs.sendForm('service_pz3h6vb', 'template_nipqukd', event.target, 'T7YNx0b5GFz5-aLZr')
            .then((result) => {
                console.log('Formularz został wysłany!:', result.text);
                setMessageSent(true);
                event.target.reset();

                const newSubmissionsCount = submissionsCount + 1;
                setSubmissionsCount(newSubmissionsCount);
                localStorage.setItem('formSubmissionsCount', newSubmissionsCount.toString());

                // Set last reset time if it's the first submission in the period
                const lastResetTime = localStorage.getItem('formLastResetTime');
                if (!lastResetTime || (new Date().getTime() - parseInt(lastResetTime, 10) >= COOLDOWN_DURATION)) {
                    localStorage.setItem('formLastResetTime', new Date().getTime().toString());
                }


                if (newSubmissionsCount >= MAX_SUBMISSIONS) {
                    setCanSubmit(false);
                    setCooldownMessage(`Osiągnięto limit zgłoszeń. Spróbuj ponownie za około ${Math.ceil(COOLDOWN_DURATION / (60 * 1000))} minut.`);
                    setTimeout(() => {
                        setCanSubmit(true);
                        setCooldownMessage('');
                        setSubmissionsCount(0);
                        localStorage.setItem('formSubmissionsCount', '0');
                        localStorage.setItem('formLastResetTime', new Date().getTime().toString());
                    }, COOLDOWN_DURATION);
                } else {
                    // Message for successful submission within the limit
                    setCooldownMessage(`Wykorzystano ${newSubmissionsCount} z ${MAX_SUBMISSIONS} dostępnych zgłoszeń w bieżącej godzinie.`);
                }

                setTimeout(() => setMessageSent(false), 5000); // Hide success message after 5 seconds

            }, (error) => {
                console.error('Błąd podczas wysyłania formularza:', error.text);
                setCooldownMessage('Wystąpił błąd podczas wysyłania. Spróbuj ponownie.');
            });
    };

    const handleServiceChange = (event) => {
        setSelectedService(event.target.value);
        setSelectedSpecialist('');
    };

    const handleSpecialistChange = (event) => {
        setSelectedSpecialist(event.target.value);
    };

    const handlePrivacyChange = (event) => {
        setPrivacyAccepted(event.target.checked);
    };

    const currentSpecialists = selectedService && (selectedService !== 'obozy_sportowe' || selectedService !== 'kursy_na_trenera_personalnego')
        ? specialists[selectedService] || []
        : [];

    return (
        <>
        <div className='FormWrapper'>
            <form id='ContactForm' className="Form" onSubmit={handleSubmit}>
                <h1 className="FormTitle">Formularz zgłoszeniowy</h1>

                <input type="text" name="Imię" placeholder="Imię" required />
                <input type="text" name="Nazwisko" placeholder="Nazwisko" required />
                <input type="email" name="Email" placeholder="Email" required />
                <input type="tel" name="Telefon" placeholder="Telefon" required pattern="[0-9]{9}" maxLength="9" title="Nieprawidłowy numer. Wprowadź 9 cyfr" />

                {/* Services list */}
                <select
                  name="Usługa"
                  value={selectedService}
                  onChange={handleServiceChange}
                  required
                >
                  {services.map((service) => (
                      <option key={service.value} value={service.value}>
                          {service.label}
                      </option>
                  ))}
                </select>

                {/* Conditional specialist list rendering */}
                {selectedService && selectedService !== '' && selectedService !== 'obozy_sportowe' && selectedService !== 'kursy_na_trenera_personalnego' && (
                    <select name="Specjalista"
                      value={selectedSpecialist}
                      onChange={handleSpecialistChange}
                      required
                    >
                      {currentSpecialists.map((specialist) => (
                          <option key={specialist.value} value={specialist.value}>
                              {specialist.label}
                          </option>
                      ))}
                    </select>
                )}

                <textarea name="Uwagi" placeholder="Treść wiadomości" ></textarea>

                {/* Privacy Policy Checkbox */}
                <div className="privacy-checkbox-container">
                    <input
                        type="checkbox"
                        id="privacyPolicy"
                        name="privacyPolicy"
                        checked={privacyAccepted}
                        onChange={handlePrivacyChange}
                    />
                    <label htmlFor="privacyPolicy">Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z <a href="/polityka-prywatnosci" target="_blank" rel="noopener noreferrer">polityką prywatności</a>.</label>
                </div>

                <button type="submit" className="Button" disabled={!privacyAccepted || !canSubmit}>Wyślij</button>
            </form>

            {messageSent && (
                <p className="successMessage">Wysłano! Dziękujemy za kontakt.</p>
            )}
            {cooldownMessage && (
                <p className="cooldownMessage">{cooldownMessage}</p>
            )}
        </div>
        </>
    );
}

export default ContactForm;