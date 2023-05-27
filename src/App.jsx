import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import ListandKeys from './components/ListandKeys';

function App() {
  return (
    <div className="App">
     <Header/>
     <ListandKeys/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
