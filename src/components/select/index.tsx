import { classes } from '../classes';
import FabricSelect from './fabric-select';
import WarpSelect from './warp-select';

const Steps = () => {
  return (
    <>
    <h2>Steps</h2>
    <div className="comparison">
      <section className={classes.designSystemSection}>
        <h3>Fabric</h3>
        <FabricSelect />
      </section>
      <section className={classes.designSystemSection}>
        <h3>Warp</h3>
        <WarpSelect />
      </section>
    </div>
  </>
  )
}

export default Steps;
