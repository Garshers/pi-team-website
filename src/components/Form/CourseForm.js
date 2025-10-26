import React from 'react';
import SingleCourseForm from './SingleCourseForm';
import './contactFormStyle.css';

function CourseForm() {
  return (
    <>
      <div className='FormContainer'>
        <SingleCourseForm
          formId="CourseContactForm"
          formTitle="FORMULARZ ZGŁOSZENIOWY KURSU"
          formLocalStorageKeyPrefix="general_contact"
        />
      </div>
    </>
  );
}

export default CourseForm;