import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrderModal from '../../Components/Modals/OrderModal';
import ReserveModal from '../../Components/Modals/ReserveModal';
import { toggleOrder, toggleReserve } from '../../Components/redux/slices/modals/modalSlice';

import './Home.scss';

const welcomeVariants = {
  start: { x: '-100vw' },
  end: {
    x: '0',
    transition: {
      type: 'spring',
      delay: 0.5,
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const Home = () => {
  const dispatch = useDispatch();
  const {
    bannerHeader, bannerDesc, aboutHeader, aboutDesc,
  } = useSelector((store) => store.content);
  const { meals: dishes, categories } = useSelector((store) => store.dishes);
  const service = useSelector((store) => store.service);
  const testimonials = useSelector((store) => store.testimonial);
  const banner = useSelector((store) => store.banner);
  const { gallery, mainImg } = useSelector((store) => store.gallery);
  const { orderModal, reserveModal } = useSelector((store) => store.modal);
  const [currentDish, setCurrentDish] = useState(null);
  const [currentCat, setCurrentCat] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const filteredDishes = dishes.filter((dish) => dish.cat.includes(currentCat));
  const test = testimonials[currentIndex];
  const meal = filteredDishes[currentDish];
  const handleCatDisplay = (cat) => {
    setCurrentCat(cat);
    setCurrentDish(null);
  };
  const handleDishDisplay = (index) => {
    setCurrentDish(index);
  };
  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  const handleOrder = () => {
    dispatch(toggleOrder());
  };

  const handleReserve = () => {
    dispatch(toggleReserve());
  };

  return (
    <div className="home-container">
      <div className="modals">
        {orderModal && (
          <div className="order-modal">
            <OrderModal />
          </div>
        )}
        {reserveModal && (
          <div className="order-modal">
            <ReserveModal />
          </div>
        )}
      </div>
      <div className="widgets">
        <button type="button" className=" btn-primary" onClick={handleReserve}>Reserve Now</button>
        <button type="button" className=" btn-primary" onClick={handleOrder}>Order Now</button>
      </div>
      <section className="banner app_flex">
        <motion.div
          className="banner-desc white-bg"
          variants={welcomeVariants}
          initial="start"
          animate="end"
        >
          <h1 className="main-header head-text">{bannerHeader}</h1>
          <p className="p-text1">{bannerDesc}</p>
          <button type="button" className="btn-primary" onClick={handleOrder}>Order Now</button>
        </motion.div>
        <div className="banner-img">
          <img src={banner[0].image} alt="banner" />
        </div>
      </section>

      <section id="about" className="about-us">
        <div className="about-container app_center">
          <h2 className="head-text">{aboutHeader}</h2>
          <div className="about-desc">
            <img src={mainImg} alt="" />
            <p className="p-text1">{aboutDesc}</p>
          </div>
          <div className="about-gallery">
            <ul>
              {gallery ? gallery.map((image) => (
                <li key={image.id}>
                  <img src={image.pic} alt="" />
                  <p />
                </li>
              )) : <li>No images to display</li>}
            </ul>
          </div>
        </div>
      </section>

      <section className="dishes app_center">
        <h2 className="head-text">Check On Our dishes</h2>
        <div className="dish-category">
          <h3>Categories</h3>
          <ul>
            {categories?.map((category) => (
              <button
                type="button"
                key={category}
                className={category === currentCat ? 'btn-primary' : 'btn-disabled'}
                onClick={() => handleCatDisplay(category)}
              >
                {category}
              </button>
            ))}
          </ul>
        </div>
        <ul className="dish-list">
          {filteredDishes?.length ? filteredDishes?.map((dish, index) => (
            <li
              key={dish.id}
            >
              <img src={dish.pic} alt="" loading="lazy" />
              <motion.div
                className="dish-footer"
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
              >
                <p className="p-text">
                  {dish.name}
                </p>
                <button type="button" className="" onClick={() => handleDishDisplay(index)}>See details</button>
              </motion.div>
            </li>
          )) : <li>No images to display</li>}
        </ul>
        <div className={meal ? 'dish-display' : 'no-display'}>
          <img src={meal?.pic} alt="" loading="lazy" />
          <div className="dish-details">
            <h3>{meal?.name}</h3>
            <p className="p-text1">{meal?.desc}</p>
            <span className="p-text">
              $
              {meal?.price}
            </span>
            <button type="button" className="btn-primary">Order Now</button>
          </div>
        </div>
      </section>

      <section id="services" className="why-us app_flex">
        <div className="why-container app_center">
          <h2 className="head-text">Why Choose Us</h2>
          <ul className="service">
            {service?.length ? service.map((serv) => (
              <li key={serv?.id}>
                <FontAwesomeIcon icon={serv?.icon} />
                <h3>{serv?.title}</h3>
                <div className="line" />
                <p className="p-text1">{serv?.desc}</p>
              </li>
            )) : <li>No service</li>}
          </ul>
        </div>
      </section>

      <section className="testimonials app_flex">
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
      </section>
    </div>
  );
};

export default Home;
