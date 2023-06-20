import { classes } from '../classes';
import FabricTextfield from './fabric-textfield';
import WarpTextfield from './warp-textfield';

const Textfield = () => {
  return (
    <>
    <h2>Textfield</h2>
    <div className="comparison">
      <section className={classes.designSystemSection}>
        <h3>Fabric</h3>
        <FabricTextfield />
      </section>
      <section className={classes.designSystemSection}>
        <h3>Warp</h3>
        <WarpTextfield />
      </section>
    </div>
  </>
  )
}

export default Textfield;
