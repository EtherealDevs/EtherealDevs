import './index.css';
import Nav from './components/nav';
import Footer from './components/footer';
import Background from './components/Background/background';
import  Home  from './components/home';
import About from './components/about';
import Faq from './components/faq';
import Marketing from './components/marketing';
import About2 from './components/about2';

function App() {
  return (
    <div className='flex flex-col h-screen w-full'>
        <Background numStars={1800}/>
        <div className='flex-grow bg-transparent z-10'>
          <Nav/>
          <Home/>
          <About/>
          <About2/>
          <Marketing/>
          <Faq/>
          
        </div>
        <Footer/>

  

    </div>
    
  );
}

export default App;
