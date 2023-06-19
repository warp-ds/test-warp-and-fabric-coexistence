import { classes } from '../classes';
import { FabricSteps } from './fabric-steps';
import { WarpSteps } from './warp-steps';

const Steps = () => {
  return (
    <>
    <h2>Steps</h2>
    <div className="comparison">
      <section className={classes.designSystemSection}>
        <h3>Fabric</h3>
        <FabricSteps />
      </section>
      <section className={classes.designSystemSection}>
        <h3>Warp</h3>
        <WarpSteps />
      </section>
    </div>
  </>
  )
}

export default Steps;
