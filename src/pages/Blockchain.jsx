import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TitleSection from "../components/Title/Title";
import { Container, Row, Col } from "reactstrap";
import { DEMO_DATA } from "../assets/data/data";
import BlockchainItem from "../components/BlockchainItem";
import "../styles/home.css";

const Blockchain = () => {
    return (
        <>
            <Header />
            <TitleSection title={"BLOCKCHAIN"} />
            <section>
                <Container>
                    <Row>
                        {DEMO_DATA.map((item) => (
                            <Col sm="6" className="mb-4">
                                <BlockchainItem item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default Blockchain;