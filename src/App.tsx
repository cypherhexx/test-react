import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ApiSlice from './features/apiSearchSlice/apisearchSlice';
import { ApiSearch } from './features/apiSearchSlice/ApiSearch';

function App() {
  return (
    <div className="App">
       <ApiSearch />
    </div>
  );
}

export default App;
