// Import React
import React, { useEffect } from 'react';

// Imports from React-redux
import { 
  useSelector, 
  useDispatch
} from 'react-redux';

// Imports from viewportSlice
import { 
  selectMobileLayout, 
  setWindowHeight,
  setWindowWidth
} from './viewportSlice';

// Import Css file for App.js
import './App.css';

// Import BrowserRouter from react-router-dom
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';

// Import main App components
import Header from '../components/AppHeader/Header';
import Footer from '../components/AppFooter/Footer';
import SideBar from '../components/SideBar/SideBar';
import PageBody from '../components/PageBody/PageBody';
import TopBar from '../components/TopBar/TopBar';


// Main App Function
function App() {

  // create a variable mobileState that is set to a boolean based on the logic contained in viewport slice once the window dimensions are captured
  const mobileState = useSelector(selectMobileLayout);

  // Assigning the useDispatch function to a constant variable dispatch for ease of use
  const dispatch = useDispatch();

  // useEffect function that captures the size of the window and assigns it to the proper spots in the redux state so that the App can be responsive
  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(setWindowWidth(window.innerWidth));
      dispatch(setWindowHeight(window.innerHeight));
    })
  }, [dispatch]);

  const mobileAction = () => {
    while (!mobileState) {
      return (
        <Router className='App' >
          <Header />
          <div className='SideBarAndPageBody'>
            <SideBar />
            <PageBody />
          </div>
          <Footer />
        </Router>
      );
     }

     while (mobileState) {
      return (
        <Router className='mobileApp' >
          <Header />
          <TopBar />
          <PageBody />
          <Footer />
        </Router>
      );
     }
  }

  return mobileAction();

  
}

export default App;