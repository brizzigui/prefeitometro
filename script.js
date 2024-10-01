/*
    Script for the computing and display of test results of prefeitometro.com
    
    by Guilherme Brizzi
*/

const full_dis = 0;
const part_dis = 1;
const neutral = 2;
const part_agr = 3;
const full_agr = 4;

const NUMBER_QUESTIONS = 15;

const answer_indexes = ["full_dis", "part_dis", "neutral", "part_agr", "full_agr"];
const img_links =   [
                    "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/2045202024/210002149679/88412",
                    "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/2045202024/210002341283/88412",
                    "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/2045202024/210002148504/88412",
                    "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/2045202024/210002188556/88412",
                    "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/2045202024/210001995616/88412",
                    "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/2045202024/210002189747/88412",
                    "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/2045202024/210001964902/88412"   

]

const question_strings =
["O transporte coletivo (ex: ônibus) deve ser priorizado sobre o transporte particular (ex: carros, motos). ",
    "O orçamento do munícipio deve priorizar a educação. ",
    "O município deve priorizar a redução de impostos, custe o que custar. ",
    "A cidade deve ter mais vias com faixa exclusiva para bicicletas. ",
    "O plano diretor deve ser flexibilizado a fim de permitir edifícios mais altos em mais regiões da cidade. ",
    "A prefeitura deve taxar fortemente imóveis abandonados ou subutilizados. ",
    "Moradores de rua devem ser retirados compulsoriamente. ",
    "A implementação de radares de velocidade é benéfica para o trânsito. ",
    "A prefeitura deve incentivar ações culturais financeiramente. ",
    "O investimento na renovação do centro antigo (gare, praça, calçadão) foi uma boa política. ",
    "O combate ao crime deve vir antes dos direitos humanos. ",
    "A proibição do consumo de bebidas alcoólicas na rua após certo horário foi uma medida correta. ",
    "A prefeitura tem negligenciado os bairros periféricos da cidade.",
    "Pessoas em imóveis irregulares (ocupações) devem ser retiradas. ",
    "O financiamento e envolvimento da prefeitura na Calourada na Gare foi positivo. "
]

const alidio_answers = [full_agr, full_agr, full_agr, full_agr, part_dis, full_agr, full_dis, part_agr, full_agr, part_agr, full_dis, full_dis, full_agr, full_dis, part_agr];
const moacir_answers = [full_agr, full_agr, full_agr, full_agr, full_agr, full_agr, full_dis, full_agr, full_agr, full_agr, full_dis, full_agr, full_agr, full_agr, full_agr];
const burmann_answers = [full_agr, full_agr, full_dis, full_agr, full_dis, part_agr, full_dis, part_dis, full_agr, part_dis, full_dis, part_agr, full_agr, part_dis, part_dis];
const riesgo_answers = [neutral, full_agr, part_agr, full_agr, full_agr, full_dis, part_dis, part_dis, part_agr, part_agr, part_agr, full_dis, full_agr, part_agr, neutral];
const roberta_answers = [neutral, full_agr, part_agr, full_agr, full_agr, full_agr, full_dis, part_agr, full_agr, part_dis, full_dis, full_dis, full_agr, part_dis, part_dis]; // must be changed
const decimo_answers = [part_agr, full_agr, neutral, full_agr, neutral, part_dis, full_dis, full_agr, full_agr, full_agr, neutral, neutral, full_dis, part_agr, full_agr];
const valdeci_answers = [full_agr, part_agr, part_dis, full_agr, part_dis, part_agr, full_dis, full_agr, full_agr, part_agr, full_dis, full_agr, full_agr, part_dis, part_agr];

const alidio_just = 
["Uma mobilidade urbana que tem como prioridade o transporte coletivo, contribui para um trânsito melhor e também uma cidade ambientalmente mais sustentável. Defendemos também a Tarifa Zero, que a mobilidade seja um meio de acesso de todos à toda cidade.",
    "Um município com investimento em educação é um município que se prepara para o futuro, diminui os índices de criminalidade e aposta na emancipação do sujeito.",
    "E é preciso se trabalhar em uma lógica de justiça tributária que não penalize os mais pobres, fazendo com que os impostos correspondam à renda.",
    "Um meio de mobilidade alternativo faz parte da ideia de uma cidade sustentável.",
    "É preciso ter cuidado com esse tipo de modificação para que os interesses das construtoras não se sobreponha a preservação ambiental e do patrimônio histórico da cidade.",
    "O imóvel deve cumprir a sua função social. Imóveis apenas para a especulação imobiliária enquanto existem famílias sem moradia é inadmissível.",
    "A retirada compulsória responde a uma política higienista e elitista. É preciso estabelecer um diálogo e alternativas apontadas por profissionais e as pessoas em situação de rua, observando e respeitando os indivíduos. ",
    "A implementação deve ser técnica e responder à uma demanda real.",
    "O fomento a cultura deve ser prioridade em um governo, criando condições para os fazedores de cultura e também aperfeiçoando seus aparelhos.",
    "É importante para a valorização da nossa história e também para o comércio local, mas ainda não está claro a quais interesses podem servir. Deve ser voltado para a comunidade, e não um espaço que se reduza a iniciativa privada com acessos restritos.",
    "O respeito à pessoa humana e a dignidade, assim como todos os direitos assegurados pela constituição devem ser respeitados. Ninguém está acima ou abaixo da lei.",
    "Uma lei ineficaz e que aumenta a possibilidade de perseguição contra a população jovem, negra e periférica. É preciso se rediscutir essa lei, observando locais que devem ser preservados e locais que permitam uma maior circulação.",
    "É um governo que só olha o centro e apenas em ano eleitoral.",
    "As áreas devem ser regularizadas e o município tem que dar as condições para o direito a moradia.",
    "O município deve ser parte da organização, mas sem tirar a autonomia das entidades organizadoras."

];
const moacir_just = 
[
    "[não justificou]",
    "[não justificou]",
    "[não justificou]",
    "[não justificou]",
    "[não justificou]",
    "[não justificou]",
    "[não justificou]",
    "[não justificou]",
    "[não justificou]",
    "[não justificou]",
    "[não justificou]",
    "[não justificou]",
    "[não justificou]",
    "[não justificou]",
    "[não justificou]"
];

