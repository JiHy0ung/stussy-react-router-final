import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = ({setAuthenticate}) => {

  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    console.log("login user function issue")
    setAuthenticate(true);
    navigate('/');
  }

  return (
    <Container>
      <Form onSubmit={(event) => loginUser(event)} >
        <div>로그인</div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Text className="text-muted">
            별표(*)로 표시된 필드가 필수 필드입니다.
          </Form.Text>
          <Form.Control type="email" placeholder="이메일*" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="비밀번호*" />
        </Form.Group>
        <Button variant="dark" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  )
}

export default Login