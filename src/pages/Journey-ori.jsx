import { useEffect } from 'react';

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

const Journey = () => {
  useScript('/src/assets/js/main-useScript.js');
  return (
    <>
      {/* Joouney Section */}
      <section id="portfolio" className="portfolio section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Journey</h2>
          <p>Discovering New Horizons</p>
          {/* <p>Our Global Adventure</p> */}
        </div>
        <div className="container">
          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
            <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-arizona">Arizona</li>
              <li data-filter=".filter-atlanta">Atlanta</li>
              <li data-filter=".filter-california">California</li>
              <li data-filter=".filter-cancun">Cancun</li>
              <li data-filter=".filter-ensenada">Ensenada</li>
              <li data-filter=".filter-korea">Korea</li>
              <li data-filter=".filter-loscabos">Los Cabos</li>
              <li data-filter=".filter-seattle">Seattle</li>
            </ul>
            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
              <div className="col-lg-2 col-md-3 col-sm-4 portfolio-item isotope-item filter-california">
                <img src="/src/assets/images/journey/california/2003.12-yosemite-01.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="/src/assets/images/journey/california/2003.12-yosemite-01.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 portfolio-item isotope-item filter-california">
                <img src="/src/assets/images/journey/california/2003.12-yosemite-02.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Product 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="/src/assets/images/journey/california/2003.12-yosemite-02.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 portfolio-item isotope-item filter-california">
                <img src="/src/assets/images/journey/california/2003.12-yosemite-03.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Branding 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="/src/assets/images/journey/california/2003.12-yosemite-03.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 portfolio-item isotope-item filter-california">
                <img src="/src/assets/images/journey/california/2004.09-kings-canyon-01.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="/src/assets/images/journey/california/2004.09-kings-canyon-01.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 portfolio-item isotope-item filter-california">
                <img src="/src/assets/images/journey/california/2004.09-kings-canyon-02.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Product 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="/src/assets/images/journey/california/2004.09-kings-canyon-02.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 portfolio-item isotope-item filter-arizona">
                <img src="/src/assets/images/journey/arizona/2004.12-grand-canyon-01.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Branding 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="/src/assets/images/journey/arizona/2004.12-grand-canyon-01.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 portfolio-item isotope-item filter-arizona">
                <img src="/src/assets/images/journey/arizona/2004.12-grand-canyon-02.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="/src/assets/images/journey/arizona/2004.12-grand-canyon-02.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 portfolio-item isotope-item filter-arizona">
                <img src="/src/assets/images/journey/arizona/2004.12-grand-canyon-03.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Product 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="/src/assets/images/journey/arizona/2004.12-grand-canyon-03.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 portfolio-item isotope-item filter-arizona">
                <img src="/src/assets/images/journey/arizona/2004.12-grand-canyon-04.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Branding 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="/src/assets/images/journey/arizona/2004.12-grand-canyon-04.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Journey