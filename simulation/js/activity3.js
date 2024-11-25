function activity3() {
    maindiv.innerHTML += `
        <br>
        <div class=' divide'>
            <div style='margin-top: 2vw;'>
                <h5 class="center-text fs-16px">We have two X vs Y models: </h5>
                <br>
                <div class='fs-16px'>
                    <p>1. Derived from dataset (Activity 1)</p>
                    <p>2. Derived from Y vs X (Activity 2)</p>
                    <br>
                    <p> Now we will check whether two models have same slop and intercept.</p>
                </div>
                <button class='btn btn-info std-btn' style='position: relative; left: 38%;' onclick='start_act3();' id='a3-nxt-btn' >Next</button>
            </div>
        </div>
    `;
    //hide_all_steps();
}
function start_act3() {
    let btn = document.getElementById('a3-nxt-btn');
    btn.remove();
    let next_btn = get_collapse_btn_element('Compare Slope and intercept', 'act3-part-1');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'collapse divide fs-16px');
    div_ele.id = 'act3-part-1';
    div_ele.innerHTML = `

    <div>
    <table class="table">
        <tr>
            <th></th>
            <th>Activity 1</th>
            <th>Activity 2</th>
        </tr>

        <tr>
            <th>Slope</th>
            <td><span style="display: inline-block;">b =</span><span style="display: inline-block; width: 140px;"><input type="text" class="form-control" id="a3-b-inp" value='${mat_x[0]}' ></span> </td>
            <td><span style="display: inline-block;">b1 =</span><span style="display: inline-block; width: 140px;"><input type="text" class="form-control" id="a3-b1-inp" value='${a2b1}' ></span> </td>
        </tr>

        <tr>
            <th>Intercept</th>
            <td><span style="display: inline-block;">a =</span><span style="display: inline-block; width: 140px;"><input type="text" class="form-control" id="a3-a-inp" value='${mat_x[1]}' ></span> </td>
            <td><span style="display: inline-block;">a1 =</span><span style="display: inline-block; width: 140px;"><input type="text" class="form-control" id="a3-a1-inp" value='${a2a1}' ></span> </td>
        </tr>
    </table>
    </div>

    <p>If Slopes estimated from both activities are equal also u-intercept extimated from both activities are qual then we can say given model is proper.</p>

   
    `;
    hide_all_steps();
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    //load_act3_N_dd_values();
    show_step('act3-part-1');
    setTimeout(() => {
        MathJax.typeset();
        show_a3_p3();
    }, 200);
}
function show_a3_p3() {
    let next_btn = get_collapse_btn_element('Question', 'act3-part-3');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'collapse divide fs-16px');
    div_ele.id = 'act3-part-3';
    let res = '';
    let options = [`X and Y have a proper fit.`, `X and Y don't have a proper fit.`];
    //logic for comparing a, a1, b, b1
    let comp_b = (mat_x[0] - a2b1) * 100 / mat_x[0];
    let comp_a = (mat_x[1] - a2a1) * 100 / mat_x[1];
    if (comp_a <= 2 && comp_b <= 2) {
        res = '1';
    }
    else {
        res = '2';
    }
    let new_question = new Updated_Question(`What can you Conclude from above activities?`, options, res, div_ele, verify_a3_last);
    // hide_all_steps();
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    new_question.load_question();
    show_step('act3-part-3');
    setTimeout(() => {
        MathJax.typeset();
    }, 200);
}
function verify_a3_last() {
    alert('Well done your resposnse is correct.');
    hide_all_steps();
}
//activity3();
//# sourceMappingURL=activity3.js.map