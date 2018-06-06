import React, { Component } from 'react';
import { Provider } from 'react-redux'

import Main from './components/main.jsx';
import store from './redux/store/index_store.jsx'

import './App.css';




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
