import { classes } from '../classes';
import FabricCombobox from './fabric-combobox';
import WarpCombobox from './warp-combobox';

const Combobox = () => {
  return (
    <>
    <h2>Combobox</h2>
    <p>These examples does not cover all combobox examples in Fabric</p>
    <div className="comparison">
      <section className={classes.designSystemSection}>
        <h3>Fabric</h3>
        <FabricCombobox />
      </section>
      <section className={classes.designSystemSection}>
        <h3>Warp</h3>
        <WarpCombobox />
      </section>
    </div>
  </>
  )
}

export default Combobox;