const burmann_just = 
["Sem dúvidas - tendo um transporte coletivo abrangente e eficaz, as pessoas vão preferir deixar seus carros em casa. Transporte público de qualidade melhora a mobilidade, a economia e o ambiente.", 
    "Sou um defensor da educação - gestão se faz com planejamento e planejamento pressupõe definir prioridades. A educação é prioridade. A educação integral, desde a infantil (0-6 anos), até o 9º ano projeta uma escola onde as crianças e jovens passem o dia inteiro, em segurança, aprendendo e se desenvolvendo. É necessário investir em programa de valorização e qualificação para todos os profissionais da educação, porque a escola não é feita só de paredes, mas de pessoas que se dedicam todos os dias para formar nossos jovens. Porque quem faz a educação é toda a comunidade escolar. Juntos, vamos transformar Santa Maria pela educação!", 
    "O contribuinte pagador de impostos, ou seja, toda a população, empresários e consumidores (desde aquele que compra um pão ou um apartamento), espera que seus impostos retornem em forma de serviço público eficiente em ruas, iluminação, saúde, segurança e educação, principalmente. Mas é imprescindível que as contas publicas estejam ajustadas, e, portanto, é preciso adotar medidas que não onerem ainda mais as empresas e o consumidor - isto se faz com gestão competente. Sei fazer!",
    "As ciclovias, desde que bem planejadas, são importantíssimas pelos seus impactos na mobilidade, na saúde e no meio ambiente. É necessário ampliar a oferta de ciclovias que liguem todas as regiões da cidade. Imprescindível que a ligação da faixa nova com Camobi contemple faixas exclusivas pra bicicletas e ônibus.",
    "Absolutamente não - precisamos planejar a expansão urbana de Santa Maria, que já excedeu seus limites de infraestrutura nas áreas centrais e caminha para a saturação nos bairros. Novos Bairros planejados e de acordo com um Plano Diretor que contemple a sustentabilidade e bem-estar da população, ou no mínimo, fazer cumprir o que já existe em termos plano de urbanização. ",
    "A Prefeitura deve criar incentivos para que estes imóveis, inclusive os seus próprios, passem a se integrar à estrutura urbana que Santa Maria precisa ver renovada, sustentável e acolhedora. Usar os limites legais e de diálogo para dar a estes imóveis a possibilidade de desempenharem um papel social na habitação, na arquitetura e na beleza da cidade.",
    "Absurdo isto! A Secretaria de Assistência Social precisa fazer um trabalho sério e responsável para acolher estas pessoas, que já somam números assustadores. Sem um diagnóstico preciso, não é possível fazer qualquer política humanizadora para esta população.",
    "São necessários, mas muito menos arrecadadora e muito mais educadora. A velocidade nas vias urbanas precisa de um controle eficaz, mas a educação para o trânsito é peça fundamental na oferta de segurança às pessoas.",
    "Totalmente de acordo. A cultura precisa estar ao alcance de todos, e ser feita por todos, em todos os cantos de Santa Maria. Precisamos dar espaço e oportunidade para os muitos talentos locais. É necessário descentralizar a cultura em Santa Maria, levando eventos, oficinas e exposições para todos os bairros, especialmente para as periferias. Imagine poder participar de um festival de música ou teatro na sua própria comunidade, sem precisar ir ao centro da cidade. Essa é a Santa Maria que queremos construir, onde a cultura é para todos e está em todos os lugares. Cultura é inclusão e é transformação. Precisa estar em cada esquina de Santa Maria, porque todos têm direito a ela!",
    "Todo o investimento na melhoria da nossa infraestrutura é sempre bem vindo, especialmente se tratando de patrimônio histórico voltado ao bem estar e ao desenvolvimento do município e seu povo, mas a gestão deve estabelecer prioridades na saúde, na segurança e na educação.",
    "As duas premissas, que tem respaldo na lei, precisam andar juntas. Se pensarmos no médio e longo prazo, baixar os índices de criminalidade e violação dos direitos humanos de todas a pessoas só tem uma saída: é pela educação que muda a cultura de uma comunidade, onde o respeito à vida das pessoas esteja sempre a frente.",
    "Foi. O consumo de álcool e outras drogas, especialmente em ambientes públicos abertos, deve ser desestimulado e deve estar sob regramento rígido.",
    "Totalmente de acordo. Vivemos um verdadeiro “apartheid” em muitas das comunidades mais afastadas do centro. O município precisa urgentemente voltar seus olhos, atenção e ações pra estas comunidades. Parece que foi criado um cordão de isolamento do centro em relação aos bairros, por isso defendo a criação de múltiplos centros, que aproximem a população da cidade como um todo e lhes ofereçam condições dignas de vida e convivência.",
    "A Prefeitura precisa, também de forma urgente, cuidar das pessoas em áreas de risco e em áreas de ocupação irregular. A maioria delas está lá por falta de opção e de apoio do poder público que nunca se preocupou verdadeiramente com elas. É necessário planejar bairros, com ruas pavimentadas, água, energia, internet, saúde educação e transporte público, financiados pelo poder público como opção de moradia digna e segura.",
    "Os valores envolvidos foram muito elevados, especialmente, considerando que há tantas prioridades a atender. Nossas ruas, no centro buracos, nos bairros, sem pavimento, sem iluminação, esgoto, a céu aberto, escolas precisando de obras e saúde sem equipes suficientes - o dinheiro público escasso precisa ser tratado com responsabilidade - gestão é estabelecer prioridades. Importante ter eventos que acolham nossos estudantes, mas por que não estabelecer aí, também, as parcerias público-privadas? Este é um dos eventos que precisa ser auto-sustentável - sem dinheiro público."
];

