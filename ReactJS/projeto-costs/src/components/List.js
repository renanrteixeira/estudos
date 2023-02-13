import Item from "./Item";

function List(){
    return(
        <>     
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" anoLancamento={1968}/>
                <Item marca="BMW" anoLancamento={2002}/>
                <Item marca="Jaguar" anoLancamento={1994}/>  
            </ul>      
        </>
    )
}

export default List