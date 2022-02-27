import Work from './Work'

const WorksData = [
    {
        subtitle: "Compete",
        title: "Participate in Hackathons",
        description: "Hackathons are a great way to get a head start at learning something or have fun while competing. I regularly participate in hackathons. View my past participations"
    },
    {
        subtitle: "Learn",
        title: "Contribute to Open Source",
        description: "Open Source is great for real world learning. Developing production grade software teaches you a lot about not just improving your coding skills but also working and collaborating in a team."
    },
    {
        subtitle: "Sharpen",
        title: "Competitive Programming",
        description: "Competitive Programming is a great way to improve your programming and problem solving skills while participating in time-bound contests. "
    }
]

function Works() {
    return (
        <div className="max-w-7xl mx-auto pt-14">
            <div className="order-1 text-4xl font-extrabold tracking-tight text-white mb-8">
                What Do I Do?
            </div>
            <div className="flex justify-between md:flex-row flex-col">
                {
                    WorksData.map((data, i) => 
                        <Work subtitle={data.subtitle} title={data.title} description={data.description} last={i === (WorksData.length - 1)} />
                    )
                }
            </div>
        </div>

    )
}

export default Works;