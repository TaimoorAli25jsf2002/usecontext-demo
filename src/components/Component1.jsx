import React, {useContext} from 'react';
import { counterContext } from '../contexts/context';

const Component1 = () => {

    const counter = useContext(counterContext);
  return (
    <div>
      <h2>Component1 ({counter})</h2>
    </div>
  );
};

export default Component1;