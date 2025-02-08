import axios from 'axios';
import md5 from 'md5';

const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_API_KEY;
const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_API_KEY;

const generateHash = () => {
  const ts = new Date().getTime().toString();
  const hash = md5(ts + privateKey + publicKey);
  return { ts, hash };
};

const api = axios.create({
  baseURL: import.meta.env.VITE_MARVEL_API_BASE_URL,
  params: {
    apikey: publicKey,
  },
});

api.interceptors.request.use((config) => {
  const { ts, hash } = generateHash();
  config.params = {
    ...config.params,
    limit: 1,
    ts,
    hash,
  };

  return config;
});

export const getCharacters = async (params?: object) => {
  const response = await api.get('/characters', { params });
  return response.data;
};

export const getCharacterDetails = async (characterId: number) => {
  const response = await api.get(`/characters/${characterId}`);
  return response.data;
};

export const getCharacterComics = async (characterId: number) => {
  const response = await api.get(`/characters/${characterId}/comics`);
  return response.data;
};
