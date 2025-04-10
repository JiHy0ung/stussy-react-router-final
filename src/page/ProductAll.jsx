import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProducts = async() => {
        let searchQuery = query.get('q')||"";
        let url = `https://my-json-server.typicode.com/JiHy0ung/stussy-react-router-final/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, [query]);

  return (
    <div className='product-all'>
        <div className='product-all-area'>
            <Row>
                {productList.map((menu) => (
                    <Col lg={3} >
                        <ProductCard item={menu}/>
                    </Col>
                ))}
            </Row>
        </div>
    </div>
  )
}

export default ProductAll