const riesgo_just = 
["Vamos revitalizar as principais paradas de ônibus da cidade, para que contem com iluminação adequada e sirvam de proteção da chuva, garantindo dignidade para quem utiliza o transporte público. A melhoria da infraestrutura viária beneficia tanto o transporte coletivo como o particular. Vamos licitar o transporte coletivo, de modo a garantir a qualidade, disponibilidade e eficiência, exigindo o cumprimento de metas quantitativas e qualitativas.",
    "A educação é uma área fundamental para o município. Devemos investir com responsabilidade, priorizando a educação básica, que é a principal responsabilidade do município, e as creches, que fazem tanta falta para as famílias. Mas precisamos também garantir uma agenda séria para a estrutura de nossas escolas, as atividades de turno inverso e o turno integral. E faremos isso.",
    "Nos comprometemos a não aumentar impostos e a revisar as taxas municipais, priorizando a autorregularização fiscal. A tributação brasileira é altíssima e o retorno à população é baixo, penalizando os empreendedores, autônomos e demais trabalhadores, um verdadeiro obstáculo ao desenvolvimento econômico e social. Infelizmente a maior parte do imposto que pagamos vai para Brasília, e apenas um pequeno percentual fica para a cidade.",
    "Vamos ampliar a ciclovia e trabalharemos para que tenhamos estrutura para o uso de bicicletas e patinetes eletrônicos para o deslocamento urbano em Santa Maria, integrando a mobilidade, fomentando o turismo, a sustentabilidade e o estilo de vida saudável da população santa-mariense.",
    "Acreditamos que a concentração da população nas regiões centrais da cidade é positivo para questões como emprego e mobilidade urbana, além do acesso à saúde e segurança, tendo em vista a redução de custo com infraestrutura centralizada. Vamos incentivar as fachadas ativas e o zoneamento misto, para garantir uma interação dinâmica da população com o espaço público e o fomento à economia local, trazendo vitalidade a Santa Maria.",
    "Defendemos a propriedade privada e somos contra a desapropriação de imóveis. Mas iremos incentivar o uso residencial e comercial de imóveis urbanos, visando ampliar as fachadas ativas e o zoneamento misto, por meio da revisão do Plano Diretor. Temos o compromisso de garantir o bom uso dos imóveis da prefeitura que estão abandonados ou subutilizados.",
    "Nossa abordagem às pessoas em situação de rua prioriza o respeito à dignidade humana, ampliação e fortalecimento dos programas de atendimento junto aos CRAS e o CREAS, com o objetivo de tirar as pessoas da situação de rua. Para isso, é preciso fortalecer as instituições que trabalham com o tratamento de dependentes químicos e ter um plano de longo prazo para a preservação da juventude, impedindo que cheguem às ruas.",
    "Os radares têm sido utilizados em Santa Maria com o objetivo de aumentar a arrecadação da Prefeitura. Muitas vezes estão posicionados em áreas inadequadas, como se o objetivo fosse mesmo enganar o motorista. Não acreditamos no uso de radares como fonte de arrecadação, mas como uma forma de proteger os pedestres, de forma transparente, visível e adequada, tanto a pedestres como a motoristas.",
    "Teremos de volta os grandes eventos culturais de Santa Maria. A Tertúlia, a Semana Farroupilha e as atividades ligadas ao cultivo das tradições, como festivais de dança e encontros de juventude, serão valorizados e incentivados. Mas também traremos de volta o carnaval de rua, que será um dos maiores, se não o maior carnaval de rua do interior do Estado, realizado em pareceria com empresas privadas. Da mesma forma, a volta do festival de Balonismo também será incentivada. Acreditamos que cultura é uma parte essencial do desenvolvimento social, econômico e turístico da cidade. Por isso, iremos criar um cronograma cultural oficial, para divulgar festivais, exposições e feiras, e colaborar na infraestrutura para realização e divulgação de ações culturais.",
    "A revitalização dos espaços públicos de Santa Maria é uma política fundamental para promover o desenvolvimento urbano e estimular a economia local. Mas há muito a ser feito. O cuidado com as calçadas, por exemplo, não existe. A forma como a revitalização foi conduzida apresenta pontos que precisam ser revistos, tanto em termos de gestão quanto de resultado final. A reforma do calçadão, por exemplo, foi marcada por atrasos significativos que impactaram diretamente o comércio local, e só foi concluída devido à pressão constante dos lojistas, e ainda com um resultado estético que não alcançou o impacto esperado. Precisamos transformar Santa Maria com carinho, eficiência e foco em bons resultados.",
    "A criminalidade e a insegurança vêm aumentando em Santa Maria, e precisamos agir urgentemente. Para isso, vamos criar a Secretaria da Segurança Pública para integrar os órgãos de segurança e intensificar o combate ao crime, além de realizar o Concurso da Guarda Municipal. Nosso grande objetivo deve ser proteger as verdadeiras vítimas dos crimes, preservando os direitos fundamentais.",
    "É preciso ter bom senso para diferenciar o simples consumo de bebidas alcoólicas das condutas inadequadas e ilícitas. Mas a manutenção da ordem no período noturno depende prioritariamente de medidas como iluminação pública e integração dos órgãos de segurança pública. A algazarra, vandalismo, atentado ao pudor e perturbação do sossego alheio devem ser fiscalizados e punidos, principalmente à noite.",
    "Os distritos da cidade foram deixados de lado, a máquina passa uma vez ao ano, e sem as subprefeituras distritais, a participação nas decisões municipais ficou em segundo plano. Os demais bairros também estão nessa situação, com muitos locais praticamente intransitáveis. Ocorre, ainda, que a Prefeitura conseguiu tornar o centro igual a tais bairros, sem estrutura, cheio de buracos e vandalizado. É fundamental incluir a população dos bairros periféricos no processo decisório, promovendo uma participação ativa da comunidade.",
    "Invasão criminosa será tratada como tal e pessoas que invadirem imóveis que possuam dono, especialmente mediante vandalismo e violência, serão retiradas e punidas de acordo com a lei. É urgente realizar processo de regularização fundiária Santa Maria, dando dignidade àqueles que dedicaram sua vida a um imóvel em que moram com sua família. Vamos realizar políticas habitacionais que incentivem a reforma de imóveis desocupados e promovam o adensamento urbano, aumentando a oferta de moradias em regiões centrais.",
    "A retirada da Calourada na Praça Saldanha Marinho, embora tenha gerado controvérsias, teve um impacto majoritariamente positivo para a população que mora na região central da cidade. É preciso avaliar de forma técnica se esse investimento público está tendo retorno para a população santa-mariense, ou se apenas gerando ônus, já que envolve um investimento alto da prefeitura em uma área não essencial."
];

