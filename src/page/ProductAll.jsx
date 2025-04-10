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
        
        if (searchQuery === 'new=true') {
            url = `https://my-json-server.typicode.com/JiHy0ung/stussy-react-router-final/products?new=true`;
        }

        if (searchQuery === 'choice=true') {
            url = `https://my-json-server.typicode.com/JiHy0ung/stussy-react-router-final/products?choice=true`;
        }

        if (searchQuery === 'Category=OUTERWEAR') {
            url = `https://my-json-server.typicode.com/JiHy0ung/stussy-react-router-final/products?q=OUTERWEAR`;
        }

        if (searchQuery === 'Category=TEES') {
            url = `https://my-json-server.typicode.com/JiHy0ung/stussy-react-router-final/products?qTEES`;
        }

        if (searchQuery === 'Category=TOP') {
            url = `https://my-json-server.typicode.com/JiHy0ung/stussy-react-router-final/products?q=TOP`;
        }

        if (searchQuery === 'Category=PANTS') {
            url = `https://my-json-server.typicode.com/JiHy0ung/stussy-react-router-final/products?q=PANTS`;
        }

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