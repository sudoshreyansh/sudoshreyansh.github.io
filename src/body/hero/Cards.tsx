import Card from './Card'

const CardsData = [
    {
        title: "Backend",
        description: "Developing complex cloud architectures or designing a GraphQL API.",
        experience: "2-3 Years",
        extraClass: "-translate-x-32"
    },
    {
        title: "Frontend",
        description: "Developing websites as beautiful and interactive as this website.",
        experience: "4-5 Years",
        extraClass: ""
    },
    {
        title: "Web 3.0",
        description: "Web 3.0 involves decentralization using technologies like IPFS, Blockchain and more.",
        experience: "0-1 Years",
        extraClass: "translate-x-32"
    }
]

function Cards() {
    return (
        <div className="max-w-full min-w-full overflow-hidden">
            <div className="relative w-52 h-80 mx-auto mt-12">
                {
                    CardsData.map(data => 
                        <Card
                            title={data.title} 
                            description={data.description} 
                            experience={data.experience} 
                            extraClass={data.extraClass}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Cards;