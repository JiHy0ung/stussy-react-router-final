import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = ({authenticate, setAuthenticate}) => {

    const [selectCategory, setSelectedCategory] = useState(null);

    const menuList = ['SHOP', 'LOOKBOOK', 'SUPPORT']
    const categoryList = ['ALL', 'NEW ARRIVALS', 'SUNGLASSES', 'OUTERWEAR', 'TEES', 'TOPS & SWEATS', 'HOODIES & SWEATS', 'KNITS', 'PANTS', 'SHORTS', 'DENIM', 'HEADWEAR','ACCESSORIES']

    const navigate = useNavigate();

    const goToLogin = () =>{
        authenticate ? setAuthenticate(false) : navigate('/login');
    };

    const goToHome = () => {
        
        navigate('/');
    };

    const search = (event) => {
        if(event.key == "Enter"){
            // 입력한 검색어를 가져와 url을 바꿔준다.
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);

        }
    };

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
                    <input className='nav-input' type="text" placeholder='SEARCH'onKeyDown={(event)=>search(event)}/>
                </div>
                <div className='login-area' onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser}/>
                    {authenticate ? 'LOGOUT' : 'LOGIN'}
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
