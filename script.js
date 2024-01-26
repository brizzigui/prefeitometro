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

const answer_indexes = ["full_dis", "part_dis", "neutral", "part_agr", "full_agr"];

async function calculate_results()
{
    const turtle_answers = [part_dis, part_agr, part_agr];
    const bird_answers = [full_agr, full_dis, full_dis];
    const tiger_answers = [full_agr, part_dis, full_agr];

    const candidate_answers = [turtle_answers, bird_answers, tiger_answers];
    let affinity_points = [0, 0, 0];
    
    let user_answers = get_user_answers();

    for (let i = 0; i < candidate_answers.length; i++) 
    {
        for (let j = 0; j < user_answers.length; j++) 
        {
            affinity_points[i] += calculate_points(candidate_answers[i][j], user_answers[j]);
        }
    }

    console.log(affinity_points);
    suspense_time();
    display_ranking(affinity_points);
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

    for (let i = 0; i < 3; i++) 
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
    return;
}

function display_ranking(affinity_points)
{

}