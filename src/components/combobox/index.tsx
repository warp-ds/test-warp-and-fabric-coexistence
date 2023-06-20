import Comparison from '../comparison';
import FabricCombobox from './fabric-combobox';
import WarpCombobox from './warp-combobox';

const Combobox = () => {
  return <Comparison name="Combobox" Fabric={FabricCombobox} Warp={WarpCombobox} />
};

export default Combobox;
