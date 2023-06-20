import { useState } from 'react';
import { Switch } from '@warp-ds/react';

const WarpSwitch = () => {
  const [value, setValue] = useState(false);
  const [value2, setValue2] = useState(false);

  return (
    <>
      <Switch
        value={value}
        onClick={() => setValue(!value)}
        aria-label="Toggle switch"
      />
      <Switch
        value={value2}
        onClick={() => {
          setValue2(!value2);
          alert('Your own custom action when toggled');
        }}
        aria-label="Toggle switch"
      />
    </>
  );
};

export default WarpSwitch;
