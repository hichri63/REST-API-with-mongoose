import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contactList';
import ModalComp from "./components/Mymodule";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Contacts />
      <ModalComp editMode={false} />
      </header>
    </div>
  );
}

export default App;
