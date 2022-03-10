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
  width: 40%;
  padding: 20px;
  background-color: white;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <CenterWrapper>
          <Title>CREATE AN ACCOUNT</Title>
        </CenterWrapper>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By signing up, you agree to our <b>Terms</b>, <b>Data Policy</b> and{" "}
            <b>Cookies Policy</b>.
          </Agreement>
        </Form>
          <CenterWrapper>
            <Button>CREATE ACCOUNT</Button>
          </CenterWrapper>
      </Wrapper>
    </Container>
  );
};

export default Register;
