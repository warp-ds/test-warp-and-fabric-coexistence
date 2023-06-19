import { Button as FButton } from '@fabric-ds/react';
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
        <FButton pill>Pill</FButton>
        <FButton href="https://react.fabric-ds.io/button">Href</FButton>
        <FButton link>Link</FButton>
        <FButton quiet>Quiet</FButton>
      </section>
    </div>
  </>
  )
}

export default Button;
