/*
    Many of the arrays used to calculate
    affinity here are mere placeholders that
    must be altered when real answers
    are made available.
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
const moacir_answers = [1, 1, 3, 0, 1, 0, 2, 2, 0, 4, 4, 4, 0, 1, 0];
const burmann_answers = [1, 3, 1, 0, 0, 4, 3, 0, 1, 2, 1, 1, 3, 3, 3];
const riesgo_answers = [4, 1, 3, 4, 0, 0, 3, 1, 4, 0, 3, 3, 3, 1, 4];
const roberta_answers = [0, 0, 1, 2, 2, 4, 1, 0, 0, 3, 3, 0, 2, 3, 4];
const decimo_answers = [part_agr, full_agr, neutral, full_agr, neutral, part_dis, full_dis, full_agr, full_agr, full_agr, neutral, neutral, full_dis, part_agr, full_agr];
const valdeci_answers = [4, 1, 4, 1, 2, 1, 2, 4, 4, 1, 2, 4, 3, 4, 1];

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
const moacir_just = ["Lorem ipsum", "sit amet", "dolor"];
const burmann_just = ["Lorem ipsum", "sit amet", "dolor"];
const riesgo_just = ["Lorem ipsum", "sit amet", "dolor"];
const roberta_just = ["Lorem ipsum", "sit amet", "dolor"];
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
const valdeci_just = ["Lorem ipsum", "sit amet", "dolor"];

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
    candidates.push(new Candidate(moacir_answers, "Dr Moacir", "PRD", ["#b0b3f7", "#7c82fc", "#373fdb"], 0, moacir_just, "https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/2045202024/210002341283/88412"))
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
                + " Quer ver qual mais se encaixa contigo? Faça o teste: prefeitometro.brizzigui.com";

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
        console.log(candidates[i].colors[1]);
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
