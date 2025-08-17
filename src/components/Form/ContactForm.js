import React from 'react';
import SingleContactForm from './SingleContactForm';
import './contactFormStyle.css';

function ContactForm() {
  return (
    <>
      {/* Main container for all forms */}
      <div className='FormContainer'>
        {/* First form: Application form with service selection */}
        <SingleContactForm
          formId="ApplicationForm"
          formTitle="Formularz zgłoszeniowy"
          showServiceSelect={true}
          formLocalStorageKeyPrefix="application"
        />

        {/* Second form: General contact form without service selection */}
        <SingleContactForm
          formId="GeneralContactForm"
          formTitle="Zadaj nam pytanie"
          showServiceSelect={false}
          formLocalStorageKeyPrefix="general_contact"
        />
      </div>
    </>
  );
}

export default ContactForm;