import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TitleSection from "../components/Title/Title";
import { Container, Row, Col } from "reactstrap";
import { DEMO_DATA } from "../assets/data/data";
import TokenItem from "../components/TokenItem";
import "../styles/home.css";

const Tokens = () => {
    return (
        <>
            <Header />
            <TitleSection title={"Tokens"} />
            <section>
                <Container>
                    <Row>
                        {DEMO_DATA.map((item) => (
                            <Col sm="6" className="mb-4">
                                <TokenItem item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default Tokens;