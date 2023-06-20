import { useState, useRef } from 'react';
import { Attention, Box, Button } from '@fabric-ds/react';

const FabricAttention = () => {
  // Example 2
  const [show, setShow] = useState(false);
  const targetEl = useRef(null);

  // Example 3
  const [show3, setShow3] = useState(false);
  const containerRef = useRef(null);
  const targetEl3 = useRef(null);


  return (
    <>
      <p>Example 1</p>
      <div className="flex items-center">
        <Box info>
          <h1>I am a box full of info</h1>
        </Box>
        <Attention callout placement="right" isShowing={true}>
          <p>I'm a callout because that box over there is new or something</p>
        </Attention>
      </div>

      <p>Example 2</p>
      <div>
        <h1
          className="w-max mb-0"
          ref={targetEl}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          Hover me
        </h1>
        <Attention
          tooltip
          placement="bottom"
          targetEl={targetEl}
          isShowing={show}
        >
          <p>lol i am a popover</p>
        </Attention>
      </div>

      <p>Example 3</p>
      <div ref={containerRef}>
      <Button
        small
        utility
        onClick={() => setShow3(!show3)}
        className="w-max mb-0"
        ref={targetEl3}
      >
        Open menu
      </Button>
      <Attention
        popover
        placement="bottom"
        targetEl={targetEl3}
        isShowing={show3}
      >
        <ul className="bg-white w-full text-center">
          <li
            tabIndex={0}
            className="p-2 px-40 hover:bg-blue-200 hover:text-blue-500 cursor-pointer"
          >
            Hello
          </li>
          <li
            tabIndex={0}
            className="p-2 px-40 hover:bg-blue-200 hover:text-blue-500 cursor-pointer"
          >
            World
          </li>
        </ul>
      </Attention>
    </div>
    </>
  )
};

export default FabricAttention;
