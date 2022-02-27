import Contribution from './Contribution'
import Project from './Project'
import Review from './Review'

const ActivitiesData = [
    {
        template: 'contribution',
        subtitle: 'Open Source',
        title: 'Implemented Clusterization in AsyncAPI\'s Glee.',
        description: 'Glee is a framework to quickly develop servers based on AsyncAPI specs. I implemented clusterization in it, allowing messages to be shared between instances using a flexible adapted based system. I also created an adapter for clusterization using Redis Streams.',
        link: 'https://github.com/asyncapi/glee/pull/240'
    },
    {
        template: 'review',
        image: 'https://media-exp1.licdn.com/dms/image/C5603AQFuWP3kmduD4Q/profile-displayphoto-shrink_200_200/0/1626113471179?e=1651104000&v=beta&t=-L-3aWpaNw5bc5TmJ0ajgMix_6YNsVwdnujFVqs733A',
        review: 'Most importantly, his flexibility and creativity has made him a valuable asset to our team',
        author: 'Ray Benjamin Ng',
        designation: 'Founder, Claxon Tournaments'
    },
    {
        template: 'project',
        subtitle: 'Hackathon',
        title: 'Developed Cross-Chain NFT Bridge',
        description: 'ERC721 Tokens (or NFTs) are getting really popular. But currently we don\'t have any cross-chain bridge for NFTs. Cross-chain bridges focus mainly on ERC20 Tokens. So as part of the Pan-IIT Blockchain Hackathon organized by IIT Bombay, me and my team worked on creating a NFT bridge between Ethereum, Solana and Avalanche.',
        link: 'https://github.com/AMANKANOJIYA/BlockChainIITB'
    },
    {
        template: 'project',
        subtitle: 'Achievement',
        title: 'Ranked 3 in TechFest IITB MFA Competition.',
        description: 'While working on the problem statement by MarshMcMellan, we came up with a microservice which would provide easy-to-integrate and secure authentication service to applications of the organization using Okta with features including Multi-Factor Authentication and Single Sign-On. It was a major improvement on the current architecture, reduced redundancy and introduced a central point for any failures.',
        link: 'https://github.com/sudoshreyansh/Techfest-MFA'
    }
]

function generateActivityElement(data: any) {
    switch ( data.template ) {
        case 'contribution':
            return <Contribution subtitle={data.subtitle} title={data.title} description={data.description} link={data.link} />

        case 'project':
            return <Project subtitle={data.subtitle} title={data.title} description={data.description} link={data.link} />
            
        case 'review':
            return <Review image={data.image} review={data.review} author={data.author} designation={data.designation} />
    }
}

function Activities() {
    const rows = 4;
    let activities:any = [];
    
    for ( let i=0; i < rows; i++ ) activities.push([]);
    ActivitiesData.forEach((data, index) => {
        activities[index % rows].push(generateActivityElement(data))
    })

    return (
        <div className="max-w-7xl mx-auto pt-24">
            <div className="order-1 text-4xl font-extrabold tracking-tight text-white mb-8">
                Recent Activities
            </div>
            <div className="flex flex-wrap items-start -mx-3 hidden md:flex">
                {activities.map((column:any) => 
                    <div className="w-3/12 px-3 box-border">
                        {column}
                    </div>
                )}
            </div>
            <div className="flex flex-wrap items-start -mx-3 md:hidden">
                {ActivitiesData.map(data => 
                    <div className="px-3">
                        {generateActivityElement(data)}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Activities;