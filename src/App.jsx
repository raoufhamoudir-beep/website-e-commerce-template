import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import LandingPage from "./components/LandingPage"
import MoreProjct from "./components/MoreProjct"
import Titel from "./components/Titel"
import WebSection from "./components/WebSection"
import './index.css'
function App() {

  return (
    <>
      <Header />

      <div className="w-full h-fit all">
        <LandingPage />
        <Titel titel={'work'} more={null} about={"Selected web, mobile, projects..."} />
        <WebSection />
        <Titel titel={'lab'} more={'Check out my other projects like IoT, open source projects, animations, video, experiments, minigames, archived stuff and more.'} about={null} />
        <MoreProjct />
        <Titel titel={'About'} about={null} more={null} />
        <About />
        <Titel about={null} more={null} titel={'contact'} />
        <Contact />
      </div>
    </>

  )
}

export default App
