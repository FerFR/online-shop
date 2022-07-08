import React from 'react';

const useUpdate = (fn: () => void, deps: any[]) => {
    const init = React.useRef(true);

    React.useEffect(() => {
        if (init.current) {
            init.current = false;
            return;
        }
        fn();
    }, deps);
};

export default useUpdate;
