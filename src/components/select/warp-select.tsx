import { Select } from '@warp-ds/react';

const WarpSelect = () => {
  return (
    <>
      <Select label="Berries">
        <option value="s">Strawberries</option>
        <option value="r">Raspberries</option>
        <option value="c">Cloudberries</option>
      </Select>
      <Select label="Berries" optional>
        <option value="s">Strawberries</option>
        <option value="r">Raspberries</option>
        <option value="c">Cloudberries</option>
      </Select>
      <Select label="Berries" hint="We'll make jam of your selection" always>
        <option value="s">Strawberries</option>
        <option value="r">Raspberries</option>
        <option value="c">Cloudberries</option>
      </Select>
      <Select label="Berries" invalid hint="The wrong selection gets you berried">
        <option value="s">Strawberries</option>
        <option value="r">Raspberries</option>
        <option value="c">Cloudberries</option>
      </Select>
    </>
  )
};

export default WarpSelect;
