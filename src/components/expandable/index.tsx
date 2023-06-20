import { classes } from '../classes';
import FabricExpandable from './fabric-expandable';
import WarpExpandable from './warp-expandable';

const Expandable = () => {
  return (
    <>
    <h2>Expandable</h2>
    <div className="comparison">
      <section className={classes.designSystemSection}>
        <h3>Fabric</h3>
        <FabricExpandable />
      </section>
      <section className={classes.designSystemSection}>
        <h3>Warp</h3>
        <WarpExpandable />
      </section>
    </div>
  </>
  )
}

export default Expandable;
