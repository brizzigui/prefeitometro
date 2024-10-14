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

const decimo_answers = [part_agr, full_agr, neutral, full_agr, neutral, part_dis, full_dis, full_agr, full_agr, full_agr, neutral, neutral, full_dis, part_agr, full_agr];
const valdeci_answers = [full_agr, part_agr, part_dis, full_agr, part_dis, part_agr, full_dis, full_agr, full_agr, part_agr, full_dis, full_agr, full_agr, part_dis, part_agr];

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
            return `<img class="review_quick_img" src="../assets/cross.png">
                    <img class="review_quick_img" src="../assets/cross.png">`;

        case part_dis:
            return `<img class="review_quick_img" src="../assets/cross.png">`;

        case neutral:
            return `<img class="review_quick_img" src="../assets/black-circle.png">`;

        case part_agr:
            return `<img class="review_quick_img" src="../assets/done-tick.png">`;

        case full_agr:
            return `<img class="review_quick_img" src="../assets/done-tick.png">
                    <img class="review_quick_img" src="../assets/done-tick.png">`;
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
