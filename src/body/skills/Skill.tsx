function Skill(props: any) {
    return (
        <div className="mw-1/3 bg-slate-800 rounded-sm p-5 px-8 mr-3 mb-3">
            <div className="flex items-center">
                <i className={props.icon + " mr-8 before:text-5xl"}></i>
                <div>
                    <div className="text-xs uppercase font-bold mb-1 text-cyan-400">
                        {props.type}
                    </div>
                    <div className="text-lg font-bold text-slate-200">
                        {props.name}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;