import React, { useState, useEffect } from "react";
import "./CoursesSelection.css"

const CoursesSelection = ()=>{

    const [python, setPython] = useState(true);
    const [react, setReact] = useState(false);
    const [java, setJava] = useState(false);
    const [js, setJs] = useState(false);
    const [cplus, setCplus] = useState(false);
    const [csharp, setCsharp] = useState(false);
    const handlePython = ()=>{
        setPython(true);
        setReact(false);
        setJava(false);
        setJs(false);
        setCplus(false);
        setCsharp(false);
    }

    const handleReact = ()=>{
        setPython(false);
        setReact(true);
        setJava(false);
        setJs(false);
        setCplus(false);
        setCsharp(false);
    }

    const handleJava = ()=>{
        setPython(false);
        setReact(false);
        setJava(true);
        setJs(false);
        setCplus(false);
        setCsharp(false);
    }

    const handleJs = ()=>{
        setPython(false);
        setReact(false);
        setJava(false);
        setJs(true);
        setCplus(false);
        setCsharp(false);
    }

    const handleCplus = ()=>{
        setPython(false);
        setReact(false);
        setJava(false);
        setJs(false);
        setCplus(true);
        setCsharp(false);
    }

    const handleCsharp = ()=>{
        setPython(false);
        setReact(false);
        setJava(false);
        setJs(false);
        setCplus(false);
        setCsharp(true);
    }

    return(
        <div>
             {/* <h1 className="selection-box-heading">A Broad Selection of Courses</h1> */}
        <div className="selection-box">
            <button className="explore-courses-button" onFocus={handlePython}>Python</button>
            <button className="explore-courses-button" onClick={handleReact}>React</button>
            <button className="explore-courses-button" onFocus={handleJava}>Java</button>
            <button className="explore-courses-button" onFocus={handleJs}>Js</button>
            <button className="explore-courses-button" onFocus={handleCplus}>C++</button>
            <button className="explore-courses-button" onFocus={handleCsharp}>C#</button>
            <div className="python-container" style={{display: python? "block":"none"}}>
                   <h2>Expand your career opportunities with Python</h2>
                    <h3>Learn Python with Courses.IO, a versatile and 
                        beginner-friendly language. From web development 
                        with Flask and Django to data science and machine 
                        learning, Python offers endless possibilities. 
                        You'll work on real-world projects, from automation 
                        scripts to AI models, building practical skills that 
                        open diverse career opportunities. With its vast library 
                        support, Python is a powerful tool for modern programming.</h3>

                <div className="courses-container-python">
                    <a href=""><img src="/python1.jpg" alt="" /></a>
                    <a href=""><img src="/python2.jpg" alt="" /></a>
                    <a href=""><img src="/python3.jpg" alt="" /></a>
                    <a href=""><img src="/python4.jpg" alt="" /></a>
                </div>

                <div id="Explore-python-container"><button id="Explore-python">Explore Python</button></div>
            
            </div>

            <div className="react-container" style={{display: react? "block":"none"}}>
                   <h2>Expand your career opportunities with React</h2>
                    <h3>Take one of Courses.IO's range of React courses and 
                        learn how to build dynamic, high-performance web applications 
                        using one of the most popular front-end libraries. React's 
                        component-based architecture and efficient rendering make it 
                        perfect for creating responsive user interfaces. You'll master 
                        everything from the fundamentals of JSX and state management to 
                        advanced topics like hooks, context API, and building single-page 
                        applications.</h3>

                <div className="courses-container-react">
                    <a href=""><img src="/react1.jpg" alt="" /></a>
                    <a href=""><img src="/react2.jpg" alt="" /></a>
                    <a href=""><img src="/react3.jpg" alt="" /></a>
                    <a href=""><img src="/react4.jpg" alt="" /></a>
                </div>

                <div id="Explore-react-container"><button id="Explore-react">Explore React</button></div>
            
            </div>

            <div className="java-container" style={{display: java? "block":"none"}}>
                   <h2>Expand your career opportunities with Java</h2>
                    <h3>Take one of Courses.IO's range of Java courses 
                        and master this versatile and widely-used programming 
                        language. With Java's object-oriented approach and 
                        scalability, you'll be prepared to build robust applications, 
                        whether it’s for web development, Android apps, or enterprise 
                        solutions. You'll cover everything from core Java to advanced 
                        topics like Spring and Hibernate.</h3>

                <div className="courses-container-java">
                    <a href=""><img src="/java1.jpg" alt="" /></a>
                    <a href=""><img src="/java2.jpg" alt="" /></a>
                    <a href=""><img src="/java3.jpg" alt="" /></a>
                    <a href=""><img src="/java4.jpg" alt="" /></a>
                </div>

                <div id="Explore-java-container"><button id="Explore-java">Explore Java</button></div>
            
            </div>

            <div className="js-container"  style={{display: js? "block":"none"}}>
                   <h2>Expand your career opportunities with JavaScript</h2>
                    <h3>Take one of Courses.IO's range of JavaScript courses 
                        and learn how to code using one of the most essential 
                        languages for web development. JavaScript’s flexibility 
                        and power make it perfect for building interactive websites 
                        and dynamic web applications. You'll explore topics like ES6+, 
                        Node.js, React, and more, equipping you to create full-stack solutions.</h3>

                <div className="courses-container-js">
                    <a href=""><img src="/js1.jpg" alt="" /></a>
                    <a href=""><img src="/js2.jpg" alt="" /></a>
                    <a href=""><img src="/js3.jpg" alt="" /></a>
                    <a href=""><img src="/js4.jpg" alt="" /></a>
                </div>

                <div id="Explore-js-container"><button id="Explore-js">Explore JavaScript</button></div>
            
            </div>

            <div className="cplus-container"  style={{display: cplus? "block":"none"}}>
                   <h2>Expand your career opportunities with C++</h2>
                    <h3>Take one of Courses.IO's range of C++ courses 
                        and dive into this powerful, high-performance 
                        language. Known for its speed and control, C++ 
                        is perfect for developing applications where 
                        efficiency is key, such as game development, 
                        system programming, and real-time simulations. 
                        You'll learn everything from object-oriented programming 
                        to advanced memory management techniques.</h3>

                <div className="courses-container-cplus">
                    <a href=""><img src="/cplus1.jpg" alt="" /></a>
                    <a href=""><img src="/cplus2.jpg" alt="" /></a>
                    <a href=""><img src="/cplus3.jpg" alt="" /></a>
                    <a href=""><img src="/cplus4.jpg" alt="" /></a>
                </div>

                <div id="Explore-cplus-container"><button id="Explore-cplus">Explore C++</button></div>
            
            </div>

            <div className="csharp-container"  style={{display: csharp? "block":"none"}}>
                   <h2>Expand your career opportunities with C#</h2>
                    <h3>Take one of Courses.IO's range of C# courses 
                        and unlock the potential of this versatile language, 
                        widely used for developing Windows applications, games 
                        with Unity, and enterprise software. With a strong object-oriented 
                        foundation, you'll master C# syntax, .NET frameworks, and build 
                        scalable, efficient solutions for desktop, mobile, and web environments.</h3>

                <div className="courses-container-csharp">
                    <a href=""><img src="/csharp1.jpg" alt="" /></a>
                    <a href=""><img src="/csharp2.jpg" alt="" /></a>
                    <a href=""><img src="/csharp3.jpg" alt="" /></a>
                    <a href=""><img src="/csharp4.jpg" alt="" /></a>
                </div>

                <div id="Explore-csharp-container"><button id="Explore-csharp">Explore C#</button></div>
            
            </div>
        </div>
        </div>
    )
}

export default CoursesSelection