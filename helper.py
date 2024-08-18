for i in range(1, 16, 1):

    string = f'''
                <div class="question_box" id="question_{i:02}">
                    <p class="question_text">
                        Lorem ipsum.
                    </p>
                    
                    <fieldset class="all_options">
                        <div class="single_option first">
                            <input type="radio" class="checkbox_option" id="full_dis_q{i}" name="feedbackq{i}" value="full_dis">
                            <label for="full_dis_q{i}" class="checkbox_label">Discordo totalmente</label>
                        </div>
                    
                        <div class="single_option second">
                            <input type="radio" class="checkbox_option" id="part_dis_q{i}" name="feedbackq{i}" value="part_dis">
                            <label for="part_dis_q{i}" class="checkbox_label">Discordo parcialmente</label>
                        </div>
                    
                        <div class="single_option third">
                            <input type="radio" class="checkbox_option" id="neutral_q{i}" name="feedbackq{i}" value="neutral">
                            <label for="neutral_q{i}" class="checkbox_label">Neutro</label>
                        </div>
                    
                        <div class="single_option fourth">
                            <input type="radio" class="checkbox_option" id="part_agr_q{i}" name="feedbackq{i}" value="part_agr">
                            <label for="part_agr_q{i}" class="checkbox_label">Concordo parcialmente</label>
                        </div>
                    
                        <div class="single_option fifth">
                            <input type="radio" class="checkbox_option" id="full_agr_q{i}" name="feedbackq{i}" value="full_agr">
                            <label for="full_agr_q{i}" class="checkbox_label">Concordo totalmente</label>
                        </div>
                    </fieldset>

                    <p class="question_counter">
                        {i}/15
                    </p>
                </div>

    '''

    print(string)