import './sidebar.css';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <nav>
        <ul>
          <li><p>Actions</p></li>
          <li>
            <a href={`/`}>Home</a>
          </li>
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
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
