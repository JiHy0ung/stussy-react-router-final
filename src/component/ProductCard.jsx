import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='product-card'>
        <img className='product-img' src={item?.img} alt="" />
        <div className='choice'>{item?.choice == true? "Conscious choice" : "\u00A0"}</div>
        <div className='product-name'>{item?.title}</div>
        <div>₩{item?.price}</div>
        <div>{item?.new == true ? "New Arrivals" : "\u00A0"}</div>
        <div className='product-sizes'>
            {item?.size?.join('\u00A0\u00A0\u00A0\u00A0')}
        </div>
    </div>
  )
}

export default ProductCard