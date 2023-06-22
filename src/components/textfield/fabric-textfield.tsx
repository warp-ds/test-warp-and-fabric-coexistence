import { useState } from 'react';
import { TextField } from '@fabric-ds/react';
import { Affix } from '@fabric-ds/react';


const FabricTextField = () => {
  const [value, setValue] = useState('me@email.com');


  return (
    <>
      <TextField label="Name" />
      <div className="flex space-x-32">
        <TextField label="Email (Uncontrolled)" defaultValue="me@email.com" />
        <TextField
          label="Email (Controlled)"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <TextField label="Telefonnummer" optional />
      <TextField
        label="Telefonnummer"
        helpText="Vil kun brukes til brukerverifisering"
      />
      <TextField label="Email" invalid helpText="Ugyldig e-post" />
      <TextField label="E-post" placeholder="puse@finn.no" />
      <div className="flex flex-col space-y-32">
        <TextField label="E-post" disabled value="puse@finn.no" />
        <TextField label="E-post" disabled />
      </div>
      <TextField label="Price" placeholder="1 000 000">
        <Affix suffix label="kr" />
      </TextField>
      <TextField label="Price" placeholder="1 000 000">
        <Affix prefix label="kr" />
      </TextField>
      <TextField>
        <Affix suffix clear onClick={() => alert('clear')} />
      </TextField>
      <TextField>
        <Affix suffix search onClick={() => alert('search')} />
      </TextField>
      <TextField>
        <Affix prefix label="kr" />
        <Affix suffix search onClick={() => alert('search')} />
      </TextField>
      <div className="flex flex-col space-y-32">
        <TextField label="E-post" readOnly value="puse@finn.no" />
        <TextField label="E-post" readOnly />
      </div>

    </>
  );
};

export default FabricTextField;
