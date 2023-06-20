import Comparison from '../comparison';
import FabricBox from './fabric-box';
import WarpBox from './warp-box';

const Box = () => {
  return <Comparison name="Box" Fabric={FabricBox} Warp={WarpBox} />
}

export default Box;
