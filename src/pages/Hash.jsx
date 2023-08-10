import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TitleSection from "../components/Title/Title";
import { Container, Row, Col } from "reactstrap";
import { DEMO_DATA } from "../assets/data/data";
import "../styles/home.css";
import "../styles/hash.css"

const Hash = () => {
    return (
        <>
            <Header />
            <TitleSection title={"SHA256 Hash"} />
            <section>
                <Container>
                    <Row>
                        {DEMO_DATA.slice(0, 1).map((item) => (
                            <div className="single_item">
                                <div className="well well-success" id="block1chain1well">
                                    <form className="form-horizontal">
                                        <div className="form-group">
                                            <h5 className="col-sm-2 control-label" for="block1chain1data">Data:</h5>
                                            <div className="col-sm-10">
                                                <textarea className="form-control" id="block1chain1data" rows="6"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group" id="state">
                                            <h5 className="col-sm-2 control-label" for="block1chain1hash">Hash:</h5>
                                            <div className="col-sm-10">
                                                <input className="form-control" id="block1chain1hash" type="text" value={item.hash} disabled />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-2">
                                                <i className="icon-spinner icon-spin icon-large"></i>
                                            </div>
                                            <div className="col-sm-10">
                                                <button className="btn-mine ladda-button" id="block1chain1mineButton" data-style="expand-right">
                                                    <span className="ladda-label">Mine</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        ))}
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default Hash;