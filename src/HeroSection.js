import React from 'react';
import PropTypes from 'prop-types';
import Logo from './pm-logo.png'
function HeroSection(props) {
  return (
    <React.Fragment>
      <div className='hero-section'>
        {props.title && (
          <div className='hero-section-title-group'>
            <h1 className='text--white'>
              {props.title}
            </h1>
          </div>
        )}
        {!props.title && (
          <img src={Logo} alt='Preston Matheson'/>
        )}
      </div>
    </React.Fragment>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
export default HeroSection;
