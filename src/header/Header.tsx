import Navigation from './Navigation'
import StatusBar from './StatusBar'

function Header() {
    return (
        <header className="border-b border-slate-300/10 bg-slate-900">
            <StatusBar />
            <div className="max-w-7xl mx-auto py-3.5 flex justify-between px-5 xl:px-0">
                <div className="text-slate-200 font-medium">
                    sudoshreyansh
                </div>
                <Navigation />
            </div>
        </header>
    )
}

export default Header;