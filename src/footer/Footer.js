import { AiOutlineHome, AiOutlineHeart } from 'react-icons/ai';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';

import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";


function Footer(){
    return(
        <Box>
            <Container>
                <Row>
                <Column>
                    <FooterLink href="#"><AiOutlineHome/></FooterLink>
                </Column>
                <Column>
                    <FooterLink href="#"><AiOutlineHeart/></FooterLink>
                </Column>
                <Column>
                    <FooterLink href="#"><BiMessageRoundedDots/></FooterLink>
                </Column>
                <Column>
                    <FooterLink href="#"><FaRegUser/></FooterLink>
                </Column>
                </Row>
            </Container>
        </Box>
    );
}

export default Footer;