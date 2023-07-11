import About from './sections/About'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
// import Feedbacks from './sections/Feedbacks'
import Contact from './sections/Contact'

function Home() {
    return (
        <div className='bg-[#778DA9]'>
            <Hero />
            <About />
            <Skills />
            <Projects/>
            {/* <Feedbacks/> not required until we have any freelancing exp */}
            <Contact/>
        </div>
    )
}

export default Home