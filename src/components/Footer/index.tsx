import { AddressContainer, AddressInformationContainer, CopyrightContainer, FooterContainer, FooterInformationContainer, SocialMediaContainer, StyledLink } from "./styles";
import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export function Footer() {
    return (
        <FooterContainer>
            <FooterInformationContainer>
                <SocialMediaContainer>
                    <StyledLink to="/"><FaInstagram />@los.sombreros</StyledLink>
                    <StyledLink to="/"><FaFacebook />Los Sombreros Paleteria</StyledLink>
                </SocialMediaContainer>
                <AddressContainer>
                    <AddressInformationContainer>
                        <FaMapMarkerAlt />Rua Dos Sombreros, Bairro Centro - Timbó, SC
                    </AddressInformationContainer>
                    <AddressInformationContainer>
                        <FaPhoneAlt />(47) 12928-0219
                    </AddressInformationContainer>
                </AddressContainer>
            </FooterInformationContainer>
            <CopyrightContainer>
                Todos os direitos reservados <b>©</b> Los Sombreros 2022
            </CopyrightContainer>
        </FooterContainer>
    );
}

