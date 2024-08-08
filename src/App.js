import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Home from './components/Home'; 
import About from './components/About'; 
import Impact from './components/Impact'; 
import GetInvolved from './components/GetInvolved';
import Projects from './components/Projects'; 
import Contact from './components/Contact';
import Team from './components/Team';
import Mission from './components/Mission';
import Story from './components/Story';



function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-gray-100 mt-20 mb-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/mission"element={<Mission/>}/>
            <Route path="/story"element={<Story/>}/>
         

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
