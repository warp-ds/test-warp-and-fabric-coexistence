import { Modal, Button, Toggle } from '@warp-ds/react';
import { useState, useRef } from 'react';

const WarpModal = () => {
  // Example 1
  const [open, setOpen] = useState(false);
  const [left, setLeft] = useState(true);
  const [height, setHeight] = useState('68%');
  const toggleModal = () => setOpen(!open);

  // Example 2
  const [open2, setOpen2] = useState(false);
  const [mustAgree, setMustAgree] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);

  const toggleModal2 = () => {
    console.log('toggleModal2');
    console.log({open2, mustAgree, hasAgreed });
    if (open2 && !hasAgreed) {
      setMustAgree(true);
      return;
    }
    setMustAgree(false);
    setOpen2(!open2);
  };

  // Example 3
  const [open3, setOpen3] = useState(false);
  const focusRef = useRef(null);
  const toggleModal3 = () => setOpen3(!open3);

  return (
    <>
      <p>Example 1</p>
      <p>Modify height: should toggle height between 68% and 100%</p>
      <Button utility onClick={toggleModal}>
        Open modal
      </Button>

      <Modal
        left={left}
        right
        open={open}
        onDismiss={toggleModal}
        title="Hello title"
        footer={
          <Button primary onClick={toggleModal}>
            Confirm
          </Button>
        }
        style={{
          '--w-modal-max-height': height, // --f-prefix or --w-prefix
          '--w-modal-height': '100%', // --f-prefix or --w-prefix
        }}
      >
        <div className="space-x-8">
          <button
            onClick={() => setHeight(height === '68%' ? '100%' : '68%')}
            className="button button--utility button--small mb-32"
          >
            Modify height
          </button>
          <button
            onClick={() => setLeft(!left)}
            className="button button--utility button--small mb-32"
          >
            Toggle the back-button
          </button>
        </div>
        <div>
          <h1 className="h4 mb-16">This is a title for the content area</h1>
          <p>
            Life as a shorty shouldn't be so rough. Behold the bold soldier
            control the globe slowly, proceeds to blow, swinging swords like
            Shinobi. The game of chess, is like a swordfight, you must think
            first before you move. My beats travel like a vortex through your
            spine, to the top of your cerebral cortex. I smoke on the mic like
            smoking Joe Frazier, the hell raiser, raising hell with the flavor.
          </p>
          <p>
            I breaks it down to the bone gristle, Ill speaking Scud missile heat
            seeking, Johnny Blazing. Protect Ya Neck, my sword still remain
            imperial before I blast the mic, RZA scratch off the serial.
            Shackling the masses with drastic rap tactics, graphic displays melt
            the steel like blacksmiths. Perpendicular to the square we stay in
            gold like Flair, escape from your dragon's lair in particular. Shame
            on you when you stepped through to The Ol Dirty Bastard straight
            from the Brooklyn Zoo. Protect Ya Neck, my sword still remain
            imperial before I blast the mic, RZA scratch off the serial.
          </p>
          <p>
            Life as a shorty shouldn't be so rough. Handcuffed in the back of a
            bus, forty of us. Rae got it going on pal, call me the rap
            assassinator, rhymes rugged and built like Schwarzenegger. My beats
            travel like a vortex through your spine, to the top of your cerebral
            cortex. Life as a shorty shouldn't be so rough. Well I'm a sire, I
            set the microphone on fire, rap styles vary and carry like Mariah.
          </p>
        </div>
      </Modal>

      <p>Example 2</p>
      <Button utility onClick={toggleModal2}>
        Open modal
      </Button>

      <Modal
        open={open2}
        onDismiss={hasAgreed ? toggleModal2 : undefined}
        title="Non dismissable"
        footer={
          <>
            {mustAgree && <p className="m-10">You must agree first!</p>}
            <Button primary onClick={toggleModal2}>
              Save
            </Button>
          </>
        }
      >
        <p>To go further, you need to agree to these bogus terms</p>
        <Toggle
          type="checkbox"
          label="I agree"
          checked={hasAgreed}
          onChange={(state) => setHasAgreed(state)}
        />
      </Modal>

      <p>Example 3</p>
      <Button utility onClick={toggleModal3}>
        Open modal
      </Button>
      <Modal
        open={open3}
        initialFocusRef={focusRef}
        title="Customized focus behavior"
        footer={
          <>
            <Button onClick={toggleModal3} className="mr-12">
              Cancel
            </Button>
            <Button primary ref={focusRef} onClick={toggleModal3}>
              Accept
            </Button>
          </>
        }
      >
        <p>The call to action button has inital focus.</p>
      </Modal>
    </>
  );
};

export default WarpModal;
