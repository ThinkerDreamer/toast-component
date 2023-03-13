import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastStackContext } from '../App';

function ToastShelf() {
  const { toastStack } = React.useContext(ToastStackContext);

  const toastSlices = toastStack.map((slice) => (
    <li className={styles.toastWrapper} key={slice.id}>
      {slice}
    </li>
  ));

  return <ol className={styles.wrapper}>{toastSlices}</ol>;
}

export default ToastShelf;
