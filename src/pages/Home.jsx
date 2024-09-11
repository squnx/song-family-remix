import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  const [animate, setAnimate] = useState(true);

  const handleSlideChange = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 50); // Small delay to reset the animation
  };

  const carouselItems = [
    {
      background: '/assets/images/hero-carousel/song-01.jpg',
      title: 'Song Family',
      text: 'Making Memories Together',
      bgStyle: 'transparent-60',
    },,
    {
      background: '/assets/images/hero-carousel/phil-01.jpg',
      title: 'Phil Song',
      text: 'Putting for the Future',
      bgStyle: 'transparent-40',
    },
    {
      background: '/assets/images/hero-carousel/andy-01.jpg',
      title: 'Andy Song',
      text: 'The All-Star Athlete',
      bgStyle: 'transparent-60',
    },
    {
      background: '/assets/images/hero-carousel/terri-01.jpg',
      title: 'Terri Song',
      text: 'The Guardian Angel of our Family',
      bgStyle: 'transparent-90',
    },
    {
      background: '/assets/images/hero-carousel/ivan-01.jpg',
      title: 'Ivan Song',
      text: 'The Man, The Myth, The Dad',
      bgStyle: 'transparent-40',
    },
    {
      background: '/assets/images/hero-carousel/phil-andy-01.jpg',
      title: 'Phil & Andy',
      text: 'The Dynamic Duo',
      bgStyle: 'transparent-40',
    },
  ];

  return (
    <section id="hero" className="hero section">
      <div className="hero-container">
        <Carousel fade interval={5000} controls indicators={true} pause={false} onSlide={handleSlideChange}>
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index} className={item.bgStyle}>
              <div className="carousel-container">
                <img src={item.background} alt="" data-aos="fade-in" />
                <div className={`container text-center ${animate ? 'zoom-out' : ''}`}>
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2>{item.title}</h2>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Home;