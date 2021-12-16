import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App=()=>{

    return (
        <div className="container">
            <h1 className="text-center">Welcome</h1>
            <div class="card">
            <h5 class="card-header">Featured</h5>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            <button className="btn btn-outline-danger ">Hello</button>
        </div>
    );
};
export default App;