import './sidebar.css';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <nav>
        <ul>
          <li>
            <a href={`/`}>Home</a>
          </li>
          <li><h3>COMPONENTS</h3></li>
          <li><p>Actions</p></li>
          <li>
            <a href={`/button`}>Button</a>
          </li>
          <li>
            <a href={`/pill`}>Pill</a>
          </li>
          <li><p>Feedback indication</p></li>
          <li>
            <a href={`/alert`}>Alert</a>
          </li>
          <li>
            <a href={`/steps`}>Steps</a>
          </li>
          <li>
            <a href={`/combobox`}>Combobox</a>
          </li>
          <li><p>Forms</p></li>
          <li>
            <a href={`/select`}>Select</a>
          </li>
          <li>
            <a href={`/slider`}>Slider</a>
          </li>
          <li>
            <a href={`/switch`}>Switch</a>
          </li>
          <li>
            <a href={`/textarea`}>Textarea</a>
          </li>
          <li>
            <a href={`/textfield`}>Textfield</a>
          </li>
          <li>
            <a href={`/toggle`}>Toggle</a>
          </li>
          <li><p>Layout</p></li>
          <li>
            <a href={`/box`}>Box</a>
          </li>
          <li>
            <a href={`/card`}>Card</a>
          </li>
          <li>
            <a href={`/expandable`}>Expandable</a>
          </li>
          <li>
            <a href={`/tabs`}>Tabs</a>
          </li>
          <li><p>Navigation</p></li>
          <li>
            <a href={`/breadcrumbs`}>Breadcrumbs</a>
          </li>
          <li><p>Overlays</p></li>
          <li>
            <a href={`/attention`}>Attention</a>
          </li>
          <li>
            <a href={`/modal`}>Modal</a>
          </li>
          <li><h3>CSS classes</h3></li>
          <li>
            <a href={`/layout`}>Layout</a>
          </li>
          <li>
            <a href={`/sizing`}>Sizing</a>
          </li>
          <li>
            <a href={`/typography`}>Typography</a>
          </li>
          <li>
            <a href={`/backgrounds`}>Backgrounds</a>
          </li>
          <li>
            <a href={`/spacing`}>Spacing</a>
          </li>
          <li>
            <a href={`/flexbox-and-grids`}>Flexbox and grids</a>
          </li>
          <li>
            <a href={`/border`}>Border</a>
          </li>
          <li>
            <a href={`/effects`}>Effects</a>
          </li>
          <li>
            <a href={`/tables`}>Tables</a>
          </li>
          <li>
            <a href={`/interactivty`}>Interactivty</a>
          </li>
          <li>
            <a href={`/accessibility`}>Accessibility</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
