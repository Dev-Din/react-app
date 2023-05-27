import './App.css';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ListandKeys from './components/listandkeys/ListandKeys';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     <ListandKeys/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
