
import { Button } from '@warp-ds/react';

const WarpButton = () => {
  return (
    <>
      <h3>Primary</h3>
      <div className="button-section">
        <Button primary>
          Primary
        </Button>
        <Button primary href="https://google.com">
          Href
        </Button>
        <Button primary loading>
          Loading
        </Button>
        <Button primary small>
          Small
        </Button>
        <Button primary small loading>
          Small Loading
        </Button>
      </div>
      <h3>Secondary / Default</h3>
      <div className="button-section">
        <Button secondary>
          Secondary
        </Button>
        <Button secondary href="https://google.com">
           Href
        </Button>
        <Button secondary loading>
          Loading
        </Button>
        <Button secondary quiet>
          Quiet
        </Button>
        <Button secondary quiet loading>
          Quiet Loading
        </Button>
        <Button secondary small>
          Small
        </Button>
        <Button secondary small loading>
          Small Loading
        </Button>
        <Button secondary quiet small>
          Quiet Small
        </Button>
        <Button secondary quiet small loading>
          Quiet Small Loading
        </Button>
      </div>
      <h3>Negative</h3>
      <div className="button-section">
        <Button negative>
          Negative
        </Button>
        <Button negative href="https://google.com">
          Href
        </Button>
        <Button negative loading>
          Loading
        </Button>
        <Button negative small>
          Small
        </Button>
        <Button negative small loading>
          Small Loading
        </Button>
        <Button negative quiet>
          Quiet
        </Button>
        <Button negative quiet loading>
          Quiet Loading
        </Button>
        <Button negative quiet small>
          Quiet Small
        </Button>
        <Button negative quiet small loading>
          Quiet Small Loading
        </Button>
      </div>
      <h3>Utility</h3>
      <div className="button-section">
        <Button utility>
          Utility
        </Button>
        <Button utility href="https://google.com">
          Href
        </Button>
        <Button utility loading>
          Loading
        </Button>
        <Button utility small>
          Small
        </Button>
        <Button utility small loading>
          Small Loading
        </Button>
        <Button utility quiet>
          Quiet
        </Button>
      </div>
      <h3>Pill</h3>
      <div className="button-section">
        <Button pill>
          Pill
        </Button>
        <Button pill loading>
           Loading
        </Button>
      </div>
      <h3>Link</h3>
      <div className="button-section">
        <Button link>
          Link
        </Button>
        <Button link small>
          Small
        </Button>
      </div>
      <h3>Link (href) styled as button</h3>
      <div className="button-section">
        <Button
          href="https://google.com/"
          target="_blank"
        >
          Href
        </Button>
        <Button
          primary
          href="https://google.com/"
          target="_blank"
        >
          Href primary
        </Button>
        <Button
          negative
          href="https://google.com/"
          target="_blank"
        >
          Href negative
        </Button>
        <Button
          utility
          href="https://google.com/"
          target="_blank"
        >
          Href utility
        </Button>
      </div>
      <h3>Disabled button</h3>
      <div className="button-section">
        <Button
          disabled
        >
          Disabled
        </Button>
        <Button
          disabled
          href="https://google.com/"
          target="_blank"
        >
          Disabled href
        </Button>
        <Button
          primary
          disabled
        >
          Disabled primary
        </Button>
        <Button
          primary
          disabled
          href="https://google.com/"
          target="_blank"
        >
          Disabled primary href
        </Button>
        <Button
          negative
          disabled
        >
          Disabled button negative
        </Button>
        <Button
          negative
          disabled
        >
          Disabled button negative
        </Button>
        <Button
          negative
          disabled
          href="https://google.com/"
          target="_blank"
        >
          Disabled button negative href
        </Button>
        <Button
          utility
          disabled
          href="https://google.com/"
          target="_blank"
        >
          Disabled button utility href
        </Button>
        <Button
          utility
          disabled
        >
          Disabled button utility
        </Button>
      </div>
    </>
  )
};
export default WarpButton;
