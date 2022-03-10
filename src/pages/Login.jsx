import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e3fdfd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 10px 0px;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <CenterWrapper>
          <Title>SIGN IN</Title>
        </CenterWrapper>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="password" />
        </Form>
        <CenterWrapper>
          <Button>LOGIN</Button>
        </CenterWrapper>
        <Link>DON'T REMEMBER YOUR PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Wrapper>
    </Container>
  );
};

export default Register;
