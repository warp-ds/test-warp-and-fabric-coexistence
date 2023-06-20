import { classes } from '../classes';
import FabricSwitch from './fabric-switch';
import WarpSWitch from './warp-switch';

const Switch = () => {
  return (
    <>
    <h2>Switch</h2>
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

export default Switch;
