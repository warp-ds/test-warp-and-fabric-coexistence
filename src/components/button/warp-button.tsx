
import { Button } from '@warp-ds/react';

const WarpButton = () => {
  return (
    <>
      <Button>Default</Button>
      <Button primary>Primary</Button>
      <Button negative>Negative</Button>
      <Button secondary>Secondary</Button>
      <Button loading>Loading</Button>
      <Button small>Small</Button>
      <Button small primary>Small primary</Button>
      <Button small negative>Small negative</Button>
      <Button small secondary quiet>Small secondary quiet</Button>
      <Button pill>Pill</Button>
      <Button href="https://react.fabric-ds.io/button">Href</Button>
      <Button link>Link</Button>
      <Button quiet>Quiet</Button>
    </>
  )
};

export default WarpButton;
