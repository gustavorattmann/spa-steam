import { Fragment } from 'react';

import Card from 'react-bootstrap/Card';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

import FormContact from '../elements/FormContact';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <main className="d-flex flex-row align-items-center justify-content-center py-5">
                <Card className="p-4" style={{ width: '60%', background: 'rgba(255, 255, 255, .85)' }}>
                    <Card.Body>
                        <Card.Title className="fs-1">Contato</Card.Title>
                        <Card.Text>
                            <p>Possui alguma dúvida ou deseja obter maiores informações sobre a maior empresa de distribuição de jogos digitais?<br />
                            Preencha os campos abaixo para que possamos entrar em contato assim que possível.</p>
                            <FormContact />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </main>
            <Footer />
        </Fragment>
    );
}

export default Home;