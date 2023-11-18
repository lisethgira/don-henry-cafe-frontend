import  { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../assets/images/1.jpg';
import Image2 from '../assets/images/2.jpg';
import Image3 from '../assets/images/3.jpg';
import Image4 from '../assets/images/4.jpg';

const ImageSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const interval = setInterval(() => {
      slider.slickNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };

  return (
    <Slider ref={sliderRef} {...settings} className="relative">
      <div>
        <img src={Image1} alt="Portada 1" className="mx-auto w-full h-96 object-cover" />
      </div>
      <div>
        <img src={Image2} alt="Portada 2" className="mx-auto w-full h-96 object-cover" />
      </div>
      <div>
        <img src={Image3} alt="Malteada" className="mx-auto w-full h-96 object-cover" />
      </div>
      <div>
        <img src={Image4} alt="Cafe" className="mx-auto w-full h-96 object-cover" />
      </div>
    </Slider>
  );
};

export default ImageSlider;


