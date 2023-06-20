import Comparison from '../comparison';
import FabricSelect from './fabric-select';
import WarpSelect from './warp-select';

const Select = () => {
  return <Comparison name="Select" Fabric={FabricSelect} Warp={WarpSelect} />;
}

export default Select;
