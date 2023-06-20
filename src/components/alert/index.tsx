import { classes } from '../classes';
import FabricAlert from './fabric-alert';
import WarpAlert from './warp-alert';

const Alert = () => {
  return (
    <>
    <h2>Alert</h2>
    <div className="comparison">
      <section className={classes.designSystemSection}>
        <h3>Fabric</h3>
        <FabricAlert />
      </section>
      <section className={classes.designSystemSection}>
        <h3>Warp</h3>
        <WarpAlert />
      </section>
    </div>
  </>
  )
}

export default Alert;
