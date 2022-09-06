import logo from './logo.svg';
import './App.css';
import DataTable from './components/Table';
import PrimarySearchAppBar from './components/Appbar';
import TemporaryDrawer from './components/Drawer';
function App() {
  return (
    <div className="App">
      
            <PrimarySearchAppBar/>
            <TemporaryDrawer/>


      <DataTable/>

   
    </div>
  );
}

export default App;
