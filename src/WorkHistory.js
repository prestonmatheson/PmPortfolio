import React from 'react';
import PropTypes from 'prop-types';
import HeroSection from './HeroSection';
function WorkHistory(props) {
  return (
    <React.Fragment>
      <HeroSection
        // title='A Title'
      />
      <div className='main-content'>
        <div className='card m-vertical--16'>
          <h5 className='p--16'>
            Diamond SIS
          </h5>
          <div className='p--16'>
            Time frame: May 2017 - October 2018
          </div>
        </div>
        <div className='card m-vertical--16'>
          <h5 className='p--16'>
            Lightspeed Systems
          </h5>
          <div className='p--16'>
            Time frame: Febuary 2019 - Present
          </div>
        </div>
        <div className='card m-vertical--16'>
          <h5 className='p--16'>
            Contract Work
          </h5>
          <div className='p--16'>
            Hoss Pratt
          </div>
          <div className='p--16'>
            Time frame: January 2019 - October 2020
          </div>
          <div className='p--16'>
            Dan Matheson
          </div>
          <div className='p--16'>
            Time frame: November 2019
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WorkHistory;
