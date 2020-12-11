import React from 'react';
import PropTypes from 'prop-types';
function HeroInfoSection(props) {
  return (
    <React.Fragment>
      <div className='hero-info-section-group'>
        <div className='hero-info-section-tile'>
          <h5>
            Coffee
          </h5>
        </div>
        <div className='hero-info-section-tile'>
          <h5>
            Code
          </h5>
        </div>
        <div className='hero-info-section-tile'>
          <h5>
            Repeat
          </h5>
        </div>
      </div>
    </React.Fragment>
  );
}

HeroInfoSection.propTypes = {
  dataUrl: PropTypes.string,
};
export default HeroInfoSection;
