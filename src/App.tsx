import React from 'react';
import Chico from './assets/images/chico.svg';

function App(): JSX.Element {
  return (
    <div>
      <div className="test">
        <h1>App Template With Images</h1>
        <img src={Chico} alt="" width="150px" />
      </div>
      <div className="test2">
        <p>By Jesús Guzmán</p>
      </div>
    </div>
  );
}

export default App;
