import React, { useState } from 'react';

export interface CounterProps {
  start: number;
}

export const Counter = ({ start }: CounterProps) => {
  const [value, setValue] = useState(start);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <div className="p-12 flex gap-12">
      <button className="bg-sky-950 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full" onClick={decrement}>
        -
      </button>
      <h1 className="text-7xl text-sky-950">
        {value}
      </h1>
      <button className="bg-sky-950 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full" onClick={increment}>
        +
      </button>
    </div>
  );
}