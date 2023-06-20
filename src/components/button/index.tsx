import Comparison from '../comparison';
import FabricButton from './fabric-button';
import WarpButton from './warp-button';

const Button = () => {
  return <Comparison name="Button" Fabric={FabricButton} Warp={WarpButton} />;
}

export default Button;
