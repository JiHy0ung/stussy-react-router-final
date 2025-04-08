import React from 'react'

const Navbar = () => {

    const menuList = ['SHOP', 'LOOKBOOK', 'SUPPROT']
    const categoryList = ['NEW ARRIVALS', 'SUNGLASSES', 'OUTERWEAR', 'TEES', 'HOODIES & SWEATS', 'KNITS', 'PANTS']

  return (
    <div>
        <div className='nav-top'>
            <div className='nav-left'>
                <div className='nav-logo'>
                    <img width={56} src='https://cdn.brandfetch.io/idQhFgaghK/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1740484014859'/>
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
                <div>
                    <input className='nav-input' type="text" placeholder='SEARCH'/>
                </div>
                <div className='login-area'>
                    LOGIN
                </div>
            </div>
        </div>
        <div className='nav-bottom'>
            <div>
                <ul className='category-list'>
                    {categoryList.map((menu) => (
                        <li className='select'>{menu}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
