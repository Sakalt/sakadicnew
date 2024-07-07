import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import WordPage from './pages/WordPage';
import SettingsPage from './pages/SettingsPage';
import CreateDictionary from './components/CreateDictionary';
import SentenceOfTheDay from './components/SentenceOfTheDay';
import WordGenerator from './components/WordGenerator';
import CreateWordForm from './components/CreateWordForm';
import CreateSentenceForm from './components/CreateSentenceForm';
import PrivacyPolicy from './components/PrivacyPolicy';
import Register from './components/Register';
import Login from './components/Login';
import DictionaryManagement from './components/DictionaryManagement';  // 追加

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/words/:wordId" component={WordPage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/create-dictionary" component={CreateDictionary} />
        <Route path="/sentence-of-the-day" component={SentenceOfTheDay} />
        <Route path="/word-generator" component={WordGenerator} />
        <Route path="/create-word" component={CreateWordForm} />
        <Route path="/create-sentence" component={CreateSentenceForm} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dictionary-management" component={DictionaryManagement} />  // 追加
      </Switch>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import WordPage from './pages/WordPage';
import SettingsPage from './pages/SettingsPage';
import CreateDictionary from './components/CreateDictionary';
import SentenceOfTheDay from './components/SentenceOfTheDay';
import WordGenerator from './components/WordGenerator';
import CreateWordForm from './components/CreateWordForm';
import CreateSentenceForm from './components/CreateSentenceForm';
import PrivacyPolicy from './components/PrivacyPolicy';
import Register from './components/Register';
import Login from './components/Login';
import DictionaryManagement from './components/DictionaryManagement';  // 追加

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/words/:wordId" component={WordPage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/create-dictionary" component={CreateDictionary} />
        <Route path="/sentence-of-the-day" component={SentenceOfTheDay} />
        <Route path="/word-generator" component={WordGenerator} />
        <Route path="/create-word" component={CreateWordForm} />
        <Route path="/create-sentence" component={CreateSentenceForm} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dictionary-management" component={DictionaryManagement} />  // 追加
      </Switch>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import WordPage from './pages/WordPage';
import SettingsPage from './pages/SettingsPage';
import CreateDictionary from './components/CreateDictionary';
import SentenceOfTheDay from './components/SentenceOfTheDay';
import WordGenerator from './components/WordGenerator';
import CreateWordForm from './components/CreateWordForm';
import CreateSentenceForm from './components/CreateSentenceForm';
import PrivacyPolicy from './components/PrivacyPolicy';
import Register from './components/Register';
import Login from './components/Login';
import DictionaryManagement from './components/DictionaryManagement';  // 追加

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/words/:wordId" component={WordPage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/create-dictionary" component={CreateDictionary} />
        <Route path="/sentence-of-the-day" component={SentenceOfTheDay} />
        <Route path="/word-generator" component={WordGenerator} />
        <Route path="/create-word" component={CreateWordForm} />
        <Route path="/create-sentence" component={CreateSentenceForm} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dictionary-management" component={DictionaryManagement} />  // 追加
      </Switch>
    </Router>
  );
}

export default App;
