import React from 'react';

function useToggle<T, K>(oldValue: T, newValue: K): [T | K, () => void] {
    const [value, setValue] = React.useState<T | K>(oldValue);

    const toggle = () => {
        if (value === oldValue) {
            setValue(newValue);
        } else {
            setValue(oldValue);
        }
    };

    return [value, toggle];
}

export default useToggle;
