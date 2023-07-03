import axios from 'axios';

const fetchImages = async (searchQuery, params) => {
  // console.log(params);
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${searchQuery}`,
      { params: params }
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchImages;
