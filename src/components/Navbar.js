import React ,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
function Navbar() {
    const [click,setClick] = useState(false);
    const [button,setButton] =useState(true);

    const handleClick = () => setClick(!click);
    const closedMobileMenu = () =>setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    },[])

    window.addEventListener('resize',showButton);
   
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick= 
            {closedMobileMenu}>
                BrainiaQs <i className="fab fa-typo3"></i>
            </Link>
            <div className='menu-icon' onClick= {handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
                {/* if you click in the hamburger menu then unclick it  */}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/SignUp' className='nav-links' onClick={closedMobileMenu}>
                        Enter Code
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closedMobileMenu}>
                        Stikes
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closedMobileMenu}>
                        User
                    </Link>
                </li>
                {/* <li className='nav-item'>
                    <Link to='/enter-code' className='nav-links-mobile' onClick={closedMobileMenu}>
                        Enter Code 
                    </Link>
                </li> */}
            </ul>
            {/* outside the ul,the components would go */}
            {/* {button && <Button buttonStyle='btn--outline' >Enter Code</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar
