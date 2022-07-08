import React from 'react';

const useBodyScroll = (): [() => void, () => void] => {
    const bodyEl = document.getElementsByTagName('body')[0];

    const enable = () => {
        bodyEl.style.overflowY = 'auto';
    };
    const disable = () => {
        bodyEl.style.overflowY = 'hidden';
    };

    return [enable, disable];
};

export default useBodyScroll;
