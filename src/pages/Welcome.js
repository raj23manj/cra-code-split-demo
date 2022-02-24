const Welcome = () => {
  return (
    <div className="welcome">
      Hello from Welcome
      <div>
        <button className="btn btn-primary">Button</button>
      </div>

      {/* dropdown */}
      <div>
        <div className="dropdown">
          <a href="#" className="dropdown-toggle">Dropdown Menu</a>
          <ul className="dropdown-menu">
            <li><a href="#">Menu Item 01</a></li>
            <li><a href="#">Menu Item 02</a></li>
            <li><a href="#">Menu Item 03</a></li>
          </ul>
        </div>
      </div>

      {/* tab */}

      <div>
        <div className="tabs">
          <div className="tabs-bar">
            <div className="tabs-item ">Tab 1</div>
            <div className="tabs-item active">Tab 2</div>
            <div className="tabs-item">Tab 3</div>
            <div className="tabs-item">Tab 4</div>
          </div>
          <div className="tabs-content">
            <div className="tab-pane ">Content of Tab Pane 1</div>
            <div className="tab-pane active" >Content of Tab Pane 2</div>
            <div className="tab-pane">Content of Tab Pane 3</div>
            <div className="tab-pane">Content of Tab Pane 4</div>
          </div>
        </div>
      </div>
    </div>);
};

export default Welcome;
