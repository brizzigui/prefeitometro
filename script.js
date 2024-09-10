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

const NUMBER_QUESTIONS = 3;

let affinity_points = [0, 0, 0];
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

const alidio_answers = [part_dis, part_agr, part_agr];
const moacir_answers = [full_agr, full_dis, full_dis];
const burmann_answers = [full_agr, part_dis, full_agr];
const riesgo_answers = [part_dis, part_agr, part_agr];
const roberta_answers = [full_agr, full_dis, full_dis];
const decimo_answers = [full_agr, part_dis, full_agr];
const valdeci_answers = [full_agr, part_dis, full_agr];

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

async function calculate_results()
{
    const candidate_answers = [alidio_answers, moacir_answers, burmann_answers, riesgo_answers, roberta_answers, decimo_answers, valdeci_answers];
    const candidate_strings = ["Alidio da Luz", "Dr Moacir", "Professor Burmann", "Riesgo", "Roberta Leitão", "Rodrigo Decimo", "Valdeci Oliveira"];
    const candidate_parties = ["PSOL", "PRD", "PDT", "NOVO", "PL", "PSDB", "PT"]
    
    let user_answers = get_user_answers();
    if (has_answered_all(user_answers)) 
    {
        alert("Você deve responder a todas as perguntas antes de terminar o teste.");
        return;
    }

    for (let i = 0; i < candidate_answers.length; i++) 
    {
        for (let j = 0; j < user_answers.length; j++) 
        {
            affinity_points[i] += calculate_points(candidate_answers[i][j], user_answers[j]);
        }
    }

    await suspense_time();
    display_ranking(candidate_strings, candidate_parties, img_links);

    set_mobile_link();
}

function calculate_points(answer_A, answer_B)
{
    let diff = Math.abs(answer_A - answer_B);

    switch (diff) {
        case 0:
            return 10;

        case 1:
            return 5;

        case 2:
            return 3;
        
        case 3:
            return 1;

        case 4:
            return 0;
    
        default:
            return 0;
    }
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

function display_ranking(candidate_strings, candidate_parties)
{
    let index = index_max_array(affinity_points);
    document.getElementById("winning_candidate").innerHTML = candidate_strings[index];
    document.getElementById("winning_party").innerHTML = candidate_parties[index];
    document.getElementById("winner_percent").innerHTML = get_affinity_percentage();
    document.getElementById("winning_picture").src = img_links[index];
    
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

function get_affinity_percentage()
{
    let index = index_max_array(affinity_points);
    let percent = (affinity_points[index] / 30)*100
    percent = Math.round(percent * 100) / 100;

    return percent;
}

function create_share_text()
{
    let winner_name = document.getElementById("winning_candidate").innerHTML;
    let text = "Acabei de fazer o Prefeitômetro e meu candidato deu " 
                + get_gendered_article(winner_name) 
                + " " + winner_name 
                + ", com " + get_affinity_percentage() 
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
    let text = create_share_text();
    copy_to_user_clipboard(text);

    document.getElementById("desktop_sharing").className = "results_button copied_confirmation";
    document.getElementById("desktop_sharing").innerHTML = "<strong>Copiado!</strong>";

    return;
}

function set_mobile_link()
{
    let text = create_share_text();
    text = "whatsapp://send?text=" + text;

    document.getElementById("mobile_sharing").href = text;
}
