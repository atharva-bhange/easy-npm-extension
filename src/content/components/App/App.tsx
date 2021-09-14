import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Inner from '../Inner';

const queryClient = new QueryClient();

const App = () => {
  const [search, setSearch] = useState<string | null>(null);

  useEffect(() => {
    const element = document.querySelectorAll<HTMLInputElement>(
      '[aria-label="Search"]'
    );
    if (element.length > 0) {
      const value = element.item(0).value;

      if (value && value !== '') setSearch(value);
    }
  }, []);

  if (search === null) return <></>;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full h-20 mb-4 bg-blue-200">
        {search}
        <Inner search={search} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
