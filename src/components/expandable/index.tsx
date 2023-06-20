import Comparison from '../comparison';
import FabricExpandable from './fabric-expandable';
import WarpExpandable from './warp-expandable';

const Expandable = () => {
  return <Comparison name="Expandable" Fabric={FabricExpandable} Warp={WarpExpandable} />
}

export default Expandable;
