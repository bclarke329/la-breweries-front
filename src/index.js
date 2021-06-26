import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';
import Home from './components/Home'
import About from './components/About'
import AllBreweries from './components/AllBreweries'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) )

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="allbrews" component={AllBreweries} />
      <App />
      </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

