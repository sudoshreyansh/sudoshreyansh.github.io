import { useState } from 'react';
import Category from './Category';
import Skill from './Skill'

const skillsData:any = {
    backend: {
        name: 'Backend',
        skills: [
            {
                type: 'Runtime',
                name: 'Node JS',
                icon: 'fa-brands fa-node'
            },
            {
                type: 'Language',
                name: 'PHP',
                icon: 'fa-brands fa-php'
            },
            {
                type: 'CMS',
                name: 'WordPress',
                icon: 'fa-brands fa-wordpress'
            },
            {
                type: 'CMS',
                name: 'Shopify',
                icon: 'fa-brands fa-shopify'
            },
            {
                type: 'Tech',
                name: 'Docker',
                icon: 'fa-brands fa-docker'
            },
            {
                type: 'Cloud',
                name: 'AWS',
                icon: 'fa-brands fa-aws'
            },
            {
                type: 'Cloud',
                name: 'Google Cloud',
                icon: 'fa-brands fa-aws'
            },
            {
                type: 'Cloud',
                name: 'DigitalOcean',
                icon: 'fa-brands fa-aws'
            },
            {
                type: 'Cloud',
                name: 'Heroku',
                icon: 'fa-brands fa-aws'
            },
        ]
    },
    frontend: {
        name: 'Frontend',
        skills: [
            {
                type: 'Runtime',
                name: 'Node JS',
                icon: 'fa-brands fa-node'
            }
        ]
    }
}

function Skills() {
    const [activeCategory, setActiveCategory] = useState('backend');

    let categories: any = [];
    for ( const category in skillsData ) {
        categories.push(<Category name={skillsData[category].name} id={category} active={category === activeCategory} onClick={() => setActiveCategory(category)} />)
    }

    let skills: any = [];
    for ( const skill of skillsData[activeCategory].skills ) {
        skills.push(<Skill name={skill.name} icon={skill.icon} type={skill.type} />)
    }

    return (
        <div className="max-w-7xl mx-auto pt-24">
            <div className="order-1 text-4xl font-extrabold tracking-tight text-white mb-8">
                My Skills
            </div>
            <div className="flex text-slate-300">
                {categories}
            </div>
            <div className="flex bg-slate-800/25 p-4 pb-1 pr-1 flex-wrap">
                {skills}
            </div>
        </div>
    )
}

export default Skills;