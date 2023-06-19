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
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
