import axios from 'axios';

const API_KEY = '28389797-09b5d7989e1fd958a2bdadcb0';
axios.defaults.baseURL = `https://pixabay.com/api/`;

export const fetchGallery = async (query, page) => {
  const responce = await axios(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return responce.data;
};
