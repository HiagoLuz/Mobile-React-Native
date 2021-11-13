import React, {Component} from 'react'
import { View, FlatList } from 'react-native'
import {styles} from '../anuncios/styles'

import Vagas from '../vagas/vagas'

export default class Anuncios extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vagas:[
                {
                    id: 1, vaga: 'Estágio em Mecânica - Técnico', salario: 1200.00,
                    dsVaga: 'Apoio técnico a projetistas para desenhos de equipamentos (plantas e cortes).',
                    contato: 'Tel.: (11) 995212710 E-mail: vagaMecanica@vaga.com.br'
                },
                {
                    id: 2, vaga: 'Programador Mobile', salario: 3500.00,
                    dsVaga: 'Colaborar com ideias que possam melhorar nossos sistemas e a vida dos nossos usuários;',
                    contato: 'Tel.: (13) 994865773 E-mail: vagasMobile@vaga.com.br'
                },
                {
                    id: 3, vaga: 'Analista de R&S Sênior (Marketing e Produto)', salario: 5789.80,
                    dsVaga: 'Responsável pela execução do ciclo completo de recrutamento e seleção para vagas de marketing/produto',
                    contato: 'Tel.: (81) 981566948 E-mail.: vagaAnalista@vaga.com.br'
                },
                {
                    id: 4, vaga: 'Eletricista ', salario: 2500.00,
                    dsVaga: 'Elétrica Geral - Desmontagem, montagem e verificação do sistema eletroeletrônico;',
                    contato: 'Tel.: (11) 991131677 E-mail: vagaEletricista@vaga.com.br'
                },
                {
                    id: 5, vaga: 'Desenvolvedor JAVA SENIOR', salario: 6239.18,
                    dsVaga: 'Empresa internacional especializada em Jogos Digitais para multiplas plataformas, com 15 anos no mercado',
                    contato: 'Tel.: (41) 34466795 E-mail: vagabackend2@vaga.com.br'
                },
            ]
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                data={this.state.vagas}
                vertical={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({item})=> <Vagas data={item} />}
                />
            </View>
        )
    }
}