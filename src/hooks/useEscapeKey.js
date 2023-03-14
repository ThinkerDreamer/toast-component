import React from 'react';

function useEscapeKey(callback) {
  React.useEffect(() => {
    function checkForEsc(event) {
      if (event.code == 'Escape') {
        console.log('hit escape');
        callback();
      }
    }

    window.addEventListener('keydown', checkForEsc);

    return () => {
      window.removeEventListener('keydown', checkForEsc);
    };
  }, []);
}

export default useEscapeKey;
