import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  const goToAllProducts =() => {
    navigate('/all+product');
  };

  return (
    <>
      <div className='home-img-area' onClick={goToAllProducts}>
          <img className='home-img' src='/Stussy-Homepage.webp' alt=""/>
      </div>
      <div className='home-footer'>
        <div className='home-footer-top'>
          <div className='home-news'>NEWSLETTER</div>
          <div className='home-copy'>© 2025 STÜSSY</div>
        </div>
        <div className='home-footer-bottom'>
            코리아트라이브 유한회사 | 대표 SEJIN PARK | 사업자등록번호 561-87-00715 | 서울특별시 강남구 대치동 942 해성빌딩 | 통신판매신고번호 제 2018 - 서울서초 - 0860 호 [사업자정보확인] | 전화 00-30832-10322 | 이메일 support@stussy.co.kr | 개인정보관리책임자 KOREA TRIBE, INC. | 개인정보취급방침
        </div>
      </div>
    </>
  )
}

export default Home