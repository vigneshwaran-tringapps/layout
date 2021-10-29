
import './App.css';
import Content from './components/features/content/content';
import Footer from './components/features/footer/footer';
import Header from './components/features/header/header';
import Navbar from './components/features/navbar/navbar';

function App() {
  return (
    <div >
     <Header/>
     <Navbar/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
