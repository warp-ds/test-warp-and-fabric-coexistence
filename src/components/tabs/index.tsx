import Comparison from '../comparison';
import FabricTabs from './fabric-tabs';
import WarpTabs from './warp-tabs';

const Tabs = () => {
  return <Comparison name="Tabs" Fabric={FabricTabs} Warp={WarpTabs} />;
}

export default Tabs;
