import React from "react";

import "./title.css";

import { Container } from "react-bootstrap";

const TitleSection = ({ title }) => {
    return (
        <section className="title__section">
            <Container className="text-center">
                <h1 className="animate-charcter">{title}</h1>
            </Container>
        </section>
    );
};

export default TitleSection;
