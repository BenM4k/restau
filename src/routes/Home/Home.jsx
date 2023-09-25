import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrderModal from '../../Components/Modals/OrderModal';
import ReserveModal from '../../Components/Modals/ReserveModal';
import { toggleOrder, toggleReserve } from '../../Components/redux/slices/modals/modalSlice';

import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const {
    bannerHeader, bannerDesc, aboutHeader, aboutDesc,
  } = useSelector((store) => store.content);
  const { meals: dishes, categories } = useSelector((store) => store.dishes);
  const service = useSelector((store) => store.service);
  const testimonials = useSelector((store) => store.testimonial);
  const banner = useSelector((store) => store.banner);
  const gallery = useSelector((store) => store.gallery);
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
        <div className="banner-desc white-bg">
          <h1 className="main-header">{bannerHeader}</h1>
          <p className="p-text">{bannerDesc}</p>
          <button type="button" className="btn-primary" onClick={handleOrder}>Order Now</button>
        </div>
        <div className="banner-img">
          <img src={banner[0].image} alt="banner" />
        </div>
      </section>

      <section id="about" className="about-us app_flex">
        <h2>{aboutHeader}</h2>
        <div className="about-desc">
          <img src={banner[0].image} alt="" />
          <p className="p-text">{aboutDesc}</p>
        </div>
        <div className="about-gallery">
          <ul>
            {gallery ? gallery.map((image) => (
              <li key={image.name}>
                <img src="" alt="" />
                <p />
              </li>
            )) : <li>No images to display</li>}
          </ul>
        </div>
      </section>

      <section className="dishes">
        <h2>Check On Our dishes</h2>
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
            <li key={dish.id}>
              <img src={dish.pic} alt="" />
              <div className="dish-footer">
                <p className="p-text">{dish.name}</p>
                <button type="button" className="" onClick={() => handleDishDisplay(index)}>See details</button>
              </div>
            </li>
          )) : <li>No images to display</li>}
        </ul>
        <div className={meal ? 'dish-display' : 'no-display'}>
          <img src={meal?.pic} alt="" />
          <div className="dish-details">
            <h3>{meal?.name}</h3>
            <p className="p-text">{meal?.desc}</p>
            <span className="p-text">
              $
              {meal?.price}
            </span>
            <button type="button" className="btn-primary">Order Now</button>
          </div>
        </div>
      </section>

      <section id="services" className="why-us app_flex">
        <h2>Why Choose Us</h2>
        <ul className="service">
          {service?.length ? service.map((serv) => (
            <li key={serv?.id}>
              <FontAwesomeIcon icon={serv?.icon} />
              <h3>{serv?.title}</h3>
              <div className="line" />
              <p>{serv?.desc}</p>
            </li>
          )) : <li>No service</li>}
        </ul>
      </section>

      <section className="testimonials app_flex">
        <h2>Testimonial</h2>

        <div className="app__testimonial-item app_flex">
          <img src={test?.img} alt="testimonial" loading="lazy" />
          <div className="app__testimonial-content">
            <p className="p-text">{test?.feedback}</p>
            <div className="">
              <h4 className="bold-text">{test?.name}</h4>
              <h5 className="p-text">{test?.company}</h5>
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
