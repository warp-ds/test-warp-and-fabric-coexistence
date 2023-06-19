import { Button as FButton } from '@fabric-ds/react';
import { Button as WButton } from '@warp-ds/react';
import { classes } from './classes';

const Button = () => {
  return (
    <>
    <h2>Buttons</h2>
    <div className="comparison">
      <section className={classes.designSystemSection}>
        <h3>Fabric</h3>
        <FButton>Default</FButton>
        <FButton primary>Primary</FButton>
        <FButton negative>Negative</FButton>
        <FButton secondary>Secondary</FButton>
        <FButton loading>Loading</FButton>
        <FButton small>Small</FButton>
        <FButton small primary>Small primary</FButton>
        <FButton small negative>Small negative</FButton>
        <FButton small secondary quiet>Small secondary quiet</FButton>
        <FButton pill>Pill</FButton>
        <FButton href="https://react.fabric-ds.io/button">Href</FButton>
        <FButton link>Link</FButton>
        <FButton quiet>Quiet</FButton>
      </section>
      <section className={classes.designSystemSection}>
        <h3>Warp</h3>
        <WButton>Default</WButton>
        <WButton primary>Primary</WButton>
        <WButton negative>Negative</WButton>
        <WButton secondary>Secondary</WButton>
        <WButton loading>Loading</WButton>
        <WButton small>Small</WButton>
        <WButton small primary>Small</WButton>
        <WButton small negative>Small negative</WButton>
        <WButton small secondary quiet>Small secondary quiet</WButton>
        <WButton pill>Pill</WButton>
        <WButton href="https://react.fabric-ds.io/button">Href</WButton>
        <WButton link>Link</WButton>
        <WButton quiet>Quiet</WButton>
      </section>
    </div>
  </>
  )
}

export default Button;
