import React,{useEffect,useState} from 'react'

function JsonWork() {
    const[users, setUsers] = useState([]);
    const callData = async () =>{
        const response = await fetch('https://api.github.com/users'); 
        const data = await response.json();
        setUsers(data);
    }
    useEffect(() => {
        callData();
    }, [])
    return (
        <div className='container'>
            {/* <form>
                <div className='form-group'>
                  <input type="text"
                    class="form-control w-100" name="" id="" aria-describedby="helpId" placeholder=""/>
                  <small id="helpId" class="form-text text-muted">Help text</small>
                </div>
            </form> */}
            <div className='row'>
                {
                    users.map((user)=>{
                        return (
                            <div className='col-md-6 col-10'>
                                <div className='card mb-3' style={{ maxWidth: '540px', }}>
                                    <div className='row g-0'>
                                        <div className='col-md-4'>
                                        <img src={user.avatar_url} className='img-fluid rounded-start' alt="..."/>
                                        </div>
                                        <div className='col-md-8'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>{user.login}</h5>
                                            <p className='card-text'>Type: {user.type}</p>
                                            <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default JsonWork
