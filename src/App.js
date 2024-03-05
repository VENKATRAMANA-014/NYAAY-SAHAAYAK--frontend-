import './App.css';
import { Route,Routes, Navigate } from 'react-router-dom';
import Law from './components/Law';
import MyNav from './components/MyNav';
import Services from './components/Services';
import Contact from './components/Contact';
import MyChatbot from './components/chatB/Chat1';
import About from './components/About';
import LawTypes from './components/KeyFeatures/LawTypes';
import Constitution from './components/KeyFeatures/Lawtypes/Constitution';
import Civil from './components/KeyFeatures/Lawtypes/Civil';
import Corporate from './components/KeyFeatures/Lawtypes/Corporate';
import Criminal from './components/KeyFeatures/Lawtypes/Criminal';
import Cyber from './components/KeyFeatures/Lawtypes/Cyber';
import Environmental from './components/KeyFeatures/Lawtypes/Environmental';
import Family from './components/KeyFeatures/Lawtypes/Family';
import Intellectual from './components/KeyFeatures/Lawtypes/Intellectual';
import Labor from './components/KeyFeatures/Lawtypes/Labor';
import Tax from './components/KeyFeatures/Lawtypes/Tax';
import KeyFeatures from './components/KeyFeatures/KeyFeatures';
import FAQ from './components/FAQs/FAQ';
import Float from './components/FloatButton/Float';
import LegalAdvice from './components/KeyFeatures/LegalAdvice';
import Main from "./components/Main";
import Booking from './components/KeyFeatures/Booking';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contract from './components/KeyFeatures/Lawtypes/Contract';
import Administrative from './components/KeyFeatures/Lawtypes/Administrative';
import Statutory from './components/KeyFeatures/Lawtypes/Statutory';
import Rights from './components/KeyFeatures/Rights';
import Energy from './components/KeyFeatures/Lawtypes/Energy';
import International from './components/KeyFeatures/Lawtypes/International';
import Hindu from './components/KeyFeatures/Lawtypes/Hindu';
import Enforcement from './components/KeyFeatures/Lawtypes/Enforcement';
import Sharia from './components/KeyFeatures/Lawtypes/Sharia';
function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">

      <MyNav/>
    
      <Routes>
        
         <Route path='/' element={ <Law/> }/> 
         <Route path='/about' element={ <About/> }/>  
         <Route path='/services' element={ <Services/> }/> 
         <Route path='/contact' element={ <Contact/> }/> 
          <Route path='/chatbot' element={ <MyChatbot/> }/>
          <Route path='/KeyFeatures' element={<KeyFeatures/>}></Route>
          <Route path='/KeyFeatures/LawTypes' element={ <LawTypes/>}/>
          <Route path='/constitution' element={ <Constitution url="laws" topic="constitutional_related_faqs"/>}/>
          <Route path='/civil' element={ <Civil url="laws" topic="civil_related_faqs"/>}/>
          <Route path='/corporate' element={ <Corporate/>}/>
          <Route path='/criminal' element={ <Criminal/>}/>
          <Route path='/cyber' element={ <Cyber/>}/>
          <Route path='/environment' element={ <Environmental/>}/>
          <Route path='/family' element={ <Family/>}/>
          <Route path='/intellectual' element={ <Intellectual/>}/>
          <Route path='/labor' element={ <Labor/>}/>
          <Route path='/tax' element={ <Tax/>}/>
          <Route path='/FAQs' element={<FAQ/>}/>
          <Route path='/contract' element={<Contract/>}/>
          <Route path='/administrative' element={<Administrative/>}/>
          <Route path='/statutory' element={<Statutory/>}/>
          <Route path="/rights" element={<Rights />} />
          <Route path='/energy' element={<Energy />}/>
          <Route path='/international' element={<International />} />
          <Route path='/hindu' element={<Hindu />} />
          <Route path='/enforcement' element={ <Enforcement/>} />
          <Route path='/sharia' element={<Sharia />} />
  
          
          <Route path='/bot' element={<Float/>}/>
          <Route path='/legaladvice' element={<LegalAdvice/>}/>
          <Route path='/booking' element={<Booking/>}/>
          {user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
         

      </Routes>

    </div>
  );
}

export default App;






