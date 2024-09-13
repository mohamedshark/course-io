import "./Footer.css"


const Footer = ()=>{

    return(
        
            <div className="footer">
                <div className="footer-list">
                    <div>
                    <ul>
                        <li> <a href="">Courses.IO Business</a></li>
                        <li> <a href="">Teach on Courses.IO</a></li>
                        <li> <a href="">About us</a></li>
                        <li> <a href="">Contact us</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="">Terms</a></li>
                        <li><a href="">Privacy policy</a></li>
                        <li><a href="">Help & support</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>
                </div>
                <div className="logo-cr">
                <div className="coursesIO-logo"><img src="CoursesIO.png" alt="" /></div>
                <div className="copy-rights">©2024 Courses.IO, Inc.</div>
                </div>
            </div>
        
    )
}

export default Footer