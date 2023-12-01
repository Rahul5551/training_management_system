import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { MentorRouterRouter } from './Mentor';
import { AppContextProvider } from './AppContext';

function App() {
  return (

    <AppContextProvider>
      <BrowserRouter>
        <MentorRouterRouter />
      </BrowserRouter>
    </AppContextProvider>

  );
}

export default App;
