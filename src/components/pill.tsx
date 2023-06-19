import { Pill as FPill } from '@fabric-ds/react';
import { Pill as WPill } from '@warp-ds/react';
import { classes } from './classes';
import { IconSearch16, IconPlus16 } from '@fabric-ds/icons/react';

const Pill = () => {
  return (
    <>
    <h2>Pills</h2>
    <div className="comparison">
      <section className={classes.designSystemSection}>
        <h3>Fabric</h3>
        <FPill label="Default"/>
        <FPill label="Default canClose" canClose onClose={() => alert('onClose event')} />
        <FPill label="Suggestion" suggestion />
        <FPill
          label="Suggestion canClose"
          suggestion
          canClose
          onClose={() => alert('onClose event')}
        />
        <div className="flex space-x-8">
          <FPill
            icon={<IconSearch16 />}
            onClick={() => alert('onClick event')}
            className="py-12"
          />
          <FPill
            icon={<IconPlus16 />}
            onClick={() => alert('onClick event')}
            suggestion
            className="py-12"
          />
      </div>
      </section>
      <section className={classes.designSystemSection}>
        <h3>Warp</h3>
        <WPill label="Default"/>
        <WPill label="Default canClose" canClose onClose={() => alert('onClose event')} />
        <WPill label="Suggestion" suggestion />
        <WPill
          label="Suggestion canClose"
          suggestion
          canClose
          onClose={() => alert('onClose event')}
        />
        <div className="flex space-x-8">
          <WPill
            icon={<IconSearch16 />}
            onClick={() => alert('onClick event')}
            className="py-12"
          />
          <WPill
            icon={<IconPlus16 />}
            onClick={() => alert('onClick event')}
            suggestion
            className="py-12"
          />
      </div>
      </section>
    </div>
  </>
  )
}

export default Pill;
