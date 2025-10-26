import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

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
const COOLDOWN_DURATION = 3600000;

function SingleContactForm({ formId, formTitle, showServiceSelect = true, formLocalStorageKeyPrefix }) {
const [messageSent, setMessageSent] = useState(false);
const [selectedService, setSelectedService] = useState('');
const [selectedSpecialist, setSelectedSpecialist] = useState('');
const [canSubmit, setCanSubmit] = useState(true);
const [cooldownMessage, setCooldownMessage] = useState('');
const [privacyAccepted, setPrivacyAccepted] = useState(false);
const [submissionsCount, setSubmissionsCount] = useState(0);
const [isLoading, setIsLoading] = useState(false);

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

   	emailjs.sendForm('service_pz3h6vb', 'template_nipqukd', event.target, 'T7YNx0b5GFz5-aLZr')
   	.then((result) => {
      	console.log(`Formularz ${formId} został wysłany!:`, result.text);
      	setMessageSent(true);
      	event.target.reset();

      	const newSubmissionsCount = submissionsCount + 1;
      	setSubmissionsCount(newSubmissionsCount);
      	localStorage.setItem(submissionsCountKey, newSubmissionsCount.toString());

      	const lastResetTime = localStorage.getItem(lastResetTimeKey);
      	if (!lastResetTime || (new Date().getTime() - parseInt(lastResetTime, 10) >= COOLDOWN_DURATION)) {
      	localStorage.setItem(lastResetTimeKey, new Date().getTime().toString());
      	}

      	if (newSubmissionsCount >= MAX_SUBMISSIONS) {
      	setCanSubmit(false);
      	setCooldownMessage(`Osiągnięto limit zgłoszeń dla tego formularza. Spróbuj ponownie za około ${Math.ceil(COOLDOWN_DURATION / (60 * 1000))} minut.`);
      	setTimeout(() => {
         	setCanSubmit(true);
         	setCooldownMessage('');
         	setSubmissionsCount(0);
         	localStorage.setItem(submissionsCountKey, '0');
         	localStorage.setItem(lastResetTimeKey, new Date().getTime().toString());
      	}, COOLDOWN_DURATION);
      	} else {
      	setCooldownMessage(`Wykorzystano ${newSubmissionsCount} z ${MAX_SUBMISSIONS} dostępnych zgłoszeń dla tego formularza w bieżącej godzinie.`);
      	}

      	setTimeout(() => setMessageSent(false), 20000);
      	setIsLoading(false);

   	}, (error) => {
      	console.error(`Błąd podczas wysyłania formularza ${formId}:`, error.text);
      	setCooldownMessage('Wystąpił błąd podczas wysyłania. Spróbuj ponownie.');
      	setIsLoading(false);
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

const showSpecialistSelect = showServiceSelect && selectedService && selectedService !== '' && selectedService !== 'obozy_sportowe' && selectedService !== 'kursy_na_trenera_personalnego';

const textareaMinHeight = showServiceSelect
   ? '120px'
   : (showSpecialistSelect ? '240px' : '180px');

return (
   	<div className='FormWrapper'>
   	<form id={formId} className="Form" onSubmit={handleSubmit}>
      	<h1>{formTitle}</h1>

      	<input type="text" name="Imię" placeholder="Imię" required />
      	<input type="text" name="Nazwisko" placeholder="Nazwisko" required />
      	<input type="email" name="Email" placeholder="Email" required />
      	<input type="tel" name="Telefon" placeholder="Telefon" required pattern="[0-9]{9}" maxLength="9" title="Nieprawidłowy numer. Wprowadź 9 cyfr" />

      	{showServiceSelect && (
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
      	)}

      	{showSpecialistSelect && (
      	<select
         	name="Specjalista"
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

      	<textarea name="Uwagi" placeholder="Treść wiadomości" style={{ minHeight: textareaMinHeight }}></textarea>

      	<div className="privacy-checkbox-container">
      	<input
         	type="checkbox"
         	id={`privacyPolicy_${formId}`}
         	name="privacyPolicy"
         	checked={privacyAccepted}
         	onChange={handlePrivacyChange}
         	required
      	/>
      	<label htmlFor={`privacyPolicy_${formId}`}>Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z <a href="/polityka-prywatnosci" target="_blank" rel="noopener noreferrer">polityką prywatności</a>.</label>
      	</div>

      	<button type="submit" className="Button" disabled={!privacyAccepted || !canSubmit || isLoading}>
         	{isLoading ? 'WYSYŁANIE...' : 'WYŚLIJ'}
      	</button>
   	</form>

   	{messageSent && (
      	<p className="successMessage">Wysłano! Dziękujemy za kontakt.</p>
   	)}
   	{cooldownMessage && (
      	<p className="cooldownMessage">{cooldownMessage}</p>
   	)}
   	</div>
);
}

export default SingleContactForm;