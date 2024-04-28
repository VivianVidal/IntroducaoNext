
export default function Card(props:any){
    return(
        <div className="flex bg-center">
            <div>{props.produto}</div>
            <div>{props.valor}</div>
        </div>
    )
}