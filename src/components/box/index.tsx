import { classes } from '../classes';
import FabricBox from './fabric-box';
import WarpBox from './warp-box';

const Box = () => {
  return (
    <>
    <h2>Box</h2>
    <div className="comparison">
      <section className={classes.designSystemSection}>
        <h3>Fabric</h3>
        <FabricBox />
      </section>
      <section className={classes.designSystemSection}>
        <h3>Warp</h3>
        <WarpBox />
      </section>
    </div>
  </>
  )
}

export default Box;
