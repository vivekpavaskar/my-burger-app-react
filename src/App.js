import React from 'react';
import Layouts from './components/Layouts/Layouts';
import BurgerBulilder from './containers/BurgerBuilder/BurgerBuilder'
function App() {
  return (
    <div>
      <Layouts>
        <BurgerBulilder></BurgerBulilder>
      </Layouts>
    </div>
  );
}

export default App;
