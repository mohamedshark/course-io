import React, { uesState, useEffect  } from "react";
import "./Categories.css";

const Categories = ()=>{


    return(
    <>
    <h1 className="top-categories">Top Categories</h1>
    <div className="categories-container">
        <button className="first-category">Web Development</button>
        <button className="second-category">Mobile App Development</button>
        <button className="third-category">Data Science and Machine Learning</button>
        <button className="fourth-category">Game Development</button>
        <button className="fifth-category">Cybersecurity</button>
        <button className="sixth-category">Cloud Computing and DevOps</button>
    </div>
    </>
    )
}


export default Categories