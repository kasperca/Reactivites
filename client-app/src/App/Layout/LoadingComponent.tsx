
interface Props{
    inverted?:boolean;
    content?:string;
}

export default function LoadingComponent({inverted=true, content="loading"}:Props){
    return (
        <div className="loading">
            <h2>This site is loading</h2>
        </div>
    )
}