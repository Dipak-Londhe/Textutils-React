import './input.css'


const Input = (props) => {

    return (

        <>

            <div>
                <textarea  value={props.value} onChange={props.update} cols="30" rows="16" >

                </textarea>
            </div>

        </>
    )
}

export default Input