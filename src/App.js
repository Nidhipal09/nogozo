import './App.css';
import Header from './header/Header.js'
import Buttons from './MainContent/Buttons.js'
import Novels from './MainContent/Novels.js'
import CarouselFun from './MainContent/CarouselFun.js'
import Footer from './footer/Footer.js'




function App() {
  return (
    <div className="App">
         <Header/> 
         <CarouselFun/>
         <Buttons/>
         <Novels/>
         <Footer/>
    </div>
  );
}

export default App;
