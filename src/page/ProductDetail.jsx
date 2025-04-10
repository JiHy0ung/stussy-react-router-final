import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

  let {id} = useParams();

  // state에 data정보 저장. 
  const [product, setProduct] = useState(null);

  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/JiHy0ung/stussy-react-router-final/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);

  };

  useEffect(() => {
    getProductDetail();
  }, [])

  return (
    <div className='detail'>
      <div className='detail-container'>
        <Row className='detail-box'>
          <Col className="custom-col">
            <img className='detail-img' src={product?.detailImage}/>
          </Col>
          <Col className='detail-info'>
            <div className='detail-product-info'>
              <div className='detail-title'>
                {product?.title}
              </div>
              <div className='detail-price'>
                ₩{product?.price}
              </div>
              <div className='detail-color'>
                {product?.color}
              </div>
              <div className='detail-size'>
              {product?.size.map((size) => (
                            <li>{size}</li>
                        ))}
              </div>
              <div className='detail-ship-info'>
                7만원 이상 구매 시 무료 배송
              </div>
              <div className='detail-detail'>
                <button className='detail-detail-button'>
                  <span className='detail-detail-title'>DETAILS</span>
                  <span className='detail-arrow'>
                    <FontAwesomeIcon className='detail-arrow' icon={faChevronDown}/>
                  </span>
                </button>
              </div>
              <div className='detail-detail'>
                <button className='detail-detail-button'>
                  <span className='detail-detail-title'>SIZE GUIDE</span>
                  <span className='detail-arrow'>
                    <FontAwesomeIcon className='detail-arrow' icon={faChevronDown}/>
                  </span>
                </button>
              </div>
              <div className='detail-detail'>
                <button className='detail-detail-button'>
                  <span className='detail-detail-title'>SHIPPING & RETURNS</span>
                  <span className='detail-arrow'>
                    <FontAwesomeIcon className='detail-arrow' icon={faChevronDown}/>
                  </span>
                </button>
              </div>
              <div className='detail-detail'>
                <button className='detail-detail-button'>
                  <span className='detail-detail-title'>STYLED WITH</span>
                  <span className='detail-arrow'>
                    <FontAwesomeIcon className='detail-arrow' icon={faChevronDown}/>
                  </span>
                </button>
              </div>
            </div>
            <div className='detail-shopping-area'>
              <div className='detail-add'>
                <button className='detail-shopping-add'>쇼핑백에 추가</button>
              </div>
              <div className='detail-buy'>
                <button className='detail-shopping-buy'>바로 구매</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ProductDetail