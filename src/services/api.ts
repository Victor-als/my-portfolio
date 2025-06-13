import axios from 'axios';

export const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});


export const getRepos = async (username: string) => {
  const response = await github.get(`/users/${username}/repos`);
  return response.data;
};