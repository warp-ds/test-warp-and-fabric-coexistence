import './sidebar.css';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <nav>
        <ul>
          <li>
            <a href={`/`}>Home</a>
          </li>
          <li>
            <a href={`/button`}>Button</a>
          </li>
          <li>
            <a href={`/pill`}>Pill</a>
          </li>
          <li>
            <a href={`/alert`}>Alert</a>
          </li>
          <li>
            <a href={`/steps`}>Steps</a>
          </li>
          <li>
            <a href={`/combobox`}>Combobox</a>
          </li>
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
          <li>
            <a href={`/box`}>Box</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
