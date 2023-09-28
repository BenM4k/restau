import { useSelector } from 'react-redux';
import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const HomeTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(() => 0);
  const testimonials = useSelector((store) => store.testimonial);
  const test = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <h2 className="head-text">Testimonial</h2>

      <div className="app__testimonial-item app_flex">
        <img src={test?.img} alt="testimonial" loading="lazy" />
        <div className="app__testimonial-content">
          <p className="p-text1">{test?.feedback}</p>
          <div className="">
            <h4 className="bold-text">{test?.name}</h4>
            <h5 className="p-text1">{test?.company}</h5>
          </div>
        </div>
      </div>

      <div className="app__testimonial-btns app_flex">
        <div
          className="app_flex"
          onClick={() => {
            handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
          }}
          onKeyDown={() => null}
          role="button"
          tabIndex="0"
        >
          <HiChevronLeft />
        </div>
        <div
          className="app_flex"
          onClick={() => {
            handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
          }}
          onKeyDown={() => null}
          role="button"
          tabIndex="0"
        >
          <HiChevronRight />
        </div>
      </div>
    </>
  );
};

export default HomeTestimonial;
