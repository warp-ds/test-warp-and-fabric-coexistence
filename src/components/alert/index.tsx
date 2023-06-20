import Comparison from '../comparison';
import FabricAlert from './fabric-alert';
import WarpAlert from './warp-alert';

const Alert = () => {
  return <Comparison name="Alert" Fabric={FabricAlert} Warp={WarpAlert} />;
}

export default Alert;
