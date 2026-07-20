import styled from "styled-components";


const HeaderContainer = styled.header`

  padding: 20px;

  text-align: center;

  background-color: #222;

  color: white;


`;


const Titulo = styled.h1`

  margin: 0;

`;



function Header() {

  return (

    <HeaderContainer>

      <Titulo>
        Tienda electrónica
      </Titulo>

    </HeaderContainer>

  );

}


export default Header;