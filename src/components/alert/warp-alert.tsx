import { Alert, Button } from '@warp-ds/react';

const WarpAlert = () => {
  return (
    <Alert type="info" show={true}>
      <p className="font-bold">This is "info" variant of the alert element</p>
      <p>With an additional description</p>
      <a>And a link to more information</a>
      <div className="mt-8 space-x-8">
        <Button small>Primary button</Button>
        <Button small secondary quiet>
          Secondary button
        </Button>
      </div>
    </Alert>
  )
};

export default WarpAlert;
