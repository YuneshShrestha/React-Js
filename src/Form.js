import React,{useState} from "react";
function Form()
{
    
    let [student, setStudent]=useState({username:"", subject:""});
    let [students, setStudents]=useState([]);

    const nameHandler = (e)=>{
        return setStudent({
            // ...spread operator (keeps old data)
            ...student,
            username: e.target.value
        });
    };
    const subjectHandler = (e)=>{
        return setStudent({
            ...student,
            subject: e.target.value
        });
    };
    const submitHandler= (e)=>{
        // prevents from refreshing page
        e.preventDefault();
        alert(` Hello ${student.username} you have joined ${student.subject}`);
        setStudents([...students,student]);
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
            <label htmlFor="username">Name</label>
            <input id="username" value={student.username} name="username" onChange={nameHandler}/><br/>
            <label htmlFor="subjects">Subject</label>
            <select id="subject" name="subject" value={student.subject} onChange={subjectHandler}>
                <option value="Chemistry">Chem</option>
                <option value="thermo">Thermo</option>
                <option value="mech">Mech</option>
            </select><br/>
            <button htmlFor="submit" value="submit">Submit</button>
        </form>
        {/* <p>{students.map((item)=>{
            item.name
        })}</p> */}
        <div>
         {
            students.map((student,index)=>{
            
                  return  (
                      <div>
                          {`${index+1}. ${student.username} has joined ${student.subject}`}
                      </div>
                  );
            
            })
        }
        </div>

        </div>
    );
}
export default Form;