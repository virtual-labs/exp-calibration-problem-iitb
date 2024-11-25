function activity1_p2() {
    let btn_txt = get_collapse_btn_text('Table and Summation', 'div-step-tb');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-step-tb'><h4 class='center-text fs-20px'>Calculate: </h4><div id='tb-box2'></div></div>`;
    let header = ['X', 'Y', 'X<sup>2</sup>', 'XY'];
    act1_table_data = [];
    for (let i = 0; i < X.length; i++) {
        act1_table_data.push([X[i], parseFloat(Y[i].toFixed(4)), X[i] * X[i], parseFloat((X[i] * Y[i]).toFixed(3))]);
    }
    let vc = [2, 3];
    let vv = [X[0] * X[0], X[0] * Y[0]];
    let tb_box = document.getElementById('tb-box2');
    let new_table = new Verify_Table(header, act1_table_data, 0, vc, vv, '', tb_box, true, show_summation);
    new_table.load_table();
    let tab_ele = new_table.get_table_element();
    tab_ele.style.fontSize = "16px";
    hide_all_steps();
    show_step('div-step-tb');
}
function show_summation() {
    let tb_box = document.getElementById('tb-box2');
    tb_box.innerHTML += `
    <div>
        <p class='fs-16px'><span> $$ b \\Sigma {X^2} + a \\Sigma {X} = \\Sigma {XY} \\ \\  and \\ \\ b \\Sigma {X} + an = \\Sigma {Y} $$</span></p>

        <div class='row'>
            <div class='col-3 fs-16px'> &Sigma; X = <input type='number' id='sum-inp-1' class='form-control fs-16px' /><span class='fs-16px' id='sus-x'></span></div>

            <div class='col-3 fs-16px'> &Sigma; Y = <input type='number' id='sum-inp-2' class='form-control fs-16px' /><span class='fs-16px' id='sus-y'></span></div>

            <div class='col-3 fs-16px'> &Sigma; X<sup>2</sup> = <input type='number' id='sum-inp-3' class='form-control fs-16px' /><span class='fs-16px' id='sus-xx'></span></div>

            <div class='col-3 fs-16px'> &Sigma; XY = <input type='number' id='sum-inp-4' class='form-control fs-16px' /><span class='fs-16px' id='sus-xy'></span></div>
        </div>

        <br>
        <div><button class='btn btn-info std-btn' onclick='verify_summation();' style='position : relative; left: 37%;' id='vf-tab-sum'>Verify</button><div>
    </div>
    `;
    setTimeout(() => { MathJax.typeset(); }, 100);
}
function verify_summation() {
    let val1 = document.getElementById('sum-inp-1');
    let val2 = document.getElementById('sum-inp-2');
    let val3 = document.getElementById('sum-inp-3');
    let val4 = document.getElementById('sum-inp-4');
    let btn = document.getElementById('vf-tab-sum');
    let sus1 = document.getElementById('sus-x');
    let sus2 = document.getElementById('sus-y');
    let sus3 = document.getElementById('sus-xx');
    let sus4 = document.getElementById('sus-xy');
    sum_X = 0;
    sum_Y = 0;
    sum_XX = 0;
    sum_XY = 0;
    for (let i = 0; i < act1_table_data.length; i++) {
        sum_X += act1_table_data[i][0];
        sum_Y += act1_table_data[i][1];
        sum_XX += act1_table_data[i][2];
        sum_XY += act1_table_data[i][3];
    }
    console.log(sum_X, sum_Y, sum_XX, sum_XY);
    //console.log(sum_X, sum_Y, sum_XX, sum_XY);
    if (!verify_values(parseFloat(val1.value), sum_X)) {
        alert('Incorrect Summation of X');
        return;
    }
    if (!verify_values(parseFloat(val2.value), sum_Y)) {
        alert('Incorrect Summation of Y');
        return;
    }
    if (!verify_values(parseFloat(val3.value), sum_XX)) {
        alert('Incorrect Summation of X^2');
        return;
    }
    if (!verify_values(parseFloat(val4.value), sum_XY)) {
        alert('Incorrect Summation of X*Y');
        return;
    }
    alert('Great!! Your calculation is correct.');
    btn.remove();
    val1.remove();
    val2.remove();
    val3.remove();
    val4.remove();
    sus1.innerText = sum_X.toFixed(3);
    sus2.innerText = sum_Y.toFixed(3);
    sus3.innerText = sum_XX.toFixed(3);
    sus4.innerText = sum_XY.toFixed(3);
    activity1_p3();
}
//activity1_p2();
//# sourceMappingURL=activity1_p2.js.map