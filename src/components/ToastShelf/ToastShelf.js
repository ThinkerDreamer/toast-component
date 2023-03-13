import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastStackContext } from '../App';

function ToastShelf() {
  const { toastStack } = React.useContext(ToastStackContext);

  return (
    <ol className={styles.wrapper}>
      {toastStack.map(({ variant, handleDismiss, id, children }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast
            variant={variant}
            handleDismiss={() => handleDismiss(id)}
            id={id}
          >
            {children}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
