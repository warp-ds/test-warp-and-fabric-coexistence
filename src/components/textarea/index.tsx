import Comparison from '../comparison';
import FabricTextarea from './fabric-textarea';
import WarpTextarea from './warp-textarea';

const Textarea = () => {
  return <Comparison name="Textarea" Fabric={FabricTextarea} Warp={WarpTextarea} />;
}

export default Textarea;
