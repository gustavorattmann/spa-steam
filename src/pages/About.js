import { Fragment } from 'react';

import Card from 'react-bootstrap/Card';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <main className="d-flex flex-row align-items-center justify-content-center py-5">
                <Card className="p-4" style={{ width: '80%', background: 'rgba(255, 255, 255, .85)' }}>
                    <Card.Body>
                        <Card.Title className="fs-1">Sobre a Steam</Card.Title>
                        <Card.Text>
                            O desenvolvimento do sistema Steam teve início em uma data não revelada, anterior a 2002. Antes de "Steam", recebeu os codinomes "Grid" e "Gazelle". Foi anunciada ao público em 22 de março de 2002 na Game Developers Conference, e foi apresentada apenas como uma rede de distribuição. Para demonstrar a facilidade de integração do Steam a um jogo, a Relic Entertainment criou uma versão especial de Impossible Creatures. O jogo, no entanto, não foi lançado no sistema naquela época, estando disponível no catálogo treze anos depois com uma versão retrabalhada.
                        </Card.Text>
                        <Card.Text>
                            O aplicativo cliente, em versão 1.0, foi disponibilizado para download em 2002 durante o período de beta-teste de Counter-Strike 1.6. À época, foi visto como um método para simplificar o processo de atualização e correção de defeito comuns em jogos online de computador. A instalação e uso do Steam eram obrigatórios para os testadores do jogo, mas o Steam era um componente opcional para os demais jogadores. Em 2004, a rede de autenticação World Opponent Network (WON) foi desativada e substituída pelo Steam.
                        </Card.Text>
                        <Card.Text>
                            Na mesma época, a Valve começou a negociar contratos com diversas editoras e desenvolvedores independentes para lançarem seus jogos no Steam, em geral, com um desconto de pré-compra de 10% do valor sugerido de venda. Dois exemplos recentes são Rag Doll Kung Fu e Darwinia, a editora canadense Strategy First anunciou em dezembro de 2005 uma parceria com a Valve para a distribuição eletrônica de títulos atuais e futuros.
                        </Card.Text>
                        <Card.Title>Lançamento de Half-Life 2</Card.Title>
                        <Card.Text>
                            Em 16 de novembro de 2004, Half-Life 2 foi lançado oficialmente. O jogo exigia sua ativação pelo Steam para ser jogado. Durante o dia do lançamento, um número significante de compradores (tanto pelo Steam quanto por lojas tradicionais) se viram incapacitados de jogar, em parte devido a lentidões no sistema Steam. Os servidores europeus de autenticação saíram do ar por cerca de cinco horas até serem consertados, impedindo usuários com contas neles armazenados de descriptografar o conteúdo e usufruir do jogo que haviam comprado. Outros problemas incluíram baixas velocidades de transferência, falhas e atualizações desnecessárias. As dificuldades e falhas apresentadas renderam ao lançamento o segundo lugar em uma lista dos "cinco lançamentos de jogos para computador mais atrapalhados" do site 1UP.com.
                        </Card.Text>
                        <Card.Title>Avaliação dos jogos</Card.Title>
                        <Card.Text>
                            Para facilitar o processo de escolha dos jogos, desde março de 2006 a Valve publica na página dos jogos o metascore, uma média ponderada de críticas, feita pelo Metacritic. Na página dos jogos no Metacritic é possível ler as críticas escritas sobre eles.
                        </Card.Text>
                        <Card.Title>Steamworks</Card.Title>
                        <Card.Text>
                            Em 28 de janeiro de 2008 a Valve liberou o Steamworks, uma ferramenta gratuita de desenvolvimento e publicação que possibilitou o acesso de desenvolvedores a cada componente do Steam. Especialmente, o Steamworks fornece meios de integrar os jogos com o cliente Steam, incluindo rede e ferramenta de autenticação de jogadores para ambos servidor e jogos multiplayer peer-to-peer, mecanismos de criar partidas, suporte para amigos e grupos da comunidade Steam, estatísticas e proezas Steam, integração de comunicação de voz, e suporte para Steam Cloud; a API também fornece mecanismos anti-cheat e gerenciamento de cópias digitais.
                        </Card.Text>
                        <Card.Title>Linux</Card.Title>
                        <Card.Text>
                            A Valve anunciou em 2012 que estava desenvolvendo um cliente Steam para Linux e modificando a Source Engine para funcionar nativamente no Linux, baseando-se na distribuição Ubuntu, o teste beta interno do cliente Linux começou em outubro de 2012, o teste externo começou no início de novembro do mesmo ano, o beta aberto foi disponível no final de dezembro de 2012, e o cliente foi finalmente lançado no meio de fevereiro de 2013.
                        </Card.Text>
                        <Card.Text>
                            Em agosto de 2018, a Valve lançou a versão beta do Proton, uma camada de compatibilidade do Windows de código aberto, assim os que usam o sistema operacional Linux podem rodar jogos Windows direto do cliente Steam para Linux. O software permite o uso de controles suportados pela Steam, mesmo aqueles não compatíveis com Windows.
                        </Card.Text>
                        <div className="text-end">
                            <small className="fst-italic">Texto retirado da <a href="https://pt.wikipedia.org/wiki/Steam" target="_blank" rel="noreferrer">Wikipédia</a></small>
                        </div>
                    </Card.Body>
                </Card>
            </main>
            <Footer />
        </Fragment>
    );
}

export default Home;