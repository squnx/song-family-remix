import { useState, useRef, useEffect } from 'react';

const LazyImage = ({ src, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Load the image when it comes into view
            observer.disconnect(); // Stop observing once the image is loaded
          }
        });
      },
      { rootMargin: '2000px' } // Preload images 200px before they enter the viewport
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : ''}
      alt={alt}
      className={className}
      loading="lazy" // Ensure the browser also lazy loads the image
    />
  );
};

export default LazyImage;
