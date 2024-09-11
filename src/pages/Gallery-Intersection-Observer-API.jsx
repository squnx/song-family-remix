import { useEffect } from 'react';
import galleryItems from './galleryItems.json';
import LazyImage from '../components/LazyImage'; // Import the LazyImage component

function useScript(src) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
}

const Gallery = () => {
  useScript('/assets/js/main-useScript.js');

  const handleFilterClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll to the top
    });
  };

  return (
    <>
      {/* Gallery Section */}
      <section id="gallery" className="gallery section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Gallery</h2>
        </div>
        <div className="container">
          <div className="isotope-layout" data-default-filter=".filter-family" data-layout="masonry" data-sort="original-order">
            <ul className="gallery-filters isotope-filters sticky-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter=".filter-family" onClick={handleFilterClick} className="filter-active">Family</li>
              <li data-filter=".filter-friends" onClick={handleFilterClick}>Friends</li>
              <li data-filter=".filter-houses" onClick={handleFilterClick}>Houses</li>
              <li data-filter=".filter-milestones" onClick={handleFilterClick}>Milestones</li>
            </ul>
            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
              {galleryItems.map((item, index) => (
                <div key={index} className={`col-lg-3 col-md-4 col-sm-6 gallery-item isotope-item ${item.filter}`}>
                  {/* Use LazyImage for lazy loading */}
                  <LazyImage src={item.src} alt={item.title} className="img-fluid" />
                  <div className="gallery-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a href={item.src} title={item.title} data-gallery={item.gallery} className="glightbox preview-link">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
