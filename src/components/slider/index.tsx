import Comparison from '../comparison';
import FabricSlider from './fabric-slider';
import WarpSlider from './warp-slider';

const Slider = () => {
  return <Comparison name="Slider" Fabric={FabricSlider} Warp={WarpSlider} />;
}

export default Slider;
