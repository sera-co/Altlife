import axios from 'axios';

export function axiosWithApiKey() {
  // CHANGE THIS LINE - port should be 3001, not 3000
  const apiBase = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';
  const apiKey = process.env.REACT_APP_API_KEY || 'change-me';

  return axios.create({
    baseURL: apiBase,
    headers: { 'x-api-key': apiKey }
  });
}