const roberta_just = 
[
    "Neutro porque Santa Maria precisa de uma gestão que acomode com equilíbrio seus meios de transporte, de modo que haja fluidez, organização e sustentabilidade em meios públicos e privados",
    "Concordo totalmente até porque já há esta prioridade imposta aos estados e municípios pela Constituição Federal, que determina que 25% das receitas devem ser aplicadas na manutenção e desenvolvimento do ensino, e também há o fator novo Fundeb.",
    "Defendo o livre mercado, a redução de impostos, corte de gastos desnecessários, desburocratização da máquina pública e simplificação de processos, principalmente visando aqueles que geram ou pretendem gerar emprego, renda e desenvolvimento. Concordo parcialmente porque, evidentemente, qualquer gestor com estas ideias, mas também com senso de responsabilidade, entende que, caso a consequência da redução tributária seja o comprometimento de prestação de serviços públicos necessários à população, isso não pode ocorrer. É preciso reduzir impostos com lastro econômico, responsabilidade fiscal e sem comprometer serviços, sobretudo os básicos.",
    "[não justificou]",
    "Concordo totalmente, em pese o impeditivo para a construção de prédios maiores seja a infraestrutura do solo da cidade, que não comporta este tipo de engenharia, e não em razão do plano diretor.",
    "Concordo totalmente, pois é necessária uma política urgente de estímulo para que esses imóveis abandonados não sigam trazendo prejuízos, como a frequente precariedade das calçadas, e principalmente porque esses imóveis acabam sendo utilizados para os mais variados atos ilícitos.",
    "[não justificou]",
    "É necessário um estudo técnico na cidade a fim de saber quais radares são mais efetivos na redução de acidentes de trânsito.",
    "com a condição de que sejam ações essencialmente culturais, e não com pautas paralelas ao objetivo do incentivo.",
    "O investimento na revitalização, não apenas do centro, mas de toda a infraestrutura da cidade, é urgente e extremamente necessário, mas não da forma pela qual a atual gestão promove estas ações. Obras extremamente elementares, com duração muito além do previsto e custo altíssimo. É preciso de obras de qualidade, dentro do prazo e com o menor custo possível para a administração, tudo ao contrário do que ocorre hoje.",
    "Não há espaço na democracia para que os direito humanos sejam violados. Contudo, o combate ao crime deve ser rigoroso, com penas compatíveis com a gravidade do crime e, da mesma forma que não há espaço para violação de direitos humanos, também não pode haver de maneira nenhuma espaço para a impunidade.",
    "Com fiscalizações intensas e constantes por parte das forças de segurança pública, o problema da perturbação do sossego seria facilmente resolvido sem que as liberdades dos cidadão fossem afetadas.",
    "[não justificou]",
    "É preciso que haja uma política habitacional forte e estratégica nesse sentido, a fim de proporcionar a alocação de pessoas de áreas de risco de vida e também daquelas áreas sem as mínimas condições de dignidade humana.",
    "Dadas as dimensões e características do evento 'Calourada', a prefeitura deve sim se envolver e promover a segurança e estrutura do evento. Porém, hoje, o Poder Público tem gastos exorbitantes, deslocou o evento para a GARE, onde muitos criminosos frequentam o mesmo espaço que os estudantes, não há controle de venda de bebida alcoólica para menores de idade, dentre outros problemas. É preciso de um ambiente seguro, estrutura e segurança, de preferência em parceria com a iniciativa privada para que os gastos públicos sejam amenizados."
];

