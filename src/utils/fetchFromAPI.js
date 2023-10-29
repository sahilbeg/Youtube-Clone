
//REACT_APP_RAPID_API_KEY = 'bfdf7d51e3msh131b67e2e334b07p162396jsnfe42e8330692' add this to .env file
import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

  const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async(url) =>{ 
    const { data } =  await axios.get(`${BASE_URL}/${url}`,options);
    return data; 
} 
