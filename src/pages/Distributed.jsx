import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TitleSection from "../components/Title/Title";
import { Container, Row, Col } from "reactstrap";
import { DEMO_DATA } from "../assets/data/data";
import BlockchainItem from "../components/BlockchainItem"
import "../styles/distributed.css";

const Coinbase = () => {
    return (
        <>
            <Header />
            <TitleSection title={"Distributed Blockchain"} />
            <section>
                <Container className="mb-5">
                    <div className="pb-2">
                        <h1>Peer A</h1>
                    </div>
                    <div className="row row-horizon row-custom">
                        {DEMO_DATA.map((item) => (
                            <div className="mb-4 col-sm-6">
                                <BlockchainItem item={item} />
                            </div>
                        ))}
                    </div>
                </Container>
                <Container className="mb-5">
                    <div className="pb-2">
                        <h1>Peer B</h1>
                    </div>
                    <div className="row row-horizon row-custom">
                        {DEMO_DATA.map((item) => (
                            <div className="mb-4 col-sm-6">
                                <BlockchainItem item={item} />
                            </div>
                        ))}
                    </div>
                </Container>
                <Container className="mb-5">
                    <div className="pb-2">
                        <h1>Peer C</h1>
                    </div>
                    <div className="row row-horizon row-custom">
                        {DEMO_DATA.map((item) => (
                            <div className="mb-4 col-sm-6">
                                <BlockchainItem item={item} />
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default Coinbase;