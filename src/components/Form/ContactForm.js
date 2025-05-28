import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactFormStyle.css';

const services = [
    { label: 'Wybierz usługę', value: '' },
    { label: 'Siłownia', value: 'silownia' },
    { label: 'Basen', value: 'basen' },
    { label: 'Masaż', value: 'masaz' },
    { label: 'Kurs Trenera Personalnego', value: 'kurs_trenera_personalnego' },
    { label: 'Obóz sportowy', value: 'oboz_sportowy' },
];

const specialists = {
    silownia: [
        { label: 'Wybierz trenera', value: '' },
        { label: 'Patryk Iwaszczyszyn', value: 'Patryk Iwaszczyszyn' },
        { label: 'Izabela Pawik', value: 'Izabela Pawik' },
        { label: 'Piotr Labojko', value: 'Piotr Labojko' },
        { label: 'Milena Kuczyk', value: 'Milena Kuczyk' },
    ],
    basen: [
        { label: 'Wybierz trenera', value: '' },
        { label: 'Izabela Pawik', value: 'Izabela Pawik' },
    ],
    kurs_trenera_personalnego: [
        { label: 'Wybierz trenera', value: '' },
        { label: 'Patryk Iwaszczyszyn', value: 'Patryk Iwaszczyszyn' },
        { label: 'Izabela Pawik', value: 'Izabela Pawik' },
    ],
    masaz: [
        { label: 'Wybierz masażystę', value: '' },
        { label: 'Dawid Słonina (fizjoterapeuta)', value: 'Dawid Słonina' },
        { label: 'Natalia Polaczek (masażystka)', value: 'Natalia Polaczek' },
    ],
  };

function ContactForm() {
    const [messageSent, setMessageSent] = useState(false);
    const [selectedService, setSelectedService] = useState('');
    const [selectedSpecialist, setSelectedSpecialist] = useState('');
    const [canSubmit, setCanSubmit] = useState(true);
    const [cooldownMessage, setCooldownMessage] = useState('');

    React.useEffect(() => {
        const lastSubmissionTime = localStorage.getItem('lastFormSubmission');
        if (lastSubmissionTime) {
            const now = new Date().getTime();
            const timeElapsed = now - parseInt(lastSubmissionTime, 10);
            const oneHour = 60 * 60 * 1000;

            if (timeElapsed < oneHour) {
                setCanSubmit(false);
                const timeLeft = Math.ceil((oneHour - timeElapsed) / (60 * 1000));
                setCooldownMessage(`Możesz wysłać kolejne zgłoszenie za około ${timeLeft} minut.`);
            }
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!canSubmit) {
            console.warn('Zbyt szybka próba wysłania formularza. Proszę poczekać.');
            return;
        }

        emailjs.sendForm('service_xqlzr6l', 'template_nipqukd', event.target, 'T7YNx0b5GFz5-aLZr')
            .then((result) => {
                console.log('Formularz został wysłany!:', result.text);
                setMessageSent(true);
                event.target.reset();

                localStorage.setItem('lastFormSubmission', new Date().getTime().toString());
                setCanSubmit(false);
                setCooldownMessage('Wysłano! Możesz wysłać kolejne zgłoszenie za około 60 minut.');

                setTimeout(() => {
                    setCanSubmit(true);
                    setCooldownMessage('');
                }, 60 * 60 * 1000);
            }, (error) => {
                console.error('Błąd podczas wysyłania formularza:', error.text);
            });
    };

    const handleServiceChange = (event) => {
        setSelectedService(event.target.value);
        setSelectedSpecialist('');
    };

    const handleSpecialistChange = (event) => {
        setSelectedSpecialist(event.target.value);
    };

    const currentSpecialists = selectedService && selectedService !== 'oboz_sportowy'
        ? specialists[selectedService] || []
        : [];

    return (
        <>
            <form id='ContactForm' className="gymForm" onSubmit={handleSubmit}>
                <h1 className="gymFormTitle">Formularz zgłoszeniowy</h1>

                <input type="text" name="Imię" placeholder="Imię" required />
                <input type="text" name="Nazwisko" placeholder="Nazwisko" required />
                <input type="email" name="Email" placeholder="Email" required />
                <input type="tel" name="Telefon" placeholder="Telefon" required />

                {/* Lista rozwijana usług */}
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

                {/* Warunkowe renderowanie listy specjalistów */}
                {selectedService && selectedService !== '' && selectedService !== 'oboz_sportowy' && (
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

                <textarea name="Uwagi" placeholder="Uwagi" ></textarea>
                <button type="submit" className="gymButton">Wyślij</button>
            </form>

            {messageSent && (
                <p className="successMessage">Wysłano! Dziękujemy za kontakt.</p>
            )}
            {cooldownMessage && (
                <p className="cooldownMessage">{cooldownMessage}</p>
            )}
        </>
    );
}

export default ContactForm;