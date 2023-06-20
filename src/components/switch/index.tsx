import Comparison from '../comparison';
import FabricSwitch from './fabric-switch';
import WarpSWitch from './warp-switch';

const Switch = () => {
  return <Comparison name="Switch" Fabric={FabricSwitch} Warp={WarpSWitch} />;
}

export default Switch;
