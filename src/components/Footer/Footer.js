import { SocialLinks, FooterColumn, Row, FooterItem,FooterContainer  } from "./styled"

export const Footer = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <FooterContainer>
                <Row>
                    <FooterColumn>
                        <h4>Companhia</h4>
                        <FooterItem>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Nossos Serviços</a></li>
                            <li><a href="#">Politica de privacidade</a></li>
                            <li><a href="#">Parceiros</a></li>
                        </FooterItem>
                    </FooterColumn>
                    <FooterColumn>
                        <h4>Ajuda</h4>
                        <FooterItem>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Retorno</a></li>
                            <li><a href="#">Status</a></li>
                        </FooterItem>
                    </FooterColumn>
                    <FooterColumn>
                        <h4>Serviços</h4>
                        <FooterItem>
                            <li><a href="#">Editais</a></li>
                            <li><a href="#">Junte-se a nós!</a></li>
                        </FooterItem>
                    </FooterColumn>
                    <FooterColumn>
                        <h4>Seguir</h4>
                        <SocialLinks>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </SocialLinks>
                    </FooterColumn>
                </Row>
            </FooterContainer>
        </>
    )
}