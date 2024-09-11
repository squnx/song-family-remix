import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Story = () => {
  return (
    <>
      {/* Our Story Section */}
      <section id="story" className="story section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Story</h2>
          <p>Our Journey from Then to Now</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="/assets/images/our-story/2000-our-story-01.jpg" className="img-fluid" alt="Our Story" />
            </div>
            <div className="col-lg-8 content">
              <h2>The Journey of Us</h2>
              <p className="fst-italic py-3">
                Our story began with a chance meeting in 1995, where two souls connected and embarked on a journey that would shape the rest of their lives. Through love, laughter, and countless memories, our story is one of resilience, growth, and a deep bond that continues to strengthen over time.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Wedding Day:</strong> <span>December 26, 1995</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Moved to California:</strong> <span>April 1996</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>30th Wedding Anniversary:</strong> <span>December 2025</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phil's Birthday:</strong> <span>November 6, 1996</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Andy's Birthday:</strong> <span>February 18, 2000</span></li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                Throughout the years, we've faced both joys and challenges, but our love has only grown stronger. Each chapter of our story is filled with moments of happiness, lessons learned, and dreams fulfilled. As we continue to write the pages of our lives, we eagerly anticipate what the future holds for our family.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="reflections" className="reflections section">
      <img src="/assets/images/our-story/bg-reflections.jpg" className="reflections-bg" alt="" />
        <div className="container section-title" data-aos="fade-up">
          <h2>Family Reflections</h2>
          <p>Cherishing the moments that define us.</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            loop={true}
            speed={600}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
          <SwiperSlide>
            <div className="reflection-item">
              <img src="/assets/images/our-story/ivan_300x300.jpg" className="reflection-img" alt="Saul Goodman" />
              <h3>Ivan Song</h3>
              <h4>Software Engineer &amp; Freelancer</h4>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span>As the father of this wonderful family, I've witnessed firsthand our incredible journey together. From building our lives to raising our children, every moment has been a blessing. I'm grateful for my wife Terri's love and support, and for the amazing people our children have become. I look forward to making more memories together.</span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reflection-item">
              <img src="/assets/images/our-story/terri_140x140.jpg" className="reflection-img" alt="Saul Goodman" />
              <h3>Terri Song</h3>
              <h4>RN @ UCI Medical Center</h4>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span>As the mother of this amazing family, I've watched our children grow into incredible individuals. Our journey together has been filled with love and laughter. I'm grateful for Ivan's support and the bond we share with our children. I'm excited to see what the future holds for our family and the new memories we'll create together.</span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>
            <SwiperSlide>
              <div className="reflection-item">
                <img src="/assets/images/our-story/phil_400x400.jpg" className="reflection-img" alt="Saul Goodman" />
                <h3>Phil Song</h3>
                <h4>Business Development Representative @ Tab Commerce</h4>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="reflection-item">
                <img src="/assets/images/our-story/andy_400x400.jpg" className="reflection-img" alt="Sara Wilsson" />
                <h3>Andy Song</h3>
                <h4>Account Executive @ Amazon</h4>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlides here */}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </>
  );
}

export default Story;
