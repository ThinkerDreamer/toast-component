import React from 'react';

export const ToastStackContext = React.createContext();

function ToastsProvider({ children }) {
  const [toastStack, setToastStack] = React.useState([]);

  React.useEffect(() => {
    function dismissAllOnEsc(e) {
      if (e.code === 'Escape') {
        setToastStack([]);
      }
    }

    window.addEventListener('keydown', dismissAllOnEsc);

    return () => {
      window.removeEventListener('keydown', dismissAllOnEsc);
    };
  }, []);

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
