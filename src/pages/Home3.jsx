import { Carousel } from 'react-bootstrap';

const Home3 = () => {
  const carouselItems = [
    {
      background: '/src/assets/images/hero-carousel/song-01.jpg',
      title: 'Song Family',
      text: 'Lorem ipsum dolor sit amet',
    },
    {
      background: '/src/assets/images/hero-carousel/phil-andy-01.jpg',
      title: 'Phil Song',
      text: 'Lorem ipsum dolor sit amet',
    },
    {
      background: '/src/assets/images/hero-carousel/andy-01.jpg',
      title: 'Andy Song',
      text: 'Lorem ipsum dolor sit amet',
    },
    {
      background: '/src/assets/images/hero-carousel/terri-01.jpg',
      title: 'Terri Song',
      text: 'Lorem ipsum dolor sit amet',
    },
    {
      background: '/src/assets/images/hero-carousel/ivan-01.jpg',
      title: 'Ivan Song',
      text: 'Lorem ipsum dolor sit amet',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section">
        <div className="hero-container">
          <Carousel fade interval={5000} controls indicators={true}>
            {carouselItems.map((item, index) => (
              <Carousel.Item key={index} >
                <div className="carousel-container">
                  <img src={item.background} alt="" data-aos="fade-in" />
                  <div className="container text-center" data-aos="zoom-out" data-aos-delay="100">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                        <a href="about.html" className="btn-get-started">About Me</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  )
}

export default Home3