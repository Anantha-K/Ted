import LandingPg from '../components/LandingPg'
import RegistrationMain from "../components/Regsiteration"
import SpeakerMain from "../components/SpeakersMain"
import Sponsors from '../components/Sponsors'
import './App.css'
import { useRoutes } from "react-router-dom";
import { Routes,Route } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'
import Team from '../components/Team'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



function App() {
  // let element = useRoutes([
  //   { path: "/",
  //     element: <LandingPg/>,
  //   },
  //   { path: "/Registration",
  //     element: <RegistrationMain />
  //   },
  //   { path: "/Speaker",
  //     element: <SpeakerMain />
  //   },
  // ]);

  // return element;
  return(
    // <LandingPg/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPg/>}/>
        <Route path="/Speakers" element={<SpeakerMain/>}/>
        <Route path="/Registration" element={<RegistrationMain/>}/>
        <Route path="/Sponsors" element={<Sponsors/>}/>
        <Route path="/Team" element={<Footer/>}/>

      </Routes>
    </BrowserRouter>
    )
}

export default App