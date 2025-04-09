import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [selectCategory, setSelectedCategory] = useState(null);

    const menuList = ['SHOP', 'LOOKBOOK', 'SUPPORT']
    const categoryList = ['NEW ARRIVALS', 'SUNGLASSES', 'OUTERWEAR', 'TEES', 'TOPS & SWEATS', 'HOODIES & SWEATS', 'KNITS', 'PANTS', 'SHORTS', 'DENIM', 'HEADWEAR','ACCESSORIES']

    const navigate = useNavigate();

    const goToLogin = () =>{
        navigate('/login')
    }

    const goToHome = () => {
        navigate('/');
    }

  return (
    <div>
        <div className='nav-top'>
            <div className='nav-left'>
                <div className='nav-logo' onClick={goToHome}>
                    <img width={56} src='/stussy-logo.svg'/>
                </div>
                <div>
                    <ul className='menu-list'>
                        {menuList.map((menu) => (
                            <li>{menu}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='nav-service'>
                <div className='nav-input-area' >
                    <FontAwesomeIcon className='search-icon' icon={faSearch}/>
                    <input className='nav-input' type="text" placeholder='SEARCH'/>
                </div>
                <div className='login-area' onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser}/>
                    LOGIN
                </div>
            </div>
        </div>
        <div className='nav-bottom'>
            <div>
                <ul className='category-list'>
                    {categoryList.map((menu, idx) => (
                        <li key={idx} className={`select ${selectCategory === menu ? 'active' : ''}`} onClick={() => setSelectedCategory(menu)}>
                            {menu}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
