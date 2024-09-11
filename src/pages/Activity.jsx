import { useEffect } from 'react';
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
  useScript('/assets/js/main-useScript.js');

  const handleFilterClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll to the top
    });
  };

  return (
    <>
      {/* Activity Section */}
      <section id="gallery" className="gallery section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Activity</h2>
          {/* <p>Discovering New Horizons</p> */}
        </div>
        <div className="container">
          <div className="isotope-layout" data-default-filter=".filter-golf" data-layout="masonry" data-sort="original-order">
            <ul className="gallery-filters isotope-filters sticky-filters" data-aos="fade-up" data-aos-delay="100">
              {/* <li data-filter="*">All</li> */}
              <li data-filter=".filter-baseball" onClick={handleFilterClick}>Baseball</li>
              <li data-filter=".filter-basketball" onClick={handleFilterClick}>Basketball</li>
              <li data-filter=".filter-cake" onClick={handleFilterClick}>Cake</li>
              <li data-filter=".filter-golf" onClick={handleFilterClick} className="filter-active">Golf</li>
              <li data-filter=".filter-instruments" onClick={handleFilterClick}>Instruments</li>
              <li data-filter=".filter-ski" onClick={handleFilterClick}>Ski</li>
              <li data-filter=".filter-soccer" onClick={handleFilterClick}>Soccer</li>
              <li data-filter=".filter-swimming" onClick={handleFilterClick}>Swimming</li>
            </ul>
            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
              {activityItems.map((item, index) => (
                <div key={index} className={`col-lg-3 col-md-4 col-sm-6 gallery-item isotope-item ${item.filter}`}>
                  {/* <div key={index} className={`col-lg-2 col-md-3 col-sm-4 gallery-item isotope-item ${item.filter}`}> */}
                  <img src={item.src} className="img-fluid" alt="" />
                  <div className="gallery-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a href={item.src} title={item.title} data-gallery={item.gallery} className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    {/* <a href="gallery-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Activity