import { classes } from '../classes';
import FabricSlider from './fabric-slider';
import WarpSlider from './warp-slider';

const Steps = () => {
  return (
    <>
    <h2>Steps</h2>
    <div className="comparison">
      <section className={classes.designSystemSection}>
        <h3>Fabric</h3>
        <FabricSlider />
      </section>
      <section className={classes.designSystemSection}>
        <h3>Warp</h3>
        <WarpSlider />
      </section>
    </div>
  </>
  )
}

export default Steps;
