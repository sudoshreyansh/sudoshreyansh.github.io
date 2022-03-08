import Cards from './Cards'
import Intro from './Intro'

function Hero() {
    return (
        <>
            <div className="flex flex-col justify-between max-w-7xl mx-auto items-center py-14 relative">
                <Intro />
            </div>
            <Cards />
        </>
    )
}

export default Hero;