const decimo_just = 
[
    "O incentivo ao uso do transporte coletivo como meio de locomoção é uma maneira de reduzirmos o trânsito de veículos na cidade. Sabendo disso, estamos concluindo o processo de licitação do transporte público de Santa Maria para melhorar o serviço prestado à população. Também não podemos ignorar que o transporte via aplicativos cresceu após a pandemia, sobretudo entre os jovens. Portanto é necessário organizar e regularizar o serviço no Município.",
    "Avançamos muito na Educação, com a construção de 10 novas escolas e uniformes para todos os 20 mil alunos da Rede Municipal de Ensino. Esses investimentos devem continuar na próxima gestão, avançando para as escolas de Tempo Integral e a ampliação até as 19h do horário das creches. O município investe 26,6% dos recursos na Educação, acima do que é obrigatório, que é 25%.",
    "Compreendemos que a cobrança dos impostos se faz necessária para que sejam mantidos os serviços à população. A prioridade do poder público é obter recursos para otimizar os serviços oferecidos nas áreas da Saúde, Educação e Segurança.",
    "As novas grandes obras de infraestrutura estão sendo executadas com ciclovias para o uso de bicicletas, como por exemplo a Perimetral Dom Ivo Lorscheiter e a Perimetral Sul-Leste. ",
    "A partir de janeiro de 2025, a nossa proposta é que Instituto de Planejamento (Iplan) comece a elaborar o Novo Plano Diretor de Santa Maria, que deve apontar quais as necessidades e gargalos do município em relação a este tema. O estudo dará elementos para balizar um projeto para Santa Maria nos próximos 50 anos. Da mesma forma, o tema merece uma atenção especial em relação às áreas de encostas e áreas de preservação permanente.",
    "A taxa cobrada aos imóveis é compatível com a área do imóvel, não havendo espaço para interferência da Administração Municipal quanto à utilização do espaço. Ainda assim, cabe ao Poder Público realizar ações que evitem o abandono de imóveis.",
    "Todo trabalho feito com as pessoas em situação de rua é realizado com muito diálogo. As iniciativas realizadas devem levar em consideração a vontade destas pessoas. Porém, vamos criar o Centro de Referência Especializado para a População em Situação de Rua (Centro POP), onde serão oferecidos atendimentos, oficinas e atividades de convivência para pessoas em situação de rua.",
    "A fiscalização eletrônica é uma forma de combater o excesso de velocidade no trânsito. Implementamos no governo as escolinhas de trânsito, com o objetivo de conscientizar crianças, adolescentes e adultos. Com isso, reduzimos o número de acidentes em Santa Maria.",
    "No nosso município, a cultura é valorizada grandemente, o que reflete no incentivo financeiros a estas ações. Nossa Lei de Incentivo à Cultura (LIC) é uma das maiores do Estado, inclusive com edital já lançado para 2025 (serão R$ 2,1 milhão dividido entre as propostas vencedoras). Também valorizamos eventos culturais, como o Viva o Natal, a Tertúlia e o Festival do Xis, entre outros.",
    "A revitalização do Centro-Histórico de Santa Maria, atrelada à criação do Distrito Criativo Centro-Gare, trouxe uma série de benefícios para a cidade. Passamos a ter um centro mais vivo, com excelentes espaços de lazer, comércio e serviços efervescidos, incentivo à inovação e à economia criativa. Por isso, foi a nossa gestão que revitalizou a Praça Saldanha Marinho, o Calçadão e entregará em outubro a Gare totalmente restaurada. Ainda, começaremos a revitalização da Casa de Cultura e, em breve, da SUCV.",
    "O combate ao crime e os direitos humanos não podem ser entendidos como antagonistas. Avançamos muito em segurança, com a criação do Centro Integrado de Operações de Segurança Pública (Ciosp), com mais de 1,5 mil câmeras de videomonitoramento. Criaremos a Secretaria de Segurança Pública e implementaremos o Tempo Integral nas escolas, garantindo que as crianças e o adolescentes estejam nas escolas e em segurança.",
    "A medida já foi compreendida pela população, o que se deve ao trabalho de conscientização sobre a lei, antes das autuações serem feitas. Com mais de um ano da lei plenamente em vigor, não foram constatados problemas em grande escala, o que demonstra a compreensão da comunidade quanto a lei.",
    "Ao longo da nossa gestão, realizamos inúmeras ações culturais, educativas e obras de Infraestrutura. Na região Oeste, construímos uma nova Estratégia Saúde da Família (ESF) e uma nova Escola de Educação Infantil. Na região Sul, estamos construindo uma Unidade Básica de Saúde (UBS) e ainda faremos uma sede do Centro de Referência de Assistência Social (CRAS) e uma sede do Conselho Tutelar. No Norte, entregamos a UBS Estação dos Ventos, melhoramos as atividades do Clube 21 de abril e transformaremos a Unidade de Pronto-Atendimento (UPA) 24 horas em uma UPA Regional. Para a região Leste, entregamos uma nova creche e construiremos uma unidade de Pronto-atendimento. Além disso, todas as regiões serão atendidas pelas Patrulhas de Zeladorias nos Bairros, medida que vai garantir a manutenção dos espaços públicos de Santa Maria.",
    "O município é responsável por fiscalizar e evitar ocupações em áreas públicas da cidade, sobretudo em áreas de risco. Paralelamente a isso, também é papel do Poder Público avançar na regularização fundiária das áreas que podem ser habitadas pela população. ",
    "Com a realização da Calourada na Gare conseguimos solucionar o problema antigo de pertubação de sossego da população na Praça Saturnino de Brito. Mas, o principal é que conseguimos garantir a segurança dos jovens que vão até o evento. O trabalho conjunto de diferentes forças de segurança e o videomonitoramento em tempo real são um dos fatores para que este sucesso fosse alcançado."
];
const valdeci_just = 
[
    "O transporte coletivo precisa ter toda a atenção e investimento necessários pelo poder público, pois se trata de mobilidade urbana que envolve um contingente enorme de pessoas que dele depende para as mais diferentes e fundamentais atividades, como trabalho, estudo, ida ao médico, lazer, entre outras. Dito isso, não significa que o transporte particular, que também é um direito, deva ser deixado de lado ou mesmo menosprezado. O que é preciso ser feito pela prefeitura é garantir a qualidade, linhas e horários suficientes do transporte público, dando a ele a prioridade quando esta se faz necessária. É preciso ter em mente, também, que o transporte público, por seu conceito de amplitude de atendimento, acaba por poluir menos o meio ambiente e causar menos engarrafamento, uma vez que transporta um número grande de pessoas de cada vez.",
    "Acredito que a Educação deva, sim, ser priorizada no orçamento, pelo impacto transformador que possui, mas não podemos relegar áreas extremamente essenciais também, como a saúde, infraestrutura, mobilidade urbana, cultura, meio ambiente, assistência social, segurança, etc. Não podemos cair no falso dilema de que temos de escolher apenas um lado bem suprido e abrir mão do atendimento de outras necessidades e demandas das pessoas. Uma coisa não exclui a outra. ",
    "Toda redução de impostos é sempre bem-vinda e pode ser buscada desde que não comprometa as finanças públicas e o cumprimento das obrigações da prefeitura em termos de serviços públicos que precisam e devem ser ofertados à população. ",
    "Quanto mais investirmos em formas alternativas de locomoção e mobilidade urbana, melhor. Ganha o meio ambiente, ganha o trânsito, ganham as pessoas. E Santa Maria tem muito para avançar neste quesito. ",
    "O desenvolvimento urbano deve ser pensado de forma ampla e considerando os diferentes aspectos que envolvem a vida em sociedade. Simplesmente flexibilizar a lei e sair levantando grandes empreendimentos cidade afora, sem critérios lógicos, vai contra os principais estudos urbanísticos modernos que buscam envolver qualidade de vida, mobilidade e serviços em uma cidade. Qualquer discussão neste sentido tem de ser feita de forma democrática e transparente com toda a sociedade, pois envolve impacto de vizinhança como alteração solar, de ventos, sobrecarga em redes de esgoto e aumento no fluxo viário, entre outras.",
    "Manter imóveis em condições de abandono ou subutilizados joga contra o interesse da maioria das pessoas e acaba afetando o próprio desenvolvimento urbano de uma cidade. Mas antes de qualquer medida mais drástica deve-se buscar soluções via diálogo ou até mesmo algum tipo de incentivo, que torne o uso ou a sua revitalização mais atraente do ponto de vista econômico. ",
    'Ninguém mora na rua porque quer ou gosta. Estamos falando de seres humanos, de vidas. Esse tipo de "faxina social", além de trazer junto a retirada de direitos e injustiça, vai contra tudo o que penso no que diz respeito a relações humanas, a trato social, democracia, convivência. É preciso buscar e oferecer alternativas viáveis que atendam aos interesses e necessidades de quem vive em situação de rua, propostas em que essas pessoas se enxerguem como sujeitos e sejam vistos como tal.',
    "De qualquer forma, ela não pode ser a única ferramenta a ser utilizada e nunca pode ter caráter arrecadatório. Redutores de velocidade, fiscalização de trânsito efetiva e eficaz e medidas educativas precisam caminhar lado a lado.",
    'A Cultura faz parte da cidade, é a alma do que costumamos chamar de coletivo, mesmo ele sendo formado por diferentes gostos ou desejos. Uma cidade viva é uma cidade em que a cultura é valorizada, respeitada, protegida, incentivada. Assim como ocorre em grandes centros urbanos nacionais e internacionais (e em pequenos e médios também), ao incentivar e apoiar ações culturais, o município favorece também a classe artística local, economia da cidade e a geração de trabalho e renda. A cadeia produtiva da chamada "economia criativa" é imensa e envolve múltiplos setores.',
    "Tive o orgulho de, como prefeito de Santa Maria, entre 2001 e 2008, ter iniciado esse processo, a partir, entre outras ações, da compra do prédio do Cine Independência e o lançamento do Projeto do Shopping Popular. Essa iniciativa viabilizou a transferência dos trabalhadores do comércio informal do canteiro da Avenida Rio Branco para um lugar muito mais adequado e digno. Infelizmente, a qualidade das recentes obras realizadas no Calçadão e na Saldanha Marinha deixa a desejar e as reclamações da população são frequentes. Nós vamos dar sequência a esse trabalho, seguindo com o projeto do Distrito Criativo Centro-Gare e viabilizando a reforma da Casa de Cultura, que lamentavelmente está fechada há mais de 10 anos. ",
    "Não podemos pensar a segurança pública de forma binária, reducionista, simplista. Reitero: uma coisa não exclui a outra. Quando se pensa assim se está a um passo da barbárie. O combate ao crime deve ser firme, 24 horas por dia, com todos, independentemente da classe social a que pertence, respondendo perante a lei por seus atos. Combate ao crime se faz com investimento em recursos humanos, com treinamento, inteligência e em parceria entre as forças de segurança municipal, estadual e até mesmo federal. O combate ao crime também se faz levando o estado a oferecer serviços públicos, criando empregos, gerando renda, apostando na educação e na formação dos nossos jovens.",
    "É uma medida preventiva e protetiva à vida das pessoas. Creio que muitas tragédias e casos de perturbação do sossego público, de criminalidade e de violência são evitados a partir dessa ação. ",
    "Os serviços públicos oferecidos às populações das nossas periferias estão muito abaixo do que os oferecidos, por exemplo, no centro da cidade e em bairros de classe média e média-alta. Nas periferias, as pessoas continuam enfrentando problemas com ruas sem calçamento, com esgoto a céu aberto.",
    'Em áreas de risco, devem ser retiradas e realocadas a partir das políticas habitacionais desenvolvidas pelo município. Todo processo de desocupação deve levar em conta a questão social em que ele está inserido. Não me parece justo o poder público simplesmente desalojar famílias inteiras sem apresentar uma alternativa justa e viável. Quando prefeito, estabelecemos um diálogo democrático e transparente com inúmeras comunidades neste sentido e posso afirmar, com 100% de certeza, que o fizemos sempre com o intuito de equalizar os interesses do município, o cumprimento de decisões judiciais e o direito à moradia que, inclusive, consta em nossa Constituição Federal. A regularização fundiária, inclusive, deve ser uma política pública permanente.<br><br>Os municípios precisam fazer a revisão das leis vigentes em face da Lei Federal nº 13.465/2017 que definiu o mecanismo de regularização denominado Regularização Fundiária Urbana (REURB), que é o procedimento por meio do qual se garante o direito à moradia daqueles que residem em assentamentos informais localizados nas zonas urbanas ou de expansão urbana. A REURB consiste em um conjunto de medidas jurídicas, urbanísticas, ambientais e sociais destinadas à incorporação dos núcleos urbanos informais ao ordenamento territorial urbano e à titulação de seus ocupantes. Evidentemente que a propriedade privada que cumpra a sua função social deve ser preservada e assegurada.',
    "A nossa juventude carece de espaços de lazer e entretenimento. Se formos eleitos, vamos manter, qualificar e democratizar mais essa ação. A juventude que vive na periferia também precisa dispor de políticas e iniciativas similares e nós pretendemos também oportunizar isso. "
];

