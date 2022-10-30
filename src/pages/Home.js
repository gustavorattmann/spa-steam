import { Fragment } from 'react';

import Card from 'react-bootstrap/Card';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

import GraphSteamMostPlayed from '../elements/GraphSteamMostPlayed';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <main className="d-flex flex-row align-items-center justify-content-center py-5">
                <Card className="p-4" style={{ width: '90%', background: 'rgba(255, 255, 255, .85)' }}>
                    <Card.Body>
                        <Card.Title className="fs-1">Steam</Card.Title>
                        <Card.Title>O que é Steam?</Card.Title>
                        <Card.Text>
                            Steam é um software de gestão de direitos digitais criado pela Valve Corporation ou Valve L.L.C., de plataformas digitais como jogos e aplicativos de programação e fornece serviços facilitados como atualização automática de jogos, e preços acessíveis aos usuários. Atualmente o Steam conta com aproximadamente 65 milhões de usuários ativos, e tem médias de acesso diário de 8,5 milhões de contas ao mesmo tempo. O programa também conta com um sistema de amigos, que permite ao usuário criar uma rede de contatos online, com os quais pode jogar, trocar itens, interagir no chat, transmitir ao vivo (gameplays) e mais...
                        </Card.Text>
                        <Card.Text>
                            Pelo Steam podem ser comprados e jogados famosos jogos como Counter-Strike, Fall Guys, Half-Life, Team Fortress 2, Left 4 Dead, Grand Theft Auto V, Dota 2, Terraria, PUBG, The Witcher e Minimalist entre um catálogo de mais de 33,451 jogos. Pode-se inclusive adicionar jogos já instalados na sua máquina ao Steam. Para obtê-lo é necessário efetuar o download do cliente oficial na página; para jogar, é necessário possuir o número de série original dos jogos ou fazer uma aquisição na loja do serviço.
                        </Card.Text>
                        <div className="text-end mb-3">
                            <small className="fst-italic">Texto retirado da <a href="https://pt.wikipedia.org/wiki/Steam" target="_blank" rel="noreferrer">Wikipédia</a></small>
                        </div>
                        <Card.Title>Jogos Mais Jogados</Card.Title>
                    </Card.Body>
                    <GraphSteamMostPlayed />
                </Card>
            </main>
            <Footer />
        </Fragment>
    );
}

export default Home;