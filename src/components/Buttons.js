import './Button.css'

const Button = (props)=>{

    return (

        <>
        
        <button className={ props.name+' button' } onClick={ () =>{props.run()} }>
          {props.name}
        </button>
        
        </>
    )
}

export default Button