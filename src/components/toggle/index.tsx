import Comparison from '../comparison';
import FabricToggle from './fabric-toggle';
import WarpToggle from './warp-toggle';

const Toggle = () => {
  return <Comparison name="Toggle" Fabric={FabricToggle} Warp={WarpToggle} />;
}

export default Toggle;
