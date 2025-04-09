import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'


const Navbar = () => {

    const [selectCategory, setSelectedCategory] = useState(null);

    const menuList = ['SHOP', 'LOOKBOOK', 'SUPPROT']
    const categoryList = ['NEW ARRIVALS', 'SUNGLASSES', 'OUTERWEAR', 'TEES', 'TOPS & SWEATS', 'HOODIES & SWEATS', 'KNITS', 'PANTS', 'SHORTS', 'DENIM', 'HEADWEAR','ACCESSORIES']

  return (
    <div>
        <div className='nav-top'>
            <div className='nav-left'>
                <div className='nav-logo'>
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
                <div className='login-area'>
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
