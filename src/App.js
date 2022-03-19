import { Routes, Route } from 'react-router-dom';

import Header from "./layouts/Header/Header";
import Homepage from  './layouts/Homapage/Homapage';
import Shop from './layouts/Shop/Shop';
import WomenCollection from './layouts/WomenCollection/WomenCollection';
import MenCollection from "./layouts/MenCollection/MenCollection";
import SignIn from "./layouts/SignIn/SignIn";
import SignUp from "./layouts/SignUp/SignUp";

import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Header/>}>
          <Route index element={ <Homepage/> }/>
          <Route path='shop' element={ <Shop/> }/>
          <Route path='women-collection' element={ <WomenCollection/> }/>
          <Route path='men-collection' element={ <MenCollection/> }/>
          <Route path='sign-in' element={ <SignIn/> }/>
          <Route path='sign-up' element={ <SignUp/> }/>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
