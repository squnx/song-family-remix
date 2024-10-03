import { useEffect, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Isotope from 'isotope-layout';
import mexicoItems from './mexicoItems.json';

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

const Mexico = () => {
  const isotopeRef = useRef(null);

  useScript('/assets/js/main-useScript.js');

  useEffect(() => {
    // Initialize Isotope
    isotopeRef.current = new Isotope('.isotope-container', {
      itemSelector: '.isotope-item',
      layoutMode: 'masonry',
      percentPosition: true,
      masonry: {
        columnWidth: '.isotope-item',
      },
    });

    // Automatically click the filter button for '.filter-cancun'
    const clickFilterDefault = () => {
      const filterDefaultButton = document.querySelector('[data-filter=".filter-cancun"]');
      if (filterDefaultButton) {
        filterDefaultButton.click();
      }
    };

    // Ensure this runs after Isotope has been initialized
    const initTimeout = setTimeout(() => {
      clickFilterDefault();
    }, 50); // Adjust delay if necessary

    // Cleanup on unmount
    return () => {
      clearTimeout(initTimeout);
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
      }
    };
  }, []);

  const handleFilterClick = (filter) => {
    if (isotopeRef.current) {
      isotopeRef.current.arrange({ filter }); // Apply filter
      // Directly call layout to refresh the layout
      setTimeout(() => {
        isotopeRef.current.layout(); // Ensure layout is recalculated
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, 300); // Adjust delay if needed
    }
  };

  const handleImageLoad = () => {
    if (isotopeRef.current) {
      isotopeRef.current.layout();
    }
  };

  // Helper function to determine if an item is a video based on its file extension
  // const isVideo = (src) => {
  //   const videoExtensions = ['.mp4', '.webm', '.ogg'];
  //   return videoExtensions.some((ext) => src.endsWith(ext));
  // };

  return (
    <>
      {/* Mexico Section */}
      <section id="gallery" className="gallery section">
        <div className="container section-title" data-aos="fade-up">
          <span>Mexico</span>
          <h2>Mexico</h2>
        </div>
        <div className="container">
          <div className="isotope-layout" data-default-filter=".filter-cancun" data-layout="masonry" data-sort="original-order">
            <ul className="gallery-filters isotope-filters sticky-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter=".filter-cancun" onClick={() => handleFilterClick('.filter-cancun')} className="filter-active">Cancun</li>
              <li data-filter=".filter-ensenada" onClick={() => handleFilterClick('.filter-ensenada')}>Ensenada</li>
              <li data-filter=".filter-los-cabos" onClick={() => handleFilterClick('.filter-los-cabos')}>Los Cabos</li>
            </ul>
            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
              {mexicoItems.map((item, index) => (
                <div key={index} className={`col-lg-3 col-md-4 col-sm-6 gallery-item isotope-item ${item.filter}`}>
                  {/* Hover effect #1 */}
                  <div className="gallery-wrap">
                    {item.type === 'video' ? (
                      <div className="video-container">
                        <a href={item.src} data-gallery={item.gallery} className="glightbox" title={item.title}>
                          <video width="100%" controls>
                            <source src={item.src} type="video/mp4" />
                            <source src={item.src.replace('.mp4', '.webm')} type="video/webm" />
                            <source src={item.src.replace('.mp4', '.ogg')} type="video/ogg" />
                            Your browser does not support the video tag.
                          </video>
                        </a>
                        <div className="gallery-info">
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                          <div className="gallery-links">
                            <a href={item.src} data-gallery={item.gallery} className="glightbox" title={item.title}><i className="bi bi-play-circle-fill"></i></a>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="image-container">
                        <LazyLoadImage
                          src={item.src}
                          alt={item.title}
                          effect="blur"
                          className="img-fluid"
                          onLoad={handleImageLoad}  // Trigger Isotope layout after image is loaded
                        />
                        <div className="gallery-info">
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                          <div className="gallery-links">
                            <a href={item.src} data-gallery={item.gallery} className="glightbox" title={item.title}><i className="bi bi-zoom-in"></i></a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover effect #2 */}
                  {/* <LazyLoadImage
                    src={item.src}
                    alt={item.title}
                    // placeholderSrc={item.placeholderSrc} // Placeholder image for blur effect
                    effect="blur"
                    className="img-fluid"
                    onLoad={handleImageLoad}  // Trigger Isotope layout after image is loaded
                  />
                  <div className="gallery-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a href={item.src} title={item.title} data-gallery={item.gallery} className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  </div> */}

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mexico;
