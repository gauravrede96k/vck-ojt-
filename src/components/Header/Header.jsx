import {Link} from 'react-router-dom'
const Header = () =>{
    return(
        <>

             <header>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>
        </>
       
    )
}

export default Header;



document.querySelector("#root > div.main-layout > div.content > div > div.hero-section > img")