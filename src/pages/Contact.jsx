import React, { useState } from 'react';
import ContactLayout from '../layouts/Contact-Layout';
import QuickLinks from '../layouts/Contact-Layout/QuickLinks';

function Contact() {
 

  return (
    <div className="min-h-screen bg-white">
      <ContactLayout />
      <QuickLinks />
    </div>
  );
}

export default Contact;