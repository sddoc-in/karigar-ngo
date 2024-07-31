import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
       <Header/>
       <main className="bg-gray-100 pt-20">
       <Body/>
      </main>
       
       <Footer/>
    </div>
  );
}

export default App;