function has_answered_all(user_answers) {
    return (user_answers.length == NUMBER_QUESTIONS) 
}

class Candidate
{
    constructor(answers, strings, parties, colors, points, justifications, img)
    {
        this.answers = answers;
        this.strings = strings;
        this.parties = parties;
        this.colors = colors;
        this.points = points;
        this.justifications = justifications;
        this.img = img
    }

}

let candidates = []
async function calculate_results()
{
    candidates = []
    candidates.push(new Candidate(alidio_answers, "Alidio da Luz", "PSOL", ["#fce186", "#fad457", "#f0c53a"], 0, alidio_just, "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/2045202024/210002149679/88412"))
    //candidates.push(new Candidate(moacir_answers, "Dr Moacir", "PRD", ["#b0b3f7", "#7c82fc", "#373fdb"], 0, moacir_just, "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/2045202024/210002341283/88412"))
    candidates.push(new Candidate(burmann_answers, "Professor Burmann", "PDT", ["#f59ab7", "#f06e97", "#cc3162"], 0, burmann_just, "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/2045202024/210002148504/88412"))
    candidates.push(new Candidate(riesgo_answers, "Riesgo", "NOVO", ["#edb88a", "#f0984d", "#e07214"], 0, riesgo_just, "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/2045202024/210002188556/88412"))
    candidates.push(new Candidate(roberta_answers, "Roberta Leitão", "PL", ["#94f294", "#59d459", "#0c780c"], 0, roberta_just, "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/2045202024/210001995616/88412"))
    candidates.push(new Candidate(decimo_answers, "Rodrigo Decimo", "PSDB", ["#90c9f0", "#65b7f0", "#167ec7"], 0, decimo_just, "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/2045202024/210002189747/88412"))
    candidates.push(new Candidate(valdeci_answers, "Valdeci Oliveira", "PT", ["#fc9d9d", "#f06060", "#c91010"], 0, valdeci_just, "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/2045202024/210001964902/88412"))


    let user_answers = get_user_answers();
    if (!has_answered_all(user_answers)) 
    {
        alert("Você deve responder a todas as perguntas antes de terminar o teste.");
        return;
    }

    for (let i = 0; i < candidates.length; i++) 
    {
        for (let j = 0; j < user_answers.length; j++) 
        {
            candidates[i].points += calculate_points(candidates[i].answers[j], user_answers[j]);
        }
    }

    candidates.sort((a, b) => b.points - a.points);

    await suspense_time();
    display_ranking(candidates);
    generate_answer_boxes(candidates);
    generate_review_boxes(candidates, user_answers)

    set_mobile_link();
}

