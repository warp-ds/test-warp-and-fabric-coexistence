import { FC } from 'react';
import { classes } from './classes';

type Props = {
  name: string,
  Fabric: FC,
  Warp: FC,
}
const Comparison = ({ name, Fabric, Warp}: Props) => {
  return (
    <>
    <h2>{name}</h2>
    <div className="comparison">
      <section className="ds-section shadow-4 flex flex-col">
        <h3>Fabric</h3>
        <Fabric />
      </section>
      <section className="ds-section shadow-4 flex flex-col">
        <h3>Warp</h3>
        <Warp />
      </section>
    </div>
  </>
  )
}

export default Comparison;
