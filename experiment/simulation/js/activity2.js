function activity2() {
    maindiv.innerHTML += `
        <br>
        <div class='divide'>
            <div style='margin-top: 2vw;'>
                <h5 class="center-text fs-16px">Find the Model c + dx.</h5>

                <div class='fs-16px'>
                    <p>Consider a linear model</p>
                    <p style='text-align: center;'>x = &theta; + &delta;x + &epsilon;</p> 
                    <p>From the available n data points, we find the model c + dx, by requiring that the sum of squares of the residuals be minimized.</p>
                    <p class='fs-16px'>&theta; &delta; and &epsilon; are population parameters, and c and d are random variables, computed from the sampled data.
                    </p>
                </div>

                <div>
                    Generate &theta; &delta; and &epsilon; such that

                    <div style='text-align: center;'>
                        <span style='display: block;'>-1 &le; &theta; &le; 1</span>
                        <span style='display: block;'>-1 &le; &delta; &le; 1</span>
                        <span style='display: block;'>-0.8 &le; &epsilon; &le; 0.8</span>
                    </div>
                </div>
                <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
            </div>
        </div>
    `;
}
function start_act2() {
    let btn = document.getElementById('temp-btn-2');
    btn.remove();
    let next_btn = get_collapse_btn_element('Question', 'act2-part-1');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'collapse divide fs-16px');
    div_ele.id = 'act2-part-1';
    let ques_text = `If X and Y are related to each other with the relation X = c + dY then the preferable set of simulatneous equations for finding the values of c and d is?`;
    let options = [`<span style='font-size: 16px;' >$$ d \\Sigma {Y^2} + c \\Sigma {Y} = \\Sigma X $$</span> <span style='font-size: 16px;' >$$ d \\Sigma {XY} + cn = \\Sigma {XY}$$</span>`,
        `<span style='font-size: 16px;' >$$ d \\Sigma {Y^2} - c \\Sigma {Y} = \\Sigma XY$$</span> <span style='font-size: 16px;' >$$ d \\Sigma {Y} - cn = \\Sigma {Y}$$</span>`,
        `<span style='font-size: 16px;' >$$ d \\Sigma {Y^2} + c \\Sigma {Y} = \\Sigma XY$$</span> <span style='font-size: 16px;' >$$ d \\Sigma {Y} - cn = \\Sigma {X}$$</span>`,
        `<span style='font-size: 16px;' >$$ d \\Sigma {Y^2} + c \\Sigma {Y} = \\Sigma XY$$</span> <span style='font-size: 16px;' >$$ d \\Sigma {Y} + cn = \\Sigma {X}$$</span>`];
    let new_question = new Updated_Question(ques_text, options, '4', div_ele, activity2_p1);
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    new_question.load_question();
    setTimeout(() => { MathJax.typeset(); }, 100);
    hide_all_steps();
    show_step('act2-part-1');
}
//activity2();
//# sourceMappingURL=activity2.js.map