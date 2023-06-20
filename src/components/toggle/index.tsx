import { classes } from '../classes';
import FabricSwitch from './fabric-toggle';
import WarpSWitch from './warp-toggle';

const Toggle = () => {
  return (
    <>
    <h2>Toggle</h2>
    <div className="comparison">
      <section className={classes.designSystemSection}>
        <h3>Fabric</h3>
        <FabricSwitch />
      </section>
      <section className={classes.designSystemSection}>
        <h3>Warp</h3>
        <WarpSWitch />
      </section>
    </div>
  </>
  )
}

export default Toggle;
