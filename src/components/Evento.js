import Button from './Eventos/Button'
function Evento(){
    function meuEvento(){
        console.log(`Ativando primeiro evento`)
    }

    function segundoEvento(){
        console.log('Ativando o segundo evento')
    }
    
    return(
        <>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="primeiro evento"/>
            <Button event={segundoEvento} text="segundo evento"/>
        </>
    )
}

export default Evento