import {Outlet} from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/header/navbar";
import Footer from "../components/footer/footer";

function Layout() {
    return (
        <Section>
            <Container>
                <NavBar/>
                <Outlet/>
            </Container>
            <Footer/>
        </Section>

    );
}

export default Layout;

const Container = styled.div`
  width: 1210px;
  margin: 0 auto;
`

const Section = styled.div`
  width: 1440px;
  margin: 0 auto;
  background-color: #F5F6F7;
`