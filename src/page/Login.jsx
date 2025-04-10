import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = ({setAuthenticate}) => {

  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    console.log("login user function issue")
    setAuthenticate(true);
    navigate('/all+product');
  }

  return (
    <div className='account-area'>
      <Form className='login-box' onSubmit={(event) => loginUser(event)} >
        <div className='login-title'>로그인</div>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <div style={{marginBottom: 20, fontSize: 14}}>
            <Form.Text  className="text-muted">
              별표(*)로 표시된 필드가 필수 필드입니다.
            </Form.Text>
          </div>
          <Form.Control type="email" placeholder="이메일*" />  
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="비밀번호*" />
        </Form.Group>
        <button className='login-button' type="submit">
          로그인
        </button>
      </Form>
      <div className='signup-area'>
        <div className='signup-box'>
          <div className='signup-title'>아직 회원이 아니신가요?</div>
          <button className='signup-button' type="submit">
            회원가입
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login