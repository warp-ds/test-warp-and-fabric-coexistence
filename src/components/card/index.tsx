import { classes } from '../classes';
import FabricCard from './fabric-card';
import WarpCard from './warp-card';

const Card = () => {
  return (
    <>
    <h2>Card</h2>
    <div className="comparison">
      <section className={classes.designSystemSection}>
        <h3>Fabric</h3>
        <FabricCard />
      </section>
      <section className={classes.designSystemSection}>
        <h3>Warp</h3>
        <WarpCard />
      </section>
    </div>
  </>
  )
}

export default Card;
