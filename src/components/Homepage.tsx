import About from './sections/About'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
// import Feedbacks from './sections/Feedbacks'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './sections/Experience'

function Home() {
    return (
        <div className='bg-[#778DA9]'>
            <Hero />
            <About />
            <Skills />
            <Experience/>
            <Projects/>
            {/* <Feedbacks/> not required until we have any freelancing exp */}
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home