import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TitleSection from "../components/Title/Title";
import { Container, Row, Col } from "reactstrap";
import { DEMO_DATA } from "../assets/data/data";
import BlockItem from "../components/BlockItem"
import "../styles/home.css";

const Block = () => {
    return (
        <>
            <Header />
            <TitleSection title={"Block"} />
            <section>
                <Container>
                    <Row>
                        {DEMO_DATA.slice(0, 1).map((item) => (
                            <Col sm="12" className="mb-4">
                                <BlockItem item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default Block;