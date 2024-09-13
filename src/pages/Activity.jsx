import { useEffect, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Isotope from 'isotope-layout';
import activityItems from './activityItems.json';

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

const Activity = () => {
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

    // Cleanup Isotope on unmount
    return () => {
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

  return (
    <>
      {/* Activity Section */}
      <section id="gallery" className="gallery section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Activity</h2>
        </div>
        <div className="container">
          <div className="isotope-layout" data-default-filter=".filter-baseball" data-layout="masonry" data-sort="original-order">
            <ul className="gallery-filters isotope-filters sticky-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter=".filter-baseball" onClick={() => handleFilterClick('.filter-baseball')} className="filter-active">Baseball</li>
              <li data-filter=".filter-basketball" onClick={() => handleFilterClick('.filter-basketball')}>Basketball</li>
              <li data-filter=".filter-cake" onClick={() => handleFilterClick('.filter-cake')}>Cake</li>
              <li data-filter=".filter-golf" onClick={() => handleFilterClick('.filter-golf')}>Golf</li>
              <li data-filter=".filter-instruments" onClick={() => handleFilterClick('.filter-instruments')}>Instruments</li>
              <li data-filter=".filter-jokgu" onClick={() => handleFilterClick('.filter-jokgu')}>Jokgu</li>
              <li data-filter=".filter-ski" onClick={() => handleFilterClick('.filter-ski')}>Ski</li>
              <li data-filter=".filter-soccer" onClick={() => handleFilterClick('.filter-soccer')}>Soccer</li>
              <li data-filter=".filter-swimming" onClick={() => handleFilterClick('.filter-swimming')}>Swimming</li>
            </ul>
            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
              {activityItems.map((item, index) => (
                <div key={index} className={`col-lg-3 col-md-4 col-sm-6 gallery-item isotope-item ${item.filter}`}>
                  <LazyLoadImage
                    src={item.src}
                    alt={item.title}
                    placeholderSrc={item.placeholderSrc} // Placeholder image for blur effect
                    effect="blur"
                    className="img-fluid"
                    onLoad={handleImageLoad}  // Trigger Isotope layout after image is loaded
                  />
                  <div className="gallery-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a href={item.src} title={item.title} data-gallery={item.gallery} className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
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

export default Activity;
