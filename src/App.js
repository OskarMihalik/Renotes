import logo from './logo.svg';
import './App.css';
import {FileSystemNavigator} from './components/TreeView';
import {Toolbar} from './components/Toolbar';

function App() {
  return (
    <div className="parent">
    <div className="treeview">
      <FileSystemNavigator/>
    </div>
    <div className="toolbar">
      <Toolbar/>
    </div>
    <div className="note"></div>
  </div>
  );
}

export default App;
