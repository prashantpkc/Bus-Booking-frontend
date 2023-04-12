import React from 'react';
import SearchBus from '../../Components/SearchBus/SearchBus';

import "./Homepage.css"

const HomePage = () => {
  return (
    <div>
      <img
          className="d-block w-100"
          src="https://www.nationalexpressgroup.com/media/ep3dno5d/homepage-banner.png?anchor=center&mode=crop&width=1600&height=400&rnd=132786279893570000"
          alt="First slide"
        />
        <SearchBus/>
    </div>
  );
};

export default HomePage;
