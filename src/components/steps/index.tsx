import Comparison from '../comparison';
import FabricSteps from './fabric-steps';
import WarpSteps from './warp-steps';

const Steps = () => {
  return <Comparison name="Steps" Fabric={FabricSteps} Warp={WarpSteps} />;
}

export default Steps;
