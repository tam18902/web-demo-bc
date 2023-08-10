import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Container, Row, Col } from "reactstrap";
import TitleSection from "../components/Title/Title";
import "../styles/home.css";

const Home = () => {
    return (
        <>
            <Header />
            {/* <Container>
                <Row>
                    <Col lg="6" md="6" sm="6">
                        <img
                            alt="ava"
                            className="w-100 single__nft-img"
                        />
                    </Col>

                    <Col lg="6" md="6" sm="6">
                        <div className="single__nft__content">
                            <h2>Title</h2>

                            <div className=" d-flex align-items-center justify-content-between mt-4 mb-4">
                                <div className=" d-flex align-items-center gap-4 single__nft-seen">
                                    <span>
                                        <i class="ri-eye-line"></i> 234
                                    </span>
                                    <span>
                                        <i class="ri-heart-line"></i> 123
                                    </span>
                                </div>

                                <div className=" d-flex align-items-center gap-2 single__nft-more">
                                    <span>
                                        <i class="ri-send-plane-line"></i>
                                    </span>
                                    <span>
                                        <i class="ri-more-2-line"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="nft__creator d-flex gap-3 align-items-center">
                                <div className="creator__img">
                                    <img alt="title" className="w-100" />
                                </div>

                                <div className="creator__detail">
                                    <p>Created By</p>
                                    <h6>creator</h6>
                                </div>
                            </div>

                            <p className="my-4">desc</p>
                        </div>
                    </Col>
                </Row>
            </Container> */}
            {/* <div className="background-first">
                <HeroSection />
            </div>1bhdWXXNai8
            <LiveAuction /> */}
            <TitleSection title={"Blockchain Demo"} />
            <section>
                <div className="video d-flex justify-content-center">
                    <iframe className="d-flex align-items-center" width="853"
                        height="480" src="https://www.youtube.com/embed/1bhdWXXNai8" title="T1 win"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen> </iframe>
                </div>
            </section>
            {/* <video src="https://www.youtube.com/embed/1bhdWXXNai8"></video> */}
            <Footer />
        </>
    );
};

export default Home;