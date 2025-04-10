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
    setProduct(data);

  };

  useEffect(() => {
    console.log(`id: ${id}`);
    getProductDetail();
  }, [])

  return (
    <div className='detail'>
      <div className='detail-container'>
        <Row>
          <Col>
            <img src={product?.detailImag}/>
          </Col>
          <Col>
            <div>
              {product?.title}
            </div>
            <div>
              ₩{product?.price}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ProductDetail