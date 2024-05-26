import Item from './Item'
function Lista(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" lancamento={1985}/>
                <Item marca= "Reanault" lancamento={1964}/>
                <Item />
            </ul>
        </>
    )
}

export default Lista;