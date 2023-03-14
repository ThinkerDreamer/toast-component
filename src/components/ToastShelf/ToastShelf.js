import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastStackContext } from '../ToastsProvider';

function ToastShelf() {
  const { toastStack, dismissToast } =
    React.useContext(ToastStackContext);

  return (
    <ol className={styles.wrapper}>
      {toastStack.map(({ variant, id, children }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast
            variant={variant}
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
