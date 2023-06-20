import Comparison from '../comparison';
import FabricCard from './fabric-card';
import WarpCard from './warp-card';

const Card = () => {
  return <Comparison name="Card" Fabric={FabricCard} Warp={WarpCard} />
}

export default Card;
