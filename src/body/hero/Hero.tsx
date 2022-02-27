import Cards from './Cards'
import Intro from './Intro'

function Hero() {
    return (
        <div className="flex justify-between max-w-7xl mx-auto items-center py-14 relative">
            <Intro />
            <Cards />
        </div>
    )
}

export default Hero;