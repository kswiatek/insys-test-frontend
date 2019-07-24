import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import MainContainer from './containers/mainContainer';

function App() {
  return (
    <BrowserRouter> 
      <div>
        <MainContainer />
      </div>
    </BrowserRouter> 
  );
}

export default App;
