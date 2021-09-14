import React from 'react';

import { useQuery } from 'react-query';
import npmApi from 'content/api/npmApi';

const Inner: React.FC<{ search: string }> = ({ search }) => {
  useQuery(
    'packages',
    () => npmApi.get('/search', { params: { q: search, size: 3 } }),
    { enabled: search !== null }
  );

  return <div></div>;
};

export default Inner;
