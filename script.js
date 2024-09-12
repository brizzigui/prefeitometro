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

const alidio_answers = [3, 2, 0, 4, 0, 3, 4, 1, 2, 4, 4, 2, 1, 4, 0];
const moacir_answers = [1, 1, 3, 0, 1, 0, 2, 2, 0, 4, 4, 4, 0, 1, 0];
const burmann_answers = [1, 3, 1, 0, 0, 4, 3, 0, 1, 2, 1, 1, 3, 3, 3];
const riesgo_answers = [4, 1, 3, 4, 0, 0, 3, 1, 4, 0, 3, 3, 3, 1, 4];
const roberta_answers = [0, 0, 1, 2, 2, 4, 1, 0, 0, 3, 3, 0, 2, 3, 4];
const decimo_answers = [2, 1, 4, 3, 1, 4, 2, 2, 0, 0, 3, 1, 1, 3, 4];
const valdeci_answers = [4, 1, 4, 1, 2, 1, 2, 4, 4, 1, 2, 4, 3, 4, 1];

const alidio_just = ["Lorem ipsum", "sit amet", "dolor"];
const moacir_just = ["Lorem ipsum", "sit amet", "dolor"];
const burmann_just = ["Lorem ipsum", "sit amet", "dolor"];
const riesgo_just = ["Lorem ipsum", "sit amet", "dolor"];
const roberta_just = ["Lorem ipsum", "sit amet", "dolor"];
const decimo_just = ["Lorem ipsum", "sit amet", "dolor"];
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

        acc += "</div><hr style='margin-bottom:50px; margin-top:50px;'>";
        box.innerHTML += acc;
    }


}
