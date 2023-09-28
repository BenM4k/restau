import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import BlurHashImg from '../../Components/BlurHashImg';

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

const HomeBanner = ({ handleOrder }) => {
  const {
    bannerHeader, bannerDesc,
  } = useSelector((store) => store.content);
  const banner = useSelector((store) => store.banner);

  return (
    <>
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
        <BlurHashImg image={banner[0].image} hash={banner[0].blurhash} alt="banner-image" />
      </div>
    </>
  );
};

HomeBanner.propTypes = {
  handleOrder: PropTypes.func.isRequired,
};
export default HomeBanner;
