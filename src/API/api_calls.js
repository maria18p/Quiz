import axios from 'axios';
export const getData = async () => {
  try {
    return await axios.get('https://opentdb.com/api.php?amount=20&category=18');
  } catch (error) {
    console.error(error);
  }
};
