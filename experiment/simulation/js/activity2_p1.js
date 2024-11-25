function activity2_p1() {
    let btn_txt = get_collapse_btn_text('Table and Summation', 'div-step-tb-2');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-step-tb-2'><h4 class='center-text fs-20px'>Calculate: </h4><div id='tb-box3'></div></div>`;
    let header = ['X', 'Y', 'Y<sup>2</sup>', 'XY'];
    act2_table_data = [];
    for (let i = 0; i < X.length; i++) {
        act2_table_data.push([X[i], parseFloat(Y[i].toFixed(4)), Y[i] * Y[i], parseFloat((X[i] * Y[i]).toFixed(3))]);
    }
    let vc = [2, 3];
    let vv = [Y[0] * Y[0], X[0] * Y[0]];
    let tb_box = document.getElementById('tb-box3');
    let new_table = new Verify_Table(header, act2_table_data, 0, vc, vv, '', tb_box, true, show_summation_2);
    new_table.load_table();
    let tab_ele = new_table.get_table_element();
    tab_ele.style.fontSize = "16px";
    hide_all_steps();
    show_step('div-step-tb-2');
}
function show_summation_2() {
    let tb_box = document.getElementById('tb-box3');
    tb_box.innerHTML += `
    <div>
        <p class='fs-16px'><span> $$ d\\Sigma {Y^2} + c\\Sigma {Y} = \\Sigma {XY} \\ \\  and \\ \\ d\\Sigma {Y} + cn = \\Sigma {Y} $$</span></p>

        <div class='row'>
            <div class='col-3 fs-16px'> &Sigma; X = <input type='number' id='a2-sum-inp-1' class='form-control fs-16px' /><span class='fs-16px' id='a2-sus-x'></span></div>

            <div class='col-3 fs-16px'> &Sigma; Y = <input type='number' id='a2-sum-inp-2' class='form-control fs-16px' /><span class='fs-16px' id='a2-sus-y'></span></div>

            <div class='col-3 fs-16px'> &Sigma; Y<sup>2</sup> = <input type='number' id='a2-sum-inp-3' class='form-control fs-16px' /><span class='fs-16px' id='a2-sus-xx'></span></div>

            <div class='col-3 fs-16px'> &Sigma; XY = <input type='number' id='a2-sum-inp-4' class='form-control fs-16px' /><span class='fs-16px' id='a2-sus-xy'></span></div>
        </div>

        <br>
        <div><button class='btn btn-info std-btn' onclick='verify_summation_2();' style='position : relative; left: 37%;' id='vf-tab-sum'>Verify</button><div>
    </div>
    `;
    setTimeout(() => { MathJax.typeset(); }, 100);
}
function verify_summation_2() {
    let val1 = document.getElementById('a2-sum-inp-1');
    let val2 = document.getElementById('a2-sum-inp-2');
    let val3 = document.getElementById('a2-sum-inp-3');
    let val4 = document.getElementById('a2-sum-inp-4');
    let btn = document.getElementById('vf-tab-sum');
    let sus1 = document.getElementById('a2-sus-x');
    let sus2 = document.getElementById('a2-sus-y');
    let sus3 = document.getElementById('a2-sus-xx');
    let sus4 = document.getElementById('a2-sus-xy');
    act2_sum_X = 0;
    act2_sum_Y = 0;
    act2_sum_Y2 = 0;
    act2_sum_XY = 0;
    for (let i = 0; i < act2_table_data.length; i++) {
        act2_sum_X += act2_table_data[i][0];
        act2_sum_Y += act2_table_data[i][1];
        act2_sum_Y2 += act2_table_data[i][2];
        act2_sum_XY += act2_table_data[i][3];
    }
    console.log(act2_sum_X, act2_sum_Y, act2_sum_Y2, act2_sum_XY);
    //console.log(sum_X, sum_Y, sum_X2, sum_XY);
    if (!verify_values(parseFloat(val1.value), act2_sum_X)) {
        alert('Incorrect Summation of X');
        return;
    }
    if (!verify_values(parseFloat(val2.value), act2_sum_Y)) {
        alert('Incorrect Summation of Y');
        return;
    }
    if (!verify_values(parseFloat(val3.value), act2_sum_Y2)) {
        alert('Incorrect Summation of Y^2');
        return;
    }
    if (!verify_values(parseFloat(val4.value), act2_sum_XY)) {
        alert('Incorrect Summation of X*Y');
        return;
    }
    alert('Great!! Your calculation is correct.');
    btn.remove();
    val1.remove();
    val2.remove();
    val3.remove();
    val4.remove();
    sus1.innerText = act2_sum_X.toFixed(3);
    sus2.innerText = act2_sum_Y.toFixed(3);
    sus3.innerText = act2_sum_Y2.toFixed(3);
    sus4.innerText = act2_sum_XY.toFixed(3);
    activity2_p2();
}
//# sourceMappingURL=activity2_p1.js.map