import React, { useState } from 'react';
import ContactLayout from '../layouts/Contact-Layout';
import QuickLinks from '../layouts/Contact-Layout/QuickLinks';
import CommunityApp from '../layouts/Comunity-addon/app/page';

function Comunity() {
 

  return (
    <div className="min-h-screen bg-white">
      <CommunityApp />
      {/* <QuickLinks /> */}
    </div>
  );
}

export default Comunity;