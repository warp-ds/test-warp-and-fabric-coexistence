import { useState } from 'react';
import { Toggle } from '@warp-ds/react';

const WarpToggle = () => {
  // First example
  const [checked, setChecked] = useState(false);

  // Second example
  const [selected, setSelected] = useState([
    { label: 'Microsoft', value: 'microsoft' },
  ]);

  const handleSelect = (entry: { label: string, value: string}) => {
    if (selected.some((e) => e.value === entry.value)) {
      return setSelected(selected.filter((s) => s.value !== entry.value));
    }

    return setSelected([...selected, entry]);
  };

  // Third example
  const [checked2, setChecked2] = useState('No');
  const answer = checked2 ? 'Yes' : 'No';

  // Forth example
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([
    { label: 'Apple pie', value: 'apple pie' },
    { label: 'Pavlova', value: 'pavlova' },
  ]);

  const options = [
    { label: 'Apple pie', value: 'apple pie' },
    { label: 'Carrot cake', value: 'carrot cake' },
    { label: 'Pavlova', value: 'pavlova' },
  ];

  const handleSelectAll = (checked: boolean) => {
    if (checked === false) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options);
    }
    setSelectAllChecked(checked);
  };

  const handleSelect4 = (selected: { label: string, value: string }) => {
    let updatedSelected = selectedOptions;

    if (selectedOptions.some((option) => option.value === selected.value)) {
      updatedSelected = selectedOptions.filter(
        (option) => option.value !== selected.value,
      );
    } else {
      updatedSelected = [...selectedOptions, selected];
    }

    if (selectedOptions.length === options.length) setSelectAllChecked(false);
    if (updatedSelected.length === options.length) setSelectAllChecked(true);

    setSelectedOptions(updatedSelected);
  };

  return (
    <>
      <p>First example:</p>
      <p> {checked.toString()} </p>
      <Toggle
        type="checkbox"
        label="Apple"
        defaultChecked={checked}
        onChange={(checked) => setChecked(checked)}
      />
      <p> Second example:</p>
      <p>{JSON.stringify(selected)}</p>
      <Toggle
        type="checkbox"
        title="Companies"
        defaultSelected={selected}
        options={[
          { label: 'Apple', value: 'apple' },
          { label: 'Microsoft', value: 'microsoft' },
        ]}
        onChange={handleSelect}
      />
      <p> Third example:</p>
      <p className="h4">Is checkbox selected? {answer}</p>
      <Toggle
        type="checkbox"
        label={answer}
        defaultChecked={!!checked2}
        onChange={(checked2) => setChecked2(checked2)}
        noVisibleLabel
      />
      <p> Forth example:</p>
      <Toggle
        onChange={handleSelectAll}
        checked={selectAllChecked}
        type="checkbox"
        label="Select all desserts"
        indeterminate={
          selectedOptions.length > 0 &&
          selectedOptions.length !== options.length
        }
      />
      <Toggle
        title="Favourite desserts"
        type="checkbox"
        selected={selectedOptions}
        options={options}
        onChange={handleSelect4}
      />
    </>
  );
}

export default WarpToggle;
