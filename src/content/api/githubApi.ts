import axios from 'axios';

export const baseRepo = axios.create({
  baseURL: 'https://api.github.com/repos',
});

export const contentRepo = (
  ownerName: string,
  repoName: string,
  file: string = 'package.json'
) =>
  axios.create({
    baseURL: `https://api.github.com/repos/${ownerName}/${repoName}/contents/${file}`,
  });
