function Work(props: any) {
    return (
        <div className={"bg-slate-800 w-1/3 rounded-sm p-6 " + (props.last ? "" : "mr-2")}>
            <div className="text-sm uppercase font-bold mb-4 text-cyan-400">
                {props.subtitle}
            </div>
            <div className="text-xl font-bold text-slate-200 mb-2">
                {props.title}
            </div>
            <div className="text-sm mb-5">
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Work;