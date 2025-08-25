// Verifica login
auth.onAuthStateChanged(user => {
    if(!user){ window.location.href="../index.html"; }
});

// Logout
function logout(){ auth.signOut().then(()=>{ window.location.href="../index.html"; }); }

// Menu mobile
function toggleMenu(){ document.querySelector('nav').classList.toggle('active'); }

// Função auxiliar para escolher frase aleatória
function fraseAleatoria(array){return array[Math.floor(Math.random()*array.length)];}

// Gerador de avaliação detalhado
function criarAvaliacao(){
    const nome = document.getElementById('nome').value.trim();
    const genero = document.getElementById('genero').value;
    const participacao = document.getElementById('participacao').value;
    const comportamento = document.getElementById('comportamento').value;
    const interesse = document.getElementById('interesse').value;
    const habilidadeComputador = document.getElementById('habilidadeComputador').value;
    const observacoes = document.getElementById('observacoes').value.trim();

    if(!nome){alert('Por favor, preencha o nome.'); return;}

    // --- Frases detalhadas ---
    const frasesParticipacao = {
        alta: [
            "demonstrou grande engajamento e interesse durante todas as aulas, participando ativamente das atividades propostas, contribuindo com ideias pertinentes, fazendo perguntas inteligentes e interagindo de forma constante com colegas e professores",
            "esteve sempre presente nas discussões e tarefas, mostrando entusiasmo e dedicação ao longo do trimestre, enriquecendo o aprendizado do grupo e inspirando seus colegas a se engajarem",
            "participou com entusiasmo e colaborou efetivamente nas atividades em grupo, evidenciando comprometimento, proatividade e iniciativa para assumir responsabilidades dentro da turma",
            "contribuiu de forma significativa nas dinâmicas da sala, sempre disposto a ajudar, ouvir opiniões e propor soluções criativas para os desafios apresentados",
            "teve uma postura proativa, buscando sempre participar das oportunidades de aprendizagem, demonstrando interesse genuíno pelo conteúdo e pelos processos de ensino-aprendizagem",
            "demonstrou iniciativa em diversas atividades, enriquecendo as discussões com suas colocações reflexivas, incentivando a participação coletiva e fortalecendo a interação entre colegas",
            "mostrou-se envolvido e interessado, participando ativamente dos momentos propostos em aula, expressando suas ideias com clareza e receptividade às opiniões dos outros"
        ],
        media: [
            "participou de forma consistente, mostrando boa interação com a turma, interesse nas atividades e contribuição satisfatória nas discussões, ainda que em alguns momentos tenha se mantido mais reservado",
            "esteve atento e colaborou em vários momentos, evidenciando envolvimento gradual com os conteúdos, demonstrando esforço para compreender e aplicar os conceitos trabalhados",
            "demonstrou interesse e contribuiu de maneira significativa em algumas atividades, buscando sempre melhorar e evoluir em seu desempenho acadêmico",
            "aproveitou as oportunidades para interagir e demonstrar conhecimento, mesmo que de forma moderada, mostrando capacidade de engajamento equilibrado",
            "participou pontualmente, mostrando sinais de engajamento que podem ser ampliados com estímulo e incentivo para maior participação",
            "teve participação equilibrada, contribuindo para o andamento das aulas de maneira satisfatória e demonstrando disposição para aprender de forma gradual",
            "mostrou-se receptivo às propostas, participando de forma intermitente, mas sempre aberto a colaborar e a se envolver com os conteúdos"
        ],
        baixa: [
            "teve uma participação mais reservada, aproveitando os momentos de interação principalmente para ouvir, observar e refletir sobre os conteúdos apresentados",
            "interagiu pontualmente, mas há oportunidades para ampliar seu envolvimento nas atividades e fortalecer sua participação nas discussões",
            "aproveitou as oportunidades de participação quando se sentiu confortável, demonstrando interesse limitado e necessitando de estímulo adicional",
            "demonstrou interesse restrito nas atividades, interagindo de forma mínima, sendo importante incentivar maior engajamento e envolvimento",
            "participou em momentos específicos, sendo necessário reforçar a participação contínua para potencializar o aprendizado",
            "teve um perfil mais observador, que pode ser estimulado a se expressar mais e contribuir de maneira ativa nas atividades em sala",
            "precisa de estímulo constante para se envolver mais ativamente, buscando desenvolver habilidades de participação colaborativa"
        ]
    };

    const frasesComportamento = {
        respeitoso: [
            "Mantém uma postura respeitosa e cordial com colegas e professores, colaborando para um ambiente harmonioso e saudável, valorizando a convivência e o diálogo",
            "Demonstra respeito e consideração no ambiente escolar, reconhecendo as necessidades dos outros e promovendo relações interpessoais positivas",
            "Trata todos com cordialidade e atenção, contribuindo para o fortalecimento das relações e para um clima de aprendizado seguro e acolhedor",
            "Respeita as regras da sala e participa com educação, promovendo o bem-estar coletivo e demonstrando atitudes exemplares",
            "Mostra empatia e cuidado nas interações, favorecendo um ambiente positivo, colaborativo e de confiança entre colegas e professores",
            "Age com gentileza e respeito, fortalecendo o espírito de colaboração, cooperação e solidariedade dentro da sala de aula",
            "Apresenta atitudes respeitosas que contribuem para a convivência pacífica, prevenindo conflitos e estimulando boas práticas sociais"
        ],
        colaborativo: [
            "Colabora ativamente com o grupo, incentiva o trabalho em equipe e demonstra responsabilidade nas tarefas compartilhadas",
            "Contribui para o trabalho coletivo, ajuda colegas quando necessário e promove um ambiente de cooperação e apoio mútuo",
            "Mostra espírito de equipe, disposição para apoiar os demais e engajamento nas atividades conjuntas, fortalecendo a interação social",
            "Participa das atividades em grupo com entusiasmo e respeito, facilitando a integração, comunicação e o aprendizado coletivo",
            "Oferece ajuda, compartilha conhecimentos e ideias, tornando-se referência de cooperação e exemplo de comportamento propositivo",
            "Demonstra comprometimento com o sucesso coletivo, incentivando o diálogo, a colaboração e a resolução conjunta de problemas",
            "Valoriza o trabalho conjunto, contribuindo efetivamente para o alcance de objetivos comuns e para um ambiente positivo"
        ],
        cuidadoso: [
            "Cuida dos materiais e recursos utilizados, prezando pela organização, conservação e bom uso dos equipamentos da escola",
            "Demonstra atenção aos detalhes, zelo com os equipamentos e responsabilidade na utilização dos recursos disponíveis",
            "Preocupa-se em manter o espaço de trabalho limpo e organizado, respeitando normas e contribuindo para o bom funcionamento das aulas",
            "Mostra responsabilidade com os recursos disponibilizados, evitando desperdícios, danos e utilizando materiais de forma consciente",
            "Zela pela manutenção dos equipamentos, participando ativamente da preservação do ambiente escolar e do material didático",
            "Tem cuidado especial com os materiais, assegurando que estejam sempre em condições adequadas de uso para todos",
            "Adota posturas que favorecem a durabilidade dos recursos e o bom aproveitamento das atividades em sala de aula"
        ],
        conflituoso: [
            "Envolve-se em conflitos frequentes, exigindo atenção do professor para mediação e incentivo à resolução pacífica de situações",
            "Apresenta dificuldades em lidar com desentendimentos, necessitando orientação e acompanhamento para aprimorar habilidades socioemocionais",
            "Necessita de acompanhamento contínuo para gerenciar conflitos, desenvolvendo empatia, paciência e comunicação assertiva",
            "Tem enfrentado desafios no relacionamento com colegas, sendo importante trabalhar estratégias de cooperação e respeito mútuo",
            "Mostra tendência a gerar conflitos pontuais, o que pode ser canalizado para aprender negociação, tolerância e resolução pacífica",
            "Precisa desenvolver habilidades para lidar com frustrações e diferenças, contribuindo para um ambiente de aprendizado saudável",
            "É importante que receba orientações para melhorar a comunicação, o trabalho em grupo e a colaboração nas atividades coletivas"
        ]
    };

    const frasesInteresse = {
        alto: [
            "Busca explorar e compreender os temas abordados, demonstrando curiosidade intensa, questionando conceitos e aprofundando seu aprendizado",
            "Demonstra grande interesse pelos conteúdos, participando ativamente, realizando pesquisas adicionais e mostrando entusiasmo contínuo",
            "Mostra motivação constante nas atividades propostas, aplicando o conhecimento adquirido e buscando sempre novas descobertas",
            "Apresenta postura investigativa, questionando, refletindo e propondo ideias inovadoras que enriquecem o aprendizado coletivo",
            "Envolve-se com dedicação e atenção plena, evidenciando paixão pelo conhecimento e incentivo à aprendizagem própria e dos colegas",
            "Destaca-se pela atenção e interesse demonstrados durante explanações, realizando conexões e aplicando conceitos de forma prática",
            "Busca aprofundamento nos assuntos tratados, participando com dedicação, curiosidade e envolvimento ativo nas atividades"
        ],
        medio: [
            "Mantém bom nível de interesse, participando com constância e atenção, mesmo que de forma moderada em alguns momentos",
            "Mostra disposição gradual para aprender e explorar os conteúdos, com progressos consistentes ao longo do trimestre",
            "Demonstra curiosidade pontual nas atividades, aplicando conhecimentos e buscando compreender melhor os conteúdos trabalhados",
            "Participa das aulas com interesse regular, aproveitando oportunidades de aprendizado quando percebe relevância direta",
            "Apresenta evolução gradual no interesse pelos conteúdos, sendo estimulável para engajamento mais intenso",
            "Engaja-se de forma satisfatória, contribuindo para o desenvolvimento de habilidades cognitivas e práticas",
            "Mostra receptividade e participação equilibrada, ainda que intermitente, em propostas didáticas e atividades colaborativas"
        ],
        baixo: [
            "Mostra interesse restrito e participação seletiva, sendo importante receber estímulo para ampliar curiosidade e engajamento",
            "Participa de forma limitada, concentrando-se apenas em momentos específicos, necessitando incentivo adicional para maior envolvimento",
            "Demonstra desmotivação em algumas situações, sendo essencial acompanhamento próximo para despertar interesse contínuo",
            "Apresenta atenção intermitente, devendo ser encorajado a se envolver ativamente em diferentes atividades propostas",
            "Encontra dificuldades para manter foco e interesse nas tarefas, o que pode ser aprimorado com orientação e estímulo",
            "Precisa ser incentivado a explorar novos conteúdos e interagir mais, desenvolvendo interesse e participação ativa",
            "Pode beneficiar-se de acompanhamento individualizado para motivar maior engajamento e curiosidade pelos temas"
        ]
    };

    const frasesHabilidadeComputador = {
        "sem dificuldades": [
            "Manuseia o computador com facilidade e segurança, realizando as tarefas com autonomia, confiança e precisão, explorando todos os recursos disponíveis",
            "Demonstrou excelente habilidade ao utilizar recursos digitais, facilitando aprendizado, criando conteúdos e resolvendo desafios tecnológicos",
            "Apresenta domínio das ferramentas digitais, executando tarefas rapidamente e aplicando soluções criativas, colaborando com colegas",
            "Mostra capacidade avançada no uso de programas e aplicativos, realizando atividades de forma eficaz e organizada",
            "Utiliza recursos tecnológicos de forma consciente e eficiente, aproveitando ao máximo as possibilidades de aprendizagem",
            "Destaca-se pela adaptabilidade e facilidade em aprender novas ferramentas digitais, contribuindo positivamente para atividades colaborativas",
            "Exibe agilidade, segurança e autonomia no manuseio do computador, tornando-se referência em execução de tarefas digitais"
        ],
        "com algumas dificuldades": [
            "Enfrenta alguns desafios no manuseio do computador, mas demonstra esforço e perseverança para superar obstáculos e aprender continuamente",
            "Apresenta dificuldades pontuais, porém evolui gradualmente ao aplicar orientações e desenvolver novas habilidades digitais",
            "Necessita de apoio em certas etapas, mas busca autonomia e aprende com prática e repetição",
            "Avança no uso do computador, mesmo diante de obstáculos, mostrando motivação e persistência para melhorar",
            "Recebe instruções e aplica-as com empenho, desenvolvendo habilidades digitais de forma consistente",
            "Com orientação, aprimora seu desempenho em atividades tecnológicas, demonstrando interesse e dedicação",
            "Está em processo de desenvolvimento das competências digitais, com resultados progressivos e evolução perceptível"
        ],
        "necessita de apoio constante": [
            "Necessita de acompanhamento contínuo para realizar atividades no computador, mesmo assim demonstra esforço e boa vontade em aprender",
            "Apresenta limitações significativas no uso de ferramentas digitais, precisando de suporte para alcançar objetivos propostos",
            "Depende de orientação frequente, mas mostra empenho e interesse em desenvolver habilidades tecnológicas",
            "Precisa de suporte constante para realizar tarefas digitais, embora participe de forma positiva quando orientado",
            "Enfrenta dificuldades importantes, mas mantém disposição para tentar, aprender e melhorar com apoio",
            "Recebe auxílio frequente, demonstrando motivação e persistência para superar desafios tecnológicos",
            "Requer acompanhamento próximo para utilizar corretamente os recursos digitais, sendo estimulável com orientação adequada"
        ]
    };

    // Monta o texto da avaliação
    let avaliacao = `Durante as aulas de Cultura Digital, ${nome} ${fraseAleatoria(frasesParticipacao[participacao])}. `;
    avaliacao += `${fraseAleatoria(frasesComportamento[comportamento])}. `;
    avaliacao += `${fraseAleatoria(frasesInteresse[interesse])}. `;
    avaliacao += `${fraseAleatoria(frasesHabilidadeComputador[habilidadeComputador])}.`;
    if(observacoes){avaliacao += ` ${observacoes}`;}

    document.getElementById('resultado').innerText = avaliacao;
    document.getElementById('copiarBtn').style.display = 'inline-flex';
}

// Copiar texto
function copiarTexto(){
    const texto = document.getElementById('resultado').innerText;
    if(!texto){alert('Nenhum texto para copiar.'); return;}
    navigator.clipboard.writeText(texto).then(()=>{
        const btn = document.getElementById('copiarBtn');
        btn.innerText="✅ Copiado!";
        setTimeout(()=>{btn.innerHTML='📋 Copiar Texto';},2000);
    }).catch(err=>{alert("Erro ao copiar o texto: "+err);});
}
