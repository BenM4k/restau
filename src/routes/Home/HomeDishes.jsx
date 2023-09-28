import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import BlurHashImg from '../../Components/BlurHashImg';

const HomeDishes = () => {
  const [currentDish, setCurrentDish] = useState(() => null);
  const [currentCat, setCurrentCat] = useState(() => 'All');

  const { meals: dishes, categories } = useSelector((store) => store.dishes);

  const filteredDishes = dishes.filter((dish) => dish.cat.includes(currentCat));
  const meal = filteredDishes[currentDish];

  const handleCatDisplay = (cat) => {
    setCurrentCat(cat);
    setCurrentDish(null);
  };

  const handleDishDisplay = (index) => {
    setCurrentDish(index);
  };

  return (
    <div>
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
            <BlurHashImg image={dish.pic} hash={dish.blurhash} alt={dish.name} />
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
    </div>
  );
};

export default HomeDishes;
