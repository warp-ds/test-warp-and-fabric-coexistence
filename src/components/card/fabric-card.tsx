import { useState } from 'react';
import { Card, DeadToggle, Clickable } from '@fabric-ds/react';

const FabricCard = () => {
  // Selected example
  const [selected, setSelected] = useState(false);

  // Toggle example
  const [checked, setChecked] = useState(false);
  const [selected2, setSelected2] = useState('');

  return (
    <>
      <p> First example: </p>
      <Card>
        <img
          className="h-128 w-full object-cover"
          src="https://source.unsplash.com/random/400x400"
          alt="Description"
        />
        <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">
          Ukens bolig
        </p>
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>
            Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a.
            vv/fyring.
          </p>
          <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}
            >
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
            <span className="text-gray-200">•</span> 2 soverom
          </p>
        </div>
      </Card>
      
      <p> Selected example: </p>
      <div className="space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32">
      <Card selected={selected}>
        <img
          className="h-128 w-full object-cover"
          src="https://source.unsplash.com/random/400x400"
          alt="Description"
        />
        <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">
          Ukens bolig
        </p>
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>
            <Clickable checkbox onClick={() => setSelected(!selected)}>
              Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl.
              bl.a. vv/fyring.
            </Clickable>
          </p>
          <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}
            >
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
            <span className="text-gray-200">•</span> 2 soverom
          </p>
        </div>
      </Card>
      <Card selected={selected}>
        <img
          className="h-128 w-full object-cover"
          src="https://source.unsplash.com/random/403x403"
          alt="Description"
        />
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>
            <Clickable checkbox onClick={() => setSelected(!selected)}>
              Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl.
              bl.a. vv/fyring.
            </Clickable>
          </p>
          <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}
            >
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
            <span className="text-gray-200">•</span> 2 soverom
          </p>
        </div>
      </Card>
      <Card selected={selected}>
        <img
          className="h-128 w-full object-cover"
          src="https://source.unsplash.com/random/404x404"
          alt="Description"
        />
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>
            <Clickable checkbox onClick={() => setSelected(!selected)}>
              Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl.
              bl.a. vv/fyring.
            </Clickable>
          </p>
          <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}
            >
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
            <span className="text-gray-200">•</span> 2 soverom
          </p>
        </div>
      </Card>
    </div>

    <p>Toggle inside cards</p>
    <div>
      <Card selected={checked} className="mt-32 w-max p-24 flex items-center">
        <DeadToggle checkbox checked={checked} className="-mt-8" />
        <Clickable
          checkbox
          labelClassName="ml-12"
          onClick={() => setChecked(!checked)}
        >
          Checkbox in a card
        </Clickable>
      </Card>

      <div className="flex gap-32 mt-32">
        <Card selected={selected2 === 'a'} className="p-24 flex items-center">
          <DeadToggle radio checked={selected2 === 'a'} className="-mt-8" />
          <Clickable
            radio
            labelClassName="ml-12"
            name="gfdhjk2"
            onClick={() => setSelected2('a')}
          >
            Radio in a card - A
          </Clickable>
        </Card>
        <Card selected={selected2 === 'b'} className="p-24 flex items-center">
          <DeadToggle radio checked={selected2 === 'b'} className="-mt-8" />
          <Clickable
            radio
            labelClassName="ml-12"
            name="gfdhjk2"
            onClick={() => setSelected2('b')}
          >
            Radio in a card - B
          </Clickable>
        </Card>
      </div>
    </div>

    </>
  );
}

export default FabricCard;
