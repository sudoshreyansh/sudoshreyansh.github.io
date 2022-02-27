import Hero from './hero/Hero'
import Works from './works/Works'
import Skills from './skills/Skills'
import Activities from './activities/Activities'

function Body() {
    return (
        <main className="px-5 xl:px-0">
            <Hero />
            <Works />
            <Skills />
            <Activities />
        </main>
    )
}

export default Body;