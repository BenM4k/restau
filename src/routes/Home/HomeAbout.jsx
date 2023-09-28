import { useSelector } from 'react-redux';

const HomeAbout = () => {
  const { gallery, mainImg } = useSelector((store) => store.gallery);
  const {
    aboutHeader, aboutDesc,
  } = useSelector((store) => store.content);

  return (
    <>
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
    </>
  );
};

export default HomeAbout;
