import Navbar from './components/navbar/Navbar'
import HeroMain from './components/heroSection/HeroMain'
import HeroGradient from './components/heroSection/HeroGradient'
import SubHerosection from './components/heroSection/SubHerosection'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'
import ProjectsMain from './components/project/ProjectsMain'
import ContactMeMain from './components/contactMe/ContactMeMain'
import FooterMain from './components/footer/FooterMain'

function App() {
  return <main className='font-body'>
    <Navbar/>
    <HeroMain/>
    <HeroGradient/>
    <SubHerosection/>
    <AboutMeMain/>
    <SkillsMain/>
    <SubSkills/>
    <ProjectsMain/>
    <ContactMeMain/>
    <FooterMain/>
  </main>
}

export default App
