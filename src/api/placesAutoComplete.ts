import { create } from 'apisauce';
import { GOOGLE_MAPS_APIKEY } from '@env';
const getPlace = (searchKeyword) => {
  const location = create({
    baseURL: 'https://maps.googleapis.com/maps/api/place/autocomplete',
  });

  const response = location.get(
    `json?input=${searchKeyword}&key=${GOOGLE_MAPS_APIKEY}&language=fr}`
  );
  return response;
};
export default { getPlace };
