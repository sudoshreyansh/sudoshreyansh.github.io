function Contribution(props: any) {
    return (
        <div className="w-full pb-6">
            <div className="bg-slate-800 px-6 py-6 w-full h-full rounded overflow-hidden">
                <div className="text-xs uppercase font-bold mb-3 text-cyan-400">
                    {props.subtitle}
                </div>
                <div className="text-lg font-bold text-slate-200 mb-4">
                    {props.title}
                </div>
                <div className="text-sm mb-5">
                    {props.description}
                </div>
                <a href={props.link} className="text-sm text-cyan-400 underline underline-offset-4">View Pull Request</a>
            </div>
        </div>
    )
}

export default Contribution;