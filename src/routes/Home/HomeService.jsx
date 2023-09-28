import { useSelector } from 'react-redux';

const HomeService = () => {
  const service = useSelector((store) => store.service);

  return (
    <div className="why-container app_center">
      <h2 className="head-text">Why Choose Us</h2>
      <ul className="service">
        {service?.length ? service.map((serv) => (
          <li key={serv?.id}>
            <h3>{serv?.title}</h3>
            <div className="line" />
            <p className="p-text1">{serv?.desc}</p>
          </li>
        )) : <li>No service</li>}
      </ul>
    </div>
  );
};

export default HomeService;
