import Comparison from '../comparison';
import FabricAttention from './fabric-attention';
import WarpAttention from './warp-attention';

const Attention = () => {
  return <Comparison name="Attention" Fabric={FabricAttention} Warp={WarpAttention} />
}

export default Attention;
