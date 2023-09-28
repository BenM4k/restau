import { useSelector, useDispatch } from 'react-redux';

import HomeBanner from './HomeBanner';
import HomeAbout from './HomeAbout';
import HomeDishes from './HomeDishes';
import HomeService from './HomeService';
import HomeTestimonial from './HomeTestimonial';

import OrderModal from '../../Components/Modals/OrderModal';
import ReserveModal from '../../Components/Modals/ReserveModal';
import { toggleOrder, toggleReserve } from '../../Components/redux/slices/modals/modalSlice';

import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();

  const { orderModal, reserveModal } = useSelector((store) => store.modal);

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
        <HomeBanner handleOrder={handleOrder} />
      </section>

      <section id="about" className="about-us">
        <HomeAbout />
      </section>

      <section className="dishes app_center">
        <HomeDishes />
      </section>

      <section id="services" className="why-us app_flex">
        <HomeService />
      </section>

      <section className="testimonials app_flex">
        <HomeTestimonial />
      </section>
    </div>
  );
};

export default Home;
