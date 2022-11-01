import { Fragment, useEffect, useState } from 'react';

import axios from 'axios';

import Table from './TableLayout';
import PaginationComponent from './PaginationLayout';

const GraphSteamMostPlayed = () => {
    const [lista, setLista] = useState(['Nenhum registro encontrado!']);
    const [paginaAtual, setPaginaAtual] = useState(1);

    useEffect(() => {
        const buscarGrafico = async () => {
            let request = {
                method: 'get',
                url: `https://api-steam-graph.herokuapp.com/mais-jogados/${paginaAtual}`
            }
        
            await axios(request)
            .then(async(res) => {
                console.log(res.data)
    
                let listaJogos = [];
    
                const jogos = res.data;
    
                let quantidadeJogos = Object.keys(jogos).length;
    
                for (let i = 0; i < quantidadeJogos; i++) {
                    var gameTd = <div className="d-inline-flex align-items-center justify-content-center"><a href={jogos[i].link} target="_blank" rel="noreferrer"><img src={jogos[i].imagem} alt={`Imagem de ${jogos[i].nome}`} /></a><p className="mb-0 ms-3">{jogos[i].nome}</p></div>;
    
                    var precoTd = <div className="d-flex align-items-center"><span className="badge text-bg-success p-2 porcentagem">{jogos[i].porcentagem}</span>
                        <div className={ jogos[i].preco_original !== 'Gratuito para jogar' ? 'd-block ms-auto' : 'd-block' }>
                            <div>
                                {
                                    jogos[i].porcentagem !== '' ? <div className="text-end"><small className="position-relative original">{jogos[i].preco_original}</small></div> : jogos[i].preco_original
                                }
                            </div>
                            <div className="text-end">
                                {
                                    jogos[i].porcentagem !== '' ? <span className="badge text-bg-secondary p-2 desconto">{jogos[i].preco_desconto}</span> : jogos[i].preco_desconto
                                }
                            </div>
                        </div>
                    </div>
    
                    var jogandoAgora = String(jogos[i].jogando).replaceAll(',', '.');
                    var picoDiario = String(jogos[i].pico).replaceAll(',', '.');
    
                    listaJogos[i] = {
                        id: jogos[i].id,
                        game: gameTd,
                        price: precoTd,
                        players: jogandoAgora,
                        peak: picoDiario
                    }
                }
        
                setLista(listaJogos);
            })
            .catch((err) => {
                console.log(err)
    
                setLista(['Nenhum registro encontrado!']);
            });
        }

        buscarGrafico();
    }, [paginaAtual]);
    const columns = ['Posição', 'Jogo', 'Preço', 'Jogadores Agora', 'Pico Diário'];

    return (
        <Fragment>
            <Table columns={columns} data={lista} />
            <PaginationComponent currentPage={paginaAtual} total={100} limit={10} onPageChange={(pagina) => setPaginaAtual(pagina)} />
        </Fragment>
    );
}

export default GraphSteamMostPlayed;