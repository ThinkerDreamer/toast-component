import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastStackContext } from '../ToastsProvider';
import VisuallyHidden from '../VisuallyHidden';

function ToastShelf() {
  const { toastStack } = React.useContext(ToastStackContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastStack.map(({ variant, id, children }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} id={id}>
            <VisuallyHidden>{variant} - </VisuallyHidden>
            {children}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
