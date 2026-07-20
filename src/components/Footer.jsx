import styled from "styled-components";


const FooterContainer = styled.footer`

  margin-top: 40px;

  padding: 20px;

  background-color: #111;

  color: white;

  text-align: center;


`;


const Nombre = styled.h3`

  margin: 0;

`;


const Texto = styled.p`

  margin: 5px 0;

`;



function Footer() {

  return (

    <FooterContainer>

      <Nombre>
        Raul Fernandez
      </Nombre>

      <Texto>
        Developer
      </Texto>

    </FooterContainer>

  );

}


export default Footer;