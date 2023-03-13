import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';

export const ToastStackContext = React.createContext();

function App() {
  const [toastStack, setToastStack] = React.useState([]);

  return (
    <ToastStackContext.Provider value={{ toastStack, setToastStack }}>
      <ToastPlayground />
      <Footer />
    </ToastStackContext.Provider>
  );
}

export default App;
