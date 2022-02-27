function Card(props: any) {
    return (
        <div className={"absolute w-52 h-72 bg-slate-800 border-slate-700 border-2 border-solid rounded-sm p-2 transition-all hover:-translate-y-10 hover:z-10 hover:rotate-0 hover:shadow-lg hover:shadow-gray-900 " + props.extraClass}>
            <div className="p-3.5">
                <div className="text-xs uppercase font-bold mb-4 text-cyan-400">
                    Domain
                </div>
                <div className="text-lg font-bold text-slate-200">
                    {props.title}
                </div>
                <div className="text-sm mb-5">
                    {props.description}
                </div>
                <div className="text font-bold text-slate-200">
                    Experience
                </div>
                <div className="text-sm">
                    {props.experience}
                </div>
            </div>
        </div>
    )
}

export default Card;