function Category(props: any) {
    return (
        <div className={!props.active ? "px-4 py-2 bg-slate-800 border-l-0 border-b-0 mr-1" : "px-4 py-2 bg-slate-800 border-b-2 border-b-solid border-cyan-300 text-cyan-300 mr-1"} onClick={props.onClick}>
            {props.name}
        </div>
    )
}

export default Category;