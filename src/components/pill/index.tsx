import Comparison from '../comparison';
import FabricPill from './fabric-pill';
import WarpPill from './warp-pill';

const Pill = () => {
  return <Comparison name="Expandable" Fabric={FabricPill} Warp={WarpPill} />

}

export default Pill;
