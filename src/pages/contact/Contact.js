import React from 'react'
import ContactHeader from '../contact/ContactHeader'
import Form from '../../components/form/Form'
import ContactAddress from '../contact/ContactAddress'








const Contact = () => {
  return (
    <div>
      <ContactHeader />

      <div>
        <Form />
      </div>
      
      <ContactAddress />
    </div>
  )
}

export default Contact