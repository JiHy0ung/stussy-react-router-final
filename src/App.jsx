/*
2025년 4월 8일 화요일
작성자: 유지형
내용: h&m 리액트 라우터 페이지
(css가 이상하여 다시 만든 프로젝트)

1. 전체 상품 페이지, 로그인 페이지, 상품 디테일 페이지.
   1-1. 네비게이션 바 만들기
2. 전체 상품 페이지에서는 전체 상품 확인 가능.
3. 로그인 버튼을 누르면 로그인 페이지로 이동.
4. 상품 디테일을 눌렀으나,
   로그인이 안되어있을 경우 로그인 페이지가 먼저 나옴.
   로그인이 된 상태라면 상품 디테일 페이지로 이동.
5. 로그아웃 버튼을 누르면 로그아웃이 된다.
   디테일 페이지에서 로그아웃 버튼을 누르면 로그인 페이지로 이동.
(로그인을 하면 로그아웃으로 바뀌고 로그아웃을 하면 로그인으로 바뀌어야함.)
6. 상품을 검색할 수 있다.
 
 */

import './App.css'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAll from './page/ProductAll'
import Login from './page/Login'
import ProductDetail from './page/ProductDetail'
import Navbar from './component/Navbar'
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {

  const [authenticate, setAuthenticate] = useState(false) // true면 로그인이 됨.

  useEffect(() => {
    console.log("aaaa", authenticate);
  },[authenticate]);

  return (
    <div >
      <div className='nav-area'>
        <Navbar/>
      </div>
      <div className='product-area'>
        <Routes>
          <Route path='/' element={<ProductAll />}/>
          <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
          <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
