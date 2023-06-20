
import { Expandable } from '@fabric-ds/react';
import { IconBag16 } from '@fabric-ds/icons/react';


const FabricExpandable = () => {
  return (
    <>
      <Expandable title="I am expandable">
        <p>Expandable contents go here.</p>
      </Expandable>
      <Expandable title="I am expandable (box)" box>
        <p>Expandable contents go here.</p>
      </Expandable>
      <Expandable title="I am expandable (info box)" info box>
        <p>Expandable contents go here. </p>
      </Expandable>
      <Expandable
        title={
          <div className="flex flex-row items-center">
            <IconBag16 />
            <p className="ml-8 mb-0">This is a title with an icon</p>
          </div>
        }
        box
        info
      >
        <p>Expandable contents go here.</p>
      </Expandable>

    </>
  )
};

export default FabricExpandable;