function calculate_points(answer_A, answer_B)
{
    let diff = Math.abs(answer_A - answer_B);
    return (5-diff-1);
}

function get_user_answers()
{
    let user_answers = [];
    let request_id;

    for (let i = 0; i < 15; i++) 
    {
        if (i+1 < 10) 
        {
            request_id = "question_0" + (i+1);
        }

        else
        {
            request_id = "question_" + (i+1);
        }

        let question = document.getElementById(request_id);
        let answers = question.getElementsByClassName("checkbox_option");

        for (let k = 0; k < answers.length; k++) 
        {
            if (answers[k].checked) 
            {
                let specific_id = answers[k].id;
                
                for (let string_index = 0; string_index < 5; string_index++) {
                    
                    if (specific_id.includes(answer_indexes[string_index])) 
                    {
                        user_answers.push(string_index);
                        break;
                    }
                    
                }
            }
        }
    }

    return user_answers;
}

async function suspense_time()
{
    document.getElementById("questionary").style.display = "none";
    document.getElementById("fake_wait").style.display = "block";

    await new Promise(r => setTimeout(r, 1000));

    document.getElementById("calculating_message").innerHTML = "Comparando candidatos...";
    document.getElementById("progress_bar").style.width = "40%";

    await new Promise(r => setTimeout(r, 1000));

    document.getElementById("progress_bar").style.width = "60%";

    await new Promise(r => setTimeout(r, 1000));

    document.getElementById("calculating_message").innerHTML = "Somando pontuações...";
    document.getElementById("progress_bar").style.width = "90%"

    await new Promise(r => setTimeout(r, 1500));

    document.getElementById("progress_bar").style.width = "99%"

    await new Promise(r => setTimeout(r, 500));

    document.getElementById("fake_wait").style.display = "none";
}

function index_max_array(arr)
{
    let max = 0
    let best_index = 0;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > max) {
            max = arr[index];
            best_index = index;
        }
        
    }

    return best_index;
}

function display_ranking(candidates)
{
    document.getElementById("winning_candidate").innerHTML = candidates[0].strings;
    document.getElementById("winning_candidate").style.color = candidates[0].colors[2];
    document.getElementById("winning_party").innerHTML = candidates[0].parties;
    document.getElementById("winner_percent").innerHTML = get_affinity_percentage(candidates, 0);
    document.getElementById("winning_picture").src = candidates[0].img;
    document.getElementById("winning_picture").style.borderColor = candidates[0].colors[2];

    document.getElementById("desktop_sharing").style.backgroundColor = candidates[0].colors[2];
    document.getElementById("desktop_sharing").style.borderColor = candidates[0].colors[1];

    document.getElementById("mobile_sharing").style.backgroundColor = candidates[0].colors[2];
    document.getElementById("mobile_sharing").style.borderColor = candidates[0].colors[1];

    if (candidates[0].strings == "Roberta Leitão")
    {
        document.getElementById("grand_winning_text").innerHTML = "A candidata que mais se encaixa com você é"
    }
    
    document.getElementById("results").style.display = "block";
}

