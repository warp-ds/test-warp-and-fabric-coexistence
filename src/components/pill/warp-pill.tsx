import { IconSearch16, IconPlus16 } from '@fabric-ds/icons/react';
import { Pill } from '@warp-ds/react';

const WarpPill = () => {
  return (
    <>
      <Pill label="Default"/>
      <Pill label="Default canClose" canClose onClose={() => alert('onClose event')} />
      <Pill label="Suggestion" suggestion />
      <Pill
        label="Suggestion canClose"
        suggestion
        canClose
        onClose={() => alert('onClose event')}
      />
      <div className="flex space-x-8">
        <Pill
          icon={<IconSearch16 />}
          onClick={() => alert('onClick event')}
          className="py-12"
        />
        <Pill
          icon={<IconPlus16 />}
          onClick={() => alert('onClick event')}
          suggestion
          className="py-12"
        />
      </div>
    </>
  )
}

export default WarpPill;
