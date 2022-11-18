import logo from './logo.svg';
import Header from './components/Header'
import Nav from './components/Nav'
import Project from './components/Content'
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Project />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
