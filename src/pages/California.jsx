import { useEffect, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Isotope from 'isotope-layout';
import californiaItems from './californiaItems.json';

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

const California = () => {
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

    // Automatically click the ".filter-golf" filter when the component mounts
    const filterGolfElement = document.querySelector('[data-filter=".filter-camping-ski"]');
    if (filterGolfElement) {
      filterGolfElement.click();
    }

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
      {/* California Section */}
      <section id="gallery" className="gallery section">
        <div className="container section-title" data-aos="fade-up">
          <h2>California</h2>
        </div>
        <div className="container">
          <div className="isotope-layout" data-default-filter=".filter-camping-ski" data-layout="masonry" data-sort="original-order">
            <ul className="gallery-filters isotope-filters sticky-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter=".filter-camping-ski" onClick={() => handleFilterClick('.filter-camping-ski')} className="filter-active">Camping/Ski</li>
              <li data-filter=".filter-greater-la" onClick={() => handleFilterClick('.filter-greater-la')}>Greater LA</li>
              <li data-filter=".filter-lake-tahoe" onClick={() => handleFilterClick('.filter-lake-tahoe')}>Lake Tahoe</li>
              <li data-filter=".filter-mammoth-lakes" onClick={() => handleFilterClick('.filter-mammoth-lakes')}>Mammoth Lakes</li>
              <li data-filter=".filter-pacific-coast" onClick={() => handleFilterClick('.filter-pacific-coast')}>Pacific Coast</li>
              <li data-filter=".filter-san-diego" onClick={() => handleFilterClick('.filter-san-diego')}>San Diego</li>
              <li data-filter=".filter-san-francisco" onClick={() => handleFilterClick('.filter-san-francisco')}>San Francisco</li>
            </ul>
            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
              {californiaItems.map((item, index) => (
                <div key={index} className={`col-lg-3 col-md-4 col-sm-6 gallery-item isotope-item ${item.filter}`}>
                  <LazyLoadImage
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

export default California;
