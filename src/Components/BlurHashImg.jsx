import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Blurhash } from 'react-blurhash';

const BlurHashImg = ({ image, hash, alt }) => {
  const [loaded, setLoaded] = useState(() => false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = image;
  }, [image]);

  return (
    <>
      {!loaded && (
        <Blurhash
          hash={hash}
          width={240}
          height={260}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      {loaded && (
        <img
          src={image}
          alt={alt}
        />
      )}
    </>
  );
};

BlurHashImg.propTypes = {
  image: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default BlurHashImg;
