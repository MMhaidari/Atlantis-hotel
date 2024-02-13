import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
      border-radius: 50%;
  width: 100px;
  height: 100px;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo-light.jpeg" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
