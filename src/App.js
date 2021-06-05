import React from 'react';
import GoogleSheetsProvider from 'react-db-google-sheets';
import Home from './Home'
import Home2 from './home2'

const App = () => (
  <div >
  <GoogleSheetsProvider >
    <Home2 />
  </GoogleSheetsProvider>
  </div>
);

export default App;