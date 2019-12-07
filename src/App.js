import React from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import store from './store';
import ErrorBoundary from './errorBoundary';
import Route from './routes/route';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <Route />
        </BrowserRouter>
      </ErrorBoundary>
    // </Provider>
  );
}

export default App;
