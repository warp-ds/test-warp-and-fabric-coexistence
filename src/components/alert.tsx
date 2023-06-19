import { Alert as FAlert, Button as FButton } from '@fabric-ds/react';
import { Alert as WAlert, Button as WButton } from '@warp-ds/react';
import { classes } from './classes';

const Alert = () => {

  return (
    <>
    <h2>Alert</h2>
    <div className="comparison">
      <section className={classes.designSystemSection}>
        <h3>Fabric</h3>
        <FAlert type="info" show={true}>
          <p className="font-bold">This is "info" variant of the alert element</p>
          <p>With an additional description</p>
          <a>And a link to more information</a>
          <div className="mt-8 space-x-8">
            <FButton small>Primary button</FButton>
            <FButton small secondary quiet>
              Secondary button
            </FButton>
          </div>
        </FAlert>
        <FAlert type="negative" show>
          This is "negative" variant of the alert element
        </FAlert>
        <FAlert type="positive" show>
          This is "positive" variant of the alert element
        </FAlert>
        <FAlert type="warning" show>
          This is "warning" variant of the alert element
        </FAlert>
        <FAlert type="info" show>
          This is "info" variant of the alert element
        </FAlert>
      </section>
      <section className={classes.designSystemSection}>
        <h3>Warp</h3>
        <WAlert type="info" show={true}>
          <p className="font-bold">This is "info" variant of the alert element</p>
          <p>With an additional description</p>
          <a>And a link to more information</a>
          <div className="mt-8 space-x-8">
            <WButton small>Primary button</WButton>
            <WButton small secondary quiet>
              Secondary button
            </WButton>
          </div>
        </WAlert>
        <WAlert type="negative" show>
          This is "negative" variant of the alert element
        </WAlert>
        <WAlert type="positive" show>
          This is "positive" variant of the alert element
        </WAlert>
        <WAlert type="warning" show>
          This is "warning" variant of the alert element
        </WAlert>
        <WAlert type="info" show>
          This is "info" variant of the alert element
        </WAlert>
      </section>
    </div>
  </>
  )
}

export default Alert;
