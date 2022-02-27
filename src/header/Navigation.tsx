const MenuItems = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Projects',
        href: '/'
    },
    {
        title: 'About',
        href: '/'
    }
]

function NavigationItem(props: any) {
    return (
        <a href={props.href} className="px-3.5 text-sm font-medium text-slate-400 antialiased">
            {props.title}
        </a>
    )
}

function Navigation() {
    return (
        <div className="flex items-center">
            {MenuItems.map(item => <NavigationItem href={item.href} title={item.title} />)}
        </div>
    )
}

export default Navigation;