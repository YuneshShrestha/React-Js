import React,{useState} from "react";
function Form()
{
    let [username, setUserName]=useState("");
    let [subject, setSubject]=useState("");
    let [student, setStudent]=useState({});
    let [students, setStudents]=useState([]);

    const inpputHandler = (e)=>{
        return setUserName(e.target.value);
    };
    const subjectHandler = (e)=>{
        return setSubject(e.target.value);
    };
    const submitHandler= (e)=>{
        // prevents from refreshing page
        e.preventDefault();
        setStudent({
            username,
            subject
        });
        setStudents(students.push(student));
        console.log(students);
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
            <label htmlFor="username">Name</label>
            <input id="username" value={username} name="username" onChange={inpputHandler}/><br/>
            <label htmlFor="subjects">Subject</label>
            <select id="subject" name="subject" value={subject} onChange={subjectHandler}>
                <option>Chem</option>
                <option>Thermo</option>
                <option>Mech</option>
            </select><br/>
            <button htmlFor="submit" value="submit">Submit</button>
        </form>
        {/* <p>{students.map((item)=>{
            item.name
        })}</p> */}
        </div>
    );
}
export default Form;