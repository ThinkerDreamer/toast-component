import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastStackContext = React.createContext();

function ToastsProvider({ children }) {
  const [toastStack, setToastStack] = React.useState([]);

  /* This custom hook allows the user to
  dismiss all toasts by hitting the escape key */
  const handleEscape = React.useCallback(() => {
    setToastStack([]);
  }, []);
  useEscapeKey(handleEscape);

  function addToast({ variant, message }) {
    const id = crypto.randomUUID();
    const newToast = {
      variant,
      id,
      children: message,
    };
    const nextToasts = [...toastStack, newToast];
    setToastStack(nextToasts);
  }

  function dismissToast(currentId) {
    const nextToastStack = toastStack.filter((slice) => {
      return slice.id !== currentId;
    });
    setToastStack(nextToastStack);
  }

  return (
    <ToastStackContext.Provider
      value={{ toastStack, addToast, dismissToast }}
    >
      {children}
    </ToastStackContext.Provider>
  );
}

export default ToastsProvider;
