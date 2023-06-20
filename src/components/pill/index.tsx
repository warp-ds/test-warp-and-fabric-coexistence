import { classes } from '../classes';
import FabricPill from './fabric-pill';
import WarpPill from './warp-pill';

const Pill = () => {
  return (
    <>
    <h2>Pill</h2>
    <div className="comparison">
      <section className={classes.designSystemSection}>
        <h3>Fabric</h3>
        <FabricPill />
      </section>
      <section className={classes.designSystemSection}>
        <h3>Warp</h3>
        <WarpPill />
      </section>
    </div>
  </>
  )
}

export default Pill;
