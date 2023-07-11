import About from './sections/About'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'

function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Projects/>
        </div>
    )
}

export default Home