export default function Pic(props) {
    return (
        <div className="md:w-[47%] md:ml-2 md:mb-2">
            <img src={props.image} alt='something' className="rounded-md "/>
        </div>
    )
}