export function Post(props) {
    return (
        <div>
            <strong><h1>{props.author}</h1></strong>
            <p>{props.content}</p>
        </div>
    )
}