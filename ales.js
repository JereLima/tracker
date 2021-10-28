const resp = {
    treinamentos: {
        versao: [tudo],
        treinamentos:[
            {treinamentos: [
                {
                    id:'Gelo molhado',
                    titulo: 'Gelo molhado',
                    link:'www.dkdkk.com.b',
                    versao: 'versão de treinamentos (id)',
                    empresa: 'ttsts',
                    nota: null,
                    questões: [
                        {
                            id: 'yydh',
                            pergunta:'ahahhahaha',
                            alternativas:[
                            { id: '12', aleternativa: 'eee', correta: true },
                            { id: '13', aleternativa: 'aaa', correta: false  },
                            { id: '14', aleternativa: 'sss', correta: false },
                            { id: '15', aleternativa: 'www', correta: false  },
                            ],
                        }
                    ],
                    statusdaprova: 'Vencida' | 'Pendente' | 'Aprovado',
                },
            ]}
        ],
    },
}

const post = {
    post: {
        motoid: '',
        nome: '',
        cpf:'',
        celular: '',
        versão: '',
        idTreinamento: '',
        dataRealizado: '',
        respostas: [
            {idQuestão: '', alterSelecionada:''},
            {idQuestão: '', alterSelecionada:''},
            {idQuestão: '', alterSelecionada:''},
            {idQuestão: '', alterSelecionada:''}
        ]
    }
};