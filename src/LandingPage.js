import React from 'react';
import HeroSection from './HeroSection';
import HeroInfoSection from './HeroInfoSection';
function LandingPage(props) {
  return (
    <React.Fragment>
      <HeroSection />
      <HeroInfoSection
        dataUrl='#'
      />
      <div className='main-content'>
        <div className='card m-vertical--16'>
          <h5 className='p--16'>
            About
          </h5>
          <div className='p--16'>
            Hey there! I'm Preston:) A Software Engineer, video game enthusiest, and doggo dad currently based in Oregon! I got into programming because of it's constant need for learning and as an outlet for creativity. Outside of the programming world I enjoy spending time with my dog, grabbing a drink with friends, playing video games, enjoying a good book, or spending time in nature. Feel free to explore my website or get in touch on one of my listed accounts.
          </div>
        </div>
        <div className='card m-vertical--16'>
          <h5 className='p--16'>
            Socials
          </h5>
          <div className='p--16'>
            <div className='p-vertical--8'>
              To keep up with my non-existent social media presence
            </div>
            <div className='p-vertical--8'>
              Twitter: @MathesonPreston
            </div>
            <div className='p-vertical--8'>
              Instagram: @ThePrestonJames
            </div>
          </div>
        </div>
        <div className='card m-vertical--16'>
          <h5 className='p--16'>
            Support
          </h5>
          <div className='p--16'>
            <div className='p-vertical--8'>
              If you'd like to buy me a cup off coffee!
            </div>
            <div className='p-vertical--8'>
              Venmo: @Preston-Matheson
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

LandingPage.propTypes = {
};
export default LandingPage;
