import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { demoActions } from './../store/slices/demo';

const Welcome = () => {

  const demoShow = useSelector(state => {  return state.demo ? state.demo.demoCounter : null } );
  const demostatus = useSelector(state => { return state.demo ? state.demo.demoStatus : null } );
  const demosome = useSelector(state => { return state.demo ? state.demo.some : null } );

  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(demoActions.dincrement());
  }, []);


  return (
    <div className="welcome">
      Hello from Welcome {demoShow} - {demostatus} - {demosome}
      <div>
        <button className="btn btn-primary">Button</button>
      </div>

      {/* dropdown */}
      <div>
        <div className="dropdown">
          <Link to="#" className="dropdown-toggle">Dropdown Menu</Link>
          <ul className="dropdown-menu">
            <li><Link to="#">Menu Item 01</Link></li>
            <li><Link to="#">Menu Item 02</Link></li>
            <li><Link to="#">Menu Item 03</Link></li>
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
