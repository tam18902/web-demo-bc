import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TitleSection from "../components/Title/Title";
import { Container, Row, Col } from "reactstrap";
import { DEMO_DATA } from "../assets/data/data";
import CoinbaseItem from "../components/CoinbaseItem"
import "../styles/coinbase.css";

const Coinbase = () => {
    return (
        <>
            <Header />
            <TitleSection title={"Coinbase Transactions"} />
            <section>
                <Container className="mb-5">
                    <div className="pb-2">
                        <h1>Peer A</h1>
                    </div>
                    <div className="row row-horizon row-custom">
                        {DEMO_DATA.map((item) => (
                            <div className="mb-4 col-sm-6">
                                <CoinbaseItem item={item} />
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
                                <CoinbaseItem item={item} />
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
                                <CoinbaseItem item={item} />
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