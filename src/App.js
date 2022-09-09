import logo from './logo.svg';
import './App.css';
import DataTable from './components/Table';
import PrimarySearchAppBar from './components/Appbar';
import TemporaryDrawer from './components/Drawer';
import  Form from './components/Form';
import 'react-app-polyfill/stable';


function App() {
  return (
    <div className="App">
      
            <PrimarySearchAppBar/>
            <TemporaryDrawer/>


      <DataTable/>
      <Form/>


   
    </div>
  );
}

export default App;
