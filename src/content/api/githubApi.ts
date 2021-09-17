import axios from 'axios';
import gh from 'parse-github-url';

export const baseRepo = axios.create({
  baseURL: 'https://api.github.com/repos',
});

export const contentRepo = (url: string, file: string = 'package.json') => {
  const { owner, name } = gh(url);

  return axios.create({
    baseURL: `https://api.github.com/repos/${encodeURIComponent(
      owner
    )}/${encodeURIComponent(name)}/contents/${encodeURIComponent(file)}`,
  });
};
