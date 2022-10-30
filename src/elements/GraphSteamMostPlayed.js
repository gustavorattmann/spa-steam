import { useEffect, useState, useMemo } from 'react';

import axios from 'axios';

import Table from './TableLayout';

const GraphSteamMostPlayed = () => {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        buscarGrafico();
    }, []);

    const buscarGrafico = async () => {
        let cotacao;

        const requestCotacao = {
            method: 'get',
            url: 'https://economia.awesomeapi.com.br/json/last/USD-BRL'
        }

        await axios(requestCotacao)
        .then((resCotacao) => {
            cotacao = parseFloat(resCotacao.data.USDBRL.bid);
        })
        .catch((errCotacao) => console.log(errCotacao));

        const request = {
            method: 'get',
            url: 'http://localhost:8000/mais-jogados'
        }
    
        await axios(request)
        .then(async(res) => {
            console.log(res.data)

            let listaJogos = [];

            const jogos = res.data;

            let quantidadeJogos = Object.keys(jogos).length;

            for (let i = 0; i < quantidadeJogos; i++) {
                var gameTd = <div><img src={jogos[i].capsule} alt={`Imagem de ${jogos[i].nome}`} />&nbsp;&nbsp;&nbsp;{jogos[i].nome}</div>;
                
                var precoConvertido = (cotacao * jogos[i].preco);

                var precoMonetario = precoConvertido !== 0 ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(precoConvertido) : 'Gratuito';

                var quantidadeJogadoresConvertido = jogos[i].quantidade_jogadores !== 0 ? new Intl.NumberFormat('pt-BR', { style: 'decimal', currency: 'BRL' }).format(jogos[i].quantidade_jogadores) : '';

                var quantidadeAvalicoesPositivas = jogos[i].quantidade_revisoes_positivas !== 0 ? new Intl.NumberFormat('pt-BR', { style: 'decimal', currency: 'BRL' }).format(jogos[i].quantidade_revisoes_positivas) : '';

                var quantidadeAvalicoesNegativas = jogos[i].quantidade_revisoes_negativas !== 0 ? new Intl.NumberFormat('pt-BR', { style: 'decimal', currency: 'BRL' }).format(jogos[i].quantidade_revisoes_negativas) : '';

                listaJogos[i] = {
                    position: i + 1,
                    game: gameTd,
                    price: precoMonetario,
                    players: quantidadeJogadoresConvertido,
                    positives: quantidadeAvalicoesPositivas,
                    negatives: quantidadeAvalicoesNegativas,
                    developer: jogos[i].desenvolvedor
                }
            }
    
            setLista(listaJogos);
        })
        .catch((err) => {
            console.log(err)
        });
    }

    const columns = useMemo(
        () => [
          {
            Header: 'Posição',
            accessor: 'position',
          },
          {
            width: '100',
            Header: 'Jogo',
            accessor: 'game',
          },
          {
            Header: 'Preço',
            accessor: 'price',
          },
          {
            Header: 'Jogadores Agora',
            accessor: 'players',
          },
          {
            Header: 'Avaliações Positivas',
            accessor: 'positives',
          },
          {
            Header: 'Avaliações Negativas',
            accessor: 'negatives',
          },
          {
            Header: 'Desenvolvedor',
            accessor: 'developer',
          }
        ],
        []
    );

    return (
        <Table columns={columns} data={lista} />
    );
}

export default GraphSteamMostPlayed;