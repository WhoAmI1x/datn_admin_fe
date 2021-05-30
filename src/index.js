import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import Loading from "./components/Loading";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";

import "antd/dist/antd.css";
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      {/* <React.StrictMode> */}
      <Loading>
        <App>{routes()}</App>
      </Loading>
      {/* </React.StrictMode> */}
    </Provider>
  </Router>,
  document.getElementById('root')
);