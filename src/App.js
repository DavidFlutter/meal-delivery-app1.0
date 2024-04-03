import './App.css';
import Header from './Header';
import Cart from './Cart';
import AllMeal from './AllMeal';
import LoginPage from './LoginPage';
import LoginAsCheftBtn from './LoginAsCheftBtn';
import ChefPage from './ChefPage';
import {BrowserRouter as Router,  Routes, Route} from "react-router-dom";
import { useState } from 'react';
import GlobalContext from './context/MealsContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <GlobalContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <div className="App">
        <div className="wrapper">          
          <Router>
          <LoginAsCheftBtn></LoginAsCheftBtn>
          <Header></Header>
            <Routes>
              {/* All meals route */}
              <Route path='/' element={<AllMeal></AllMeal>}></Route>
              {/* Cart route */}
              <Route path='/cart' element={<Cart></Cart>}></Route>
              {/* Login route */}
              <Route path='/login' element={<LoginPage></LoginPage>}></Route>
              {/* Chef page route */}
              <Route path='/chefpage' element={<ChefPage></ChefPage>}></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
