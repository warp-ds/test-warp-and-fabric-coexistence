import Comparison from '../comparison';
import FabricSwitch from './fabric-toggle';
import WarpSWitch from './warp-toggle';

const Toggle = () => {
  return <Comparison name="Toggle" Fabric={FabricSwitch} Warp={WarpSWitch} />;
}

export default Toggle;
