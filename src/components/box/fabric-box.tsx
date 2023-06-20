import { Box, Clickable } from '@fabric-ds/react';

const FabricBox = () => {

  return (
    <>
      <Box>
        <h1>Default example</h1>
        <p>Box contents go here.</p>
      </Box>
      <Box info>
        <h1>Info example</h1>
        <p>Box contents go here.</p>
      </Box>
      <Box bordered>
        <h1>Bordered example</h1>
        <p>Box contents go here.</p>
      </Box>
      <Box info clickable>
        <h1>
          <Clickable className="font-bold" onClick={() => alert('hey')}>
            Clickable example
          </Clickable>
        </h1>
        <p>Box contents go here.</p>
      </Box>
      <Box info clickable>
      <h1>
        <Clickable
          className="font-bold text-gray-700 hover:no-underline"
          href="https://finn.no"
          target="_blank"
        >
          Clickable example
        </Clickable>
      </h1>
      <p>Box contents go here.</p>
    </Box>
    <Box neutral>
      <h1>Neutral example</h1>
      <p>Box contents go here.</p>
    </Box>
    </>
  )
};

export default FabricBox;
