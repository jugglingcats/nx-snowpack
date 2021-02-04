import React from 'react';

import './mylib.css';

/* eslint-disable-next-line */
export interface MylibProps {}

export const Mylib = (props: MylibProps) => {
  return (
    <div>
      <h1>THIS IS FROM COMPONENT IN MYLIB!!</h1>
    </div>
  );
};

export default Mylib;
