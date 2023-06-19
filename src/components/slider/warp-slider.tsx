import { useState } from 'react';
import { Slider } from '@warp-ds/react';

const FabricSlider = () => {
  const [value, setValue] = useState(2_500_000);

  return (
    <div style={{ width: '100%' }}>
      <output>{value}</output>
      <Slider
        onChange={(value) => setValue(value)}
        value={value}
        min={1000}
        max={10_000_000}
        step={1000}
      />
      <div className="space-y-32">
        <Slider aria-label="Disabled slider" value={50} disabled />
      </div>
    </div>
  );
};

export default FabricSlider;