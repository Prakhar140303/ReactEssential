
import './App.css'
import Navbar from './navbar/Navbar';
import Fruit from './fruits/Fruit';
function App() {
  

  return (
    <>
      <Navbar title ="Fruit Vendor"/>
      <Fruit name='apple' price={100} quantity ={20} />
      <Fruit />
    </>
  );
}

export default App
