import React,{useState, useRef} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function UseRefProgram() {
    const luckyName = useRef(null);
    const [show, setShow] = useState(false);
    const submitForm = (e)=>{
        e.preventDefault();
        const name = luckyName.current.value;
        if(name==""){
            setShow(false);
            alert("Enter Data");
        }
        else{
            setShow(true);            
        }
    };
    return (
        <div>
          <form onSubmit={submitForm}>
                <div class="form-group">
                    <label for="">Name:</label>
                    <input type="text" id="luckyName" ref={luckyName}/><br/>
                </div> <br/>
                <button className='btn btn-primary' type='submit'>Submit</button>
           </form>
           <p>{show ? `your lucky name is ${luckyName.current.value}`:""}</p>
        </div>
        
    );
}

export default UseRefProgram;