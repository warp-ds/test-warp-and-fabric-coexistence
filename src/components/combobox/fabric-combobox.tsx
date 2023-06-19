import { Combobox, Affix } from '@fabric-ds/react';
import { useState } from 'react';

const FabricCombobox = () => {
  // First example
  const [value, setValue] = useState('');
  // Second example
  const [value2, setValue2] = useState('');

  return (
    <>
      <p>Fruits you can search for: Apple, Banana, Orange, Pineapple</p>
      <p>Example 1</p>
      <Combobox
        label="Choose a fruit"
        value={value}
        onChange={(val) => setValue(val)}
        onSelect={(val) => setValue(val)}
        options={[
          { value: 'Apple' },
          { value: 'Banana' },
          { value: 'Orange' },
          { value: 'Pineapple' },
        ]}
      />
      <p>Example 2</p>
      <Combobox
        label="Choose a fruit"
        placeholder="Your favorite fruit"
        value={value2}
        onChange={(val) => setValue2(val)}
        onSelect={(val) => setValue2(val)}
        matchTextSegments
        options={[
          { value: 'Apple', label: '🍎 Apple' },
          { value: 'Banana', label: '🍌 Banana' },
          { value: 'Orange', label: '🍊 Orange' },
          { value: 'Pineapple', label: '🍍 Pineapple' },
        ]}
      >
        <Affix
          suffix
          clear
          aria-label="Clear text"
          onClick={() => setValue2('')}
        />
      </Combobox>
    </>
  )
};

export default FabricCombobox;
