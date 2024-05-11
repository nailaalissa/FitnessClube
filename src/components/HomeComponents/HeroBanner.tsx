import  image  from '../../assets/HomePageGraphic.png'
import './homeComponent.css'
import Button from '../shared/Button';
import { Link } from 'react-router-dom';
const HeroBanner = () => (
  <section className='banner'>
    <div className='banner-content animation'>
      <h2 className='banner-title'>Fitness Club</h2>
      <h1 className='banner-heading'>
        Sweat, Smile <br />
        And Repeat
      </h1>
      
      <p className='text-banner'>
        Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now.
      </p>
      <div className='banner-button'>
      <p className='banner-text'>
        Check out the most effective exercises personalized to you
      </p>
        
      <Link to='/Exercises' className="link click">
          <Button type="submit" className='btn click'>
            Explore Exercises
          </Button>
        </Link>
  
      </div>
      
      <h1 className='watermark-text '>
        Exercise
      </h1>
    </div>
    <div className='banner-image '>
      <img src={image} alt="hero-banner" className="hero-banner-img" />
    </div>
  </section>
);

export default HeroBanner;
