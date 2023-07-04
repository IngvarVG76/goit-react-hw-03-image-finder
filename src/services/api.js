import axios from 'axios';

const params = {
  key: '36587566-5f2e8f43046e4651407f546e8',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};

const fetchImages = async (searchQuery, page) => {
  // console.log(params);
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}`,
      { params }
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchImages;
