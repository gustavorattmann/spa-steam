import { Fragment } from 'react';

import Card from 'react-bootstrap/Card';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <Card style={{ width: '60%', background: 'rgba(255, 255, 255, .85)' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </main>
            <Footer />
        </Fragment>
    );
}

export default Home;