import { classes } from '../classes';
import FabricButton from './fabric-button';
import WarpButton from './warp-button';

const Button = () => {
  return (
    <>
    <h2>Alert</h2>
    <div className="comparison">
      <section className={classes.designSystemSection}>
        <h3>Fabric</h3>
        <FabricButton />
      </section>
      <section className={classes.designSystemSection}>
        <h3>Warp</h3>
        <WarpButton />
      </section>
    </div>
  </>
  )
}

export default Button;
