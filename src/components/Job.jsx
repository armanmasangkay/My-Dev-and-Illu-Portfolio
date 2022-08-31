export default function Job(props) {
    return (
        <div className="w-[31%]  border rounded-md p-1 bg-slate-300 m-2">
            <img src={props.image} alt="job" />
            <div>
                <h1 className="text-slate-800 font-bold text-xl px-4 py-2">{props.title ?? 'Undefined'}</h1>
                <div className="px-4 pb-4 text-sm">
                    <p>
                        {props.children.substring(1,100) + '...'}
                        
                    </p>
                    <div className="mt-3">
                        <a href="/" className="text-teal-600">See more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}