function get_gendered_article(name)
{
    switch (name) 
    {
        case "Roberta Leitão":
            return "a";
    
        default:
            return "o";
    }

}

function get_affinity_percentage(candidates, index)
{
    let percent = (candidates[index].points / (4*NUMBER_QUESTIONS))*100
    percent = Math.round(percent * 100) / 100;

    return percent;
}

function create_share_text(candidates)
{
    let winner_name = document.getElementById("winning_candidate").innerHTML;
    let text = "Acabei de fazer o Prefeitômetro e meu candidato deu " 
                + get_gendered_article(winner_name) 
                + " " + winner_name 
                + ", com " + get_affinity_percentage(candidates, 0) 
                + "% de afinidade."
                + " Quer ver qual mais se encaixa contigo? Faça o teste: prefeitometro.com";

    return text;
}

function copy_to_user_clipboard(text)
{
    navigator.clipboard.writeText(text);
    return;
}

function copy_share_link()
{
    let text = create_share_text(candidates);
    copy_to_user_clipboard(text);

    document.getElementById("desktop_sharing").className = "results_button copied_confirmation";
    document.getElementById("desktop_sharing").innerHTML = "<strong>Copiado!</strong>";

    return;
}

function set_mobile_link()
{
    let text = create_share_text(candidates);
    text = "whatsapp://send?text=" + text;

    document.getElementById("mobile_sharing").href = text;
}


function generate_answer_boxes(candidates)
{
    let box = document.getElementById("others_affinity")
    for (let i = 0; i < candidates.length; i++) {
        box.innerHTML += ('<div class="question_box mini" ' +
                    'style="margin-top:0px; margin-bottom:10px;' +
                    'background: ' + candidates[i].colors[0] + ';' +
                    'background: linear-gradient(90deg, ' + candidates[i].colors[0] + ' 50%, ' + candidates[i].colors[1] + ' 100%); border-color:' + candidates[i].colors[1] +';"' +
                    'id="rank' + i +'">' +
                    '<p class="rankname">' + (i+1) + ". " + candidates[i].strings + '<span style="font-family:Lato;font-size:small;color:#242424;white-space: pre;">' + "  " + candidates[i].parties + '</span>' +'</p>' +
                    '<p class="rankpercent">' + get_affinity_percentage(candidates, i).toFixed(0) + '%' + `</p>` +
                '</div>')
    }
}

function get_icon_tag(answer)
{
    switch (answer) {
        case full_dis:
            return `<img class="review_quick_img" src="./assets/cross.png">
                    <img class="review_quick_img" src="./assets/cross.png">`;

        case part_dis:
            return `<img class="review_quick_img" src="./assets/cross.png">`;

        case neutral:
            return `<img class="review_quick_img" src="./assets/black-circle.png">`;

        case part_agr:
            return `<img class="review_quick_img" src="./assets/done-tick.png">`;

        case full_agr:
            return `<img class="review_quick_img" src="./assets/done-tick.png">
                    <img class="review_quick_img" src="./assets/done-tick.png">`;
    }
}

function get_label_tag(answer)
{
    switch (answer) {
        case full_dis:
            return "Discordo totalmente";

        case part_dis:
            return "Discordo parcialmente";

        case neutral:
            return "Neutro";

        case part_agr:
            return "Concordo parcialmente";

        case full_agr:
            return "Concordo totalmente";
    }
}

function generate_review_boxes(candidates, user_answers)
{
    let box = document.getElementById("comparisons");
    box.innerHTML += "<hr style='margin-bottom:50px;margin-top:-15px;'>"
    for (let q = 0; q < NUMBER_QUESTIONS; q++) {
        let acc = "";

        // first we get and display the user's answer
        let string = `<div style="position:relative;">
        <p class="question_counter" style="left: 0px; top:-35px;">${q+1}/15</p>

        <p class="question_text">${question_strings[q]}</p>
        <div class="question_box mini" style="padding: 0; background-color:lightgray;">
            <div class="answer_review_quick" style="width:100%; border-radius:3px; padding-left:0; padding-right:0; margin-bottom:7px;">
                <p class="review_quick_name" style="font-size:large;"><span class="actual_name" style="font-size:larger;">você</span> marcou: </p>
                <div class="review_quick_container_img">
                    ${get_icon_tag(user_answers[q])}
                </div>
                <p class="review_quick_label">${get_label_tag(user_answers[q])}</p>
            </div>
        </div>`;

        acc += string;


        for (let c = 0; c < candidates.length; c++) 
        {
            string = `
            <div class="question_box mini" style="padding: 0; display: flex; background-color:${candidates[c].colors[0]}; border-color: ${candidates[c].colors[2]}; margin-bottom:7px;">
                <div class="answer_review_quick" style="background-color:${candidates[c].colors[1]}">
                    <p class="review_quick_name"><span class="actual_name">${candidates[c].strings}</span> marcou: </p>
                    <div class="review_quick_container_img">
                        ${get_icon_tag(candidates[c].answers[q])}

                    </div>
                    <p class="review_quick_label">${get_label_tag(candidates[c].answers[q])}</p>
                </div>
                <p class="explanation"><strong>Justificativa: </strong>${candidates[c].justifications[q]}</p>
            </div>
            `;

            acc += string;
        }

        acc += "</div>";
        if(q < 14)
        {
            acc += "<hr style='margin-bottom:50px; margin-top:50px;'>"
        }
        
        box.innerHTML += acc;
    }


}
