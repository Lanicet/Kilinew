import { create } from 'apisauce';

const getLoction = (latitude, longitude) => {
  const location = create({
    baseURL: 'https://nominatim.openstreetmap.org',
  });

  const response = location.get(
    `reverse?format=json&lat=${parseFloat(latitude)}&lon=${parseFloat(longitude)}`
  );
  return response;
};
export default { getLoction };
