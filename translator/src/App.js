import React, { useState } from 'react';
import './App.css';
import Field from './components/Field'
import Languages from './components/Languages'
import Translate from './components/Translate'

const App = () => {
  const [language, setLanguage] = useState('ru');

  return (
    <div className="App">
      <Field label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}

export default App;
