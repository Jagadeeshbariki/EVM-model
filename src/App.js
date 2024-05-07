import './App.css';
import EVM from './EVM';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <EVM/>
      <Footer/>
    </div>
  );
}

export default App;
