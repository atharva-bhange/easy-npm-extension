import React from 'react';

interface Props {
  pkg: {
    metadata: {
      links: {
        npm?: string;
        repository?: string;
        homepage?: string;
      };
      repository: {
        url: string;
      };
    };
  };
}

const SideBar: React.FC<Props> = ({ pkg }) => {
  const { homepage, npm } = pkg.metadata.links;
  const { repository } = pkg.metadata;
  return (
    <div
      style={{ minWidth: '56px' }}
      className="flex flex-col items-center justify-around flex-grow-0 flex-shrink bg-gray-400 rounded-lg w-14"
    >
      {npm && (
        <a href={npm} target="_blank">
          <svg
            style={{ color: '#C63332' }}
            focusable="false"
            className="w-10 h-10 transition transform cursor-pointer hover:scale-105"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"
            ></path>
          </svg>
        </a>
      )}
      {repository.url && (
        <a href={repository.url.slice(4)} target="_blank">
          <svg
            focusable="false"
            className="w-6 h-6 text-black transition transform cursor-pointer hover:scale-105"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"
            ></path>
          </svg>
        </a>
      )}
      {homepage && (
        <a href={homepage} target="_blank">
          <svg
            focusable="false"
            className="w-6 h-6 text-black transition transform cursor-pointer hover:scale-105"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
            ></path>
          </svg>
        </a>
      )}
    </div>
  );
};

export default SideBar;
