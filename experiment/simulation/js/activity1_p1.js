function activity1_p1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_txt = get_collapse_btn_text('Step 2', 'div-step-2');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-step-2'>
    <h4 style='text-align: left;'  class='fb-800 fs-20px'>Step 2: </h4>
    <h4 class='fs-16px'>If X and Y related to each other with relation Y = a + bX then</h4>
    <div id='q-box'></div>
    </div>`;
    let q_box = document.getElementById('q-box');
    let options = [`<span style='font-size: 16px;' >$$ b \\Sigma {X^2} + a \\Sigma {X} = \\Sigma XY$$</span> <span style='font-size: 16px;' >$$ b \\Sigma {X} + an = \\Sigma {Y}$$</span>`,
        `<span style='font-size: 16px;' >$$ b \\Sigma {Y^2} + a \\Sigma {Y} = \\Sigma XY$$</span> <span style='font-size: 16px;' >$$ b \\Sigma {Y} + an = \\Sigma {X}$$</span>`,
        `<span style='font-size: 16px;' >$$ b \\Sigma {Y^2} - a \\Sigma {Y} = \\Sigma XY$$</span> <span style='font-size: 16px;' >$$ b \\Sigma {Y} - an = \\Sigma {X}$$</span>`,
        `<span style='font-size: 16px;' >$$ b \\Sigma {X^2} - a \\Sigma {X} = \\Sigma XY$$</span> <span style='font-size: 16px;' >$$ b \\Sigma {X} - an = \\Sigma {Y}$$</span>`];
    let new_question = new Updated_Question('The preferable set of simultaneous equation for finding the values of a and b is: ', options, '1', q_box, activity1_p2);
    setTimeout(() => { MathJax.typeset(); }, 100);
    hide_all_steps();
    show_step('div-step-2');
    new_question.load_question();
}
//# sourceMappingURL=activity1_p1.js.map