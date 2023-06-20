import { useState } from 'react';
import { TextArea } from '@fabric-ds/react';

const FabricTextarea = () => {
  const [value, setValue] = useState('Lorem ipsum');


  return (
    <>
      <TextArea label="Description" />
      <div className="flex space-x-32">
        <TextArea label="Description (Uncontrolled)" defaultValue="Lorem ipsum" />
        <TextArea
          label="Description (Controlled)"
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
      </div>
      <TextArea label="Description" optional />
      <TextArea label="Description" helpText="Maximum 200 characters" />
      <TextArea label="Description" invalid helpText="Maximum 200 characters" />
      <TextArea label="Description" placeholder="Lorem ipsum dolor sit amet" />
      <div className="flex flex-col y-space-32">
        <TextArea label="Description" disabled value="Lorem ipsum dolor sit amet" />
        <TextArea label="Description" disabled />
      </div>
      <div className="flex flex-col y-space-32">
      <TextArea
        label="Description"
        readOnly
        defaultValue="Lorem ipsum dolor sit amet"
      />
      <TextArea label="Description" readOnly />
      <TextArea label="Description" minimumRows={3} />
      <TextArea
        label="Description"
        maximumRows={3}
        defaultValue={'Lorem\nipsum\ndolor\nsit\namet'}
      />

</div>


    </>
  );
};

export default FabricTextarea;
