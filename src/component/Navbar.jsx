import { faBars, faSearch, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = ({authenticate, setAuthenticate}) => {

    const [selectCategory, setSelectedCategory] = useState(null);
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const menuList = ['SHOP', 'LOOKBOOK', 'SUPPORT']
    const categoryList = ['ALL', 'NEW ARRIVALS', 'OUTERWEAR', 'TEES', 'TOPS & SWEATS', 'PANTS']

    const navigate = useNavigate();

    const goToLogin = () =>{
        authenticate ? setAuthenticate(false) : navigate('/login');
    };

    const goToHome = () => {
        
        navigate('/');
    };

    const goToProductAll = (category) => {
        setSelectedCategory(category);
        if(category === 'ALL' || category == 'SHOP'){
            navigate('/all+product');
        }else if(category === 'NEW ARRIVALS'){
            navigate('/all+product?q=new=true');
        }else if(category === 'LOOKBOOK'){
            navigate('/all+product?q=choice=true');
        }else if(category === 'OUTERWEAR'){
            navigate('/all+product?q=Category=OUTERWEAR');
        }else if(category === 'TEES'){
            navigate('/all+product?q=Category=TEES');
        }else if(category === 'TOPS & SWEATS'){
            navigate('/all+product?q=Category=TOP');
        }else if(category === 'PANTS'){
            navigate('/all+product?q=Category=PANTS');
        }
    }

    const search = (event) => {
        if(event.key == "Enter"){
            // 입력한 검색어를 가져와 url을 바꿔준다.
            let keyword = event.target.value;
            navigate(`/all+product?q=${keyword}`);
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
                    {menuList.map((menu, idx) => (
                            <li key={idx} onClick={() => goToProductAll(menu)}>{menu}</li> // SHOP 클릭 시 goToProductAll 호출
                        ))}
                    </ul>
                </div>
            </div>
            <div className='nav-service'>
                <div className='nav-input-area' onClick={() => setSearchOpen(!searchOpen)}>
                    <FontAwesomeIcon className='search-icon' icon={faSearch}/>
                    <div className='nav-search-text'>SEARCH</div>
                </div>
                <div className='login-area' onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser}/>
                    {authenticate ? 'LOGOUT' : 'LOGIN'}
                </div>

                <div className='hamburger' onClick={() => setSideMenuOpen(!sideMenuOpen)}>
                    <FontAwesomeIcon icon={sideMenuOpen ? faX : faBars}/>
                </div>                
            </div>
        </div>

        <div className={`nav-search ${searchOpen ? 'active' : ''}`}>
            <FontAwesomeIcon className='nav-search-icon' icon={faSearch}/>
            <div className='nav-search-input-area'>
            <input className='nav-search-input' type="text" placeholder='검색하기' onFocus={(e) => e.target.value = ''} onKeyDown={(event)=>search(event)}/>
            <FontAwesomeIcon className='nav-search-icon' icon={faX} onClick={() => setSearchOpen(!searchOpen)}/>
            </div>
        </div>
            
        <div>
            <ul className={`nav-sidemenu ${sideMenuOpen ? 'open' : ''}`}>
                {categoryList.map((menu, idx) => (
                    <li key={idx} className={`side-select ${selectCategory === menu ? 'active' : ''}`} onClick={() => goToProductAll(menu)}>
                        {menu}
                    </li>
                ))}
            </ul>
        </div>

        <div className='nav-bottom'>
            <div className='nav-category-menu scroll-hidden'>
                <ul className='category-list scroll-hidden'>
                    {categoryList.map((menu, idx) => (
                        <li key={idx} className={`select ${selectCategory === menu ? 'active' : ''}`} onClick={() => goToProductAll(menu)}>
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
