function Review(props: any) {
    return (
        <div className="w-full pb-6">
            <div className="bg-slate-800 px-6 py-6 w-full h-full rounded overflow-hidden text-center">
                <img src={props.image} className="rounded-full mx-auto w-1/3 mb-5" />
                <div className="italic mb-5">"{props.review}"</div>
                <div className="text-slate-200 font-bold">{props.author}</div>
                <div className="text-cyan-400 font-bold text-sm">{props.designation}</div>
            </div>
        </div>
    )
}

export default Review;