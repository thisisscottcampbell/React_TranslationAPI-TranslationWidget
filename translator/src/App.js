import React from 'react';
import './App.css';
import Field from './components/Field'
import Languages from './components/Languages'
import Translate from './components/Translate'

const App = () => {
  return (
    <div className="App">
      <Field />
      <Languages />
      <hr />
      <Translate />
    </div>
  );
}

export default App;
