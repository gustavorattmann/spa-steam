import { Fragment } from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <div>
                <h1>About</h1>
            </div>
            <Footer />
        </Fragment>
    );
}

export default Home;