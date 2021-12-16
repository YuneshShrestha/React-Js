import React,{useState,useEffect} from 'react';

function UseEffectProgram() {
    let [resourceType, setResourceType]=useState("Posts");
    let [items, setItems] = useState([]);
    useEffect(()=>{
        console.log("Hello");
        return ()=>{
            // everytime you use
            console.log("Clean and use");
        }
    },[resourceType]);
    return (
        <div>
           <div>
            <button onClick={()=>setResourceType("Posts")}>Post</button>
            <button onClick={()=>setResourceType("Users")}>Users</button>
            <button onClick={()=>setResourceType("Comments")}>Comments</button>
            {/* <button>Hello</button> */}

           </div>
           <h3>{resourceType}</h3>

            {
                items.map(item=>{
                    return <pre>{JSON.stringify(item)}</pre>
                })
            }

        </div>
    );
}

export default UseEffectProgram;
