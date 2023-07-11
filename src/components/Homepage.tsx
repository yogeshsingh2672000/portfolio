import About from './sections/About'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Feedbacks from './sections/Feedbacks'

function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Projects/>
            {/* <Feedbacks/> not required until we have any freelancing exp */}
        </div>
    )
}

export default Home