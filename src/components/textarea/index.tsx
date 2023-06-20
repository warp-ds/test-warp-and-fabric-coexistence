import { classes } from '../classes';
import FabricTextarea from './fabric-textarea';
import WarpTextarea from './warp-textarea';

const Textarea = () => {
  return (
    <>
    <h2>Textarea</h2>
    <div className="comparison">
      <section className={classes.designSystemSection}>
        <h3>Fabric</h3>
        <FabricTextarea />
      </section>
      <section className={classes.designSystemSection}>
        <h3>Warp</h3>
        <WarpTextarea />
      </section>
    </div>
  </>
  )
}

export default Textarea;
