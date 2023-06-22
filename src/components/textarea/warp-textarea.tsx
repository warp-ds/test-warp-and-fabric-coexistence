import { useState } from 'react';
import { TextArea } from '@warp-ds/react';

const WarpTextarea = () => {
  const [value, setValue] = useState('Lorem ipsum');
  return (
    <>
      <TextArea label="With Label" />
      <div className="flex space-x-32">
        <TextArea label="Label + defaultValue (Uncontrolled)" defaultValue="Lorem ipsum" />
        <TextArea
          label="Label + onChange + value (Controlled)"
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
      </div>
      <TextArea label="Label optional" optional />
      <TextArea label="Label helpText" helpText="Maximum 200 characters" />
      <TextArea label="Label invalid helptext" invalid helpText="Maximum 200 characters" />
      <TextArea label="Label placeholder" placeholder="With placeholder: Lorem ipsum dolor sit amet" />
      <div className="flex flex-col y-space-32">
        <TextArea label="Label disabled value" disabled value="Lorem ipsum dolor sit amet" />
        <TextArea label="Label disabled" disabled />
      </div>
      <div className="flex flex-col y-space-32">
        <TextArea
          label="Label readonly defaultValue"
          readOnly
          defaultValue="Lorem ipsum dolor sit amet"
        />
        <TextArea label="Label readOnly" readOnly />
        <TextArea label="Label minimumRows={3}" minimumRows={3} />
        <TextArea
          label="Label maximumRows={3} defaultValue"
          maximumRows={3}
          defaultValue={'Lorem\nipsum\ndolor\nsit\namet'}
        />
      </div>
    </>
  );
};

export default WarpTextarea;
