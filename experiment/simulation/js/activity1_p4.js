function activity1_p4() {
    let btn_text = get_collapse_btn_text('Mean of X and Y', 'div-step-4');
    maindiv.innerHTML += `
    ${btn_text}
    <div class='collapse divide' id='div-step-4'>
        <h4 style='text-align: left;'  class='fb-800 fs-16px'>Step 4: </h4>
        <h4 class='fb-800 fs-16px'>Compute the value of <span style='display: inline-block; width: 20px;'>$$ \\overline{X} $$</span> and  <span style='display: inline-block; width: 20px;'>$$ \\overline{Y} $$</span>. where <span style='display: inline-block; width: 20px;'>$$ \\overline{X} $$</span> is mean value of X and  <span style='display: inline-block; width: 20px;'>$$ \\overline{Y} $$</span> is mean value of Y  </h4>
        <p>a = ${mat_x[1].toFixed(3)} and b = ${mat_x[0].toFixed(3)}</p>

        <div class='row'>
            <div class='col-6'>
                <div class='row'>

                    <div class='col-5' style='text-align: right;'> <span style='display: inline-block;'>$$ \\overline{X} = \\Sigma {\\frac{X}{n}} = $$</span> </div>

                    <div class='col-7'><br><input class='form-control fs-16px' id='inp-x-bar' /><span class='fs-16px' id='dsp-xavg'></span></div>
                </div>
            </div>

            <div class='col-6'>
                <div class='row'>

                    <div class='col-5' style='text-align: right;'> <span style='display: inline-block;''>$$ \\overline{Y} = \\Sigma {\\frac{Y}{n}} = $$</span> </div>

                    <div class='col-7'><br><input class='form-control fs-16px' id='inp-y-bar' /><span class='fs-16px' id='dsp-yavg'></span></div>
                </div>
            </div>
        </div>

        <div class='row'><button class='btn btn-info std-btn' id='avg-verify' style='margin: auto;' onclick='verify_avg();' >Verify</button></div>

        <br>

        <div class='fs-16px'>The regression equation of given dataset is Y = a + bX (The estimated value of a and b will be displayed in equation). calculate X - <span style='display: inline-block; width: 20px;'>$$ \\overline{X} $$</span>, Y - <span style='display: inline-block; width: 20px;'>$$ \\overline{Y} $$</span>, Y' and Y - Y'</div>

        <div id='avg-diff-table'></div>

        <br>

        <div id='summations-section'></div>
    </div>
    `;
    setTimeout(() => { MathJax.typeset(); }, 100);
    hide_all_steps();
    show_step('div-step-4');
}
function verify_avg() {
    let val1 = document.getElementById('inp-x-bar');
    let val2 = document.getElementById('inp-y-bar');
    let btn = document.getElementById('avg-verify');
    let dsp_xavg = document.getElementById('dsp-xavg');
    let dsp_yavg = document.getElementById('dsp-yavg');
    X_avg = 0;
    Y_avg = 0;
    for (let i = 0; i < X.length; i++) {
        X_avg += X[i];
        Y_avg += Y[i];
    }
    X_avg = X_avg / X.length;
    Y_avg = Y_avg / Y.length;
    console.log(`Xbar = ${X_avg} and Ybar = ${Y_avg}`);
    if (!verify_values(parseFloat(val1.value), X_avg)) {
        alert('Value of X bar is incorrect');
        return;
    }
    if (!verify_values(parseFloat(val2.value), Y_avg)) {
        alert('Value of Y bar is incorrect');
        return;
    }
    alert('Entered X bar and Y bar values are correct!!');
    dsp_xavg.innerText = val1.value;
    dsp_yavg.innerText = val2.value;
    val1.remove();
    val2.remove();
    btn.remove();
    load_avg_table();
}
function load_avg_table() {
    let d = document.getElementById('avg-diff-table');
    let header = [
        'X',
        "Y",
        "<span class='fs-16px'>$$ X - \\overline{X}$$</span>",
        "<span class='fs-16px'>$$ (X - \\overline{X})^2$$</span>",
        "<span class='fs-16px'>$$ Y -  \\overline{Y} $$</span>",
        "<span class='fs-16px'>$$ (Y -  \\overline{Y})^2 $$</span>",
        "<span class='fs-16px'>$$ (Y -  \\overline{Y})(X - \\overline{X}) $$</span>",
        "Y' = a + bX",
        "(Y - Y')<sup>2</sup>"
    ];
    act1_table_data_2 = [];
    for (let i = 0; i < X.length; i++) {
        act1_table_data_2.push([
            X[i],
            parseFloat(Y[i].toFixed(3)),
            parseFloat((X[i] - X_avg).toFixed(3)),
            parseFloat((Math.pow((X[i] - X_avg), 2)).toFixed(3)),
            parseFloat((Y[i] - Y_avg).toFixed(3)),
            parseFloat((Math.pow((Y[i] - Y_avg), 2)).toFixed(3)),
            parseFloat(((Y[i] - Y_avg) * (X[i] - X_avg)).toFixed(3)),
            parseFloat((mat_x[1] + (mat_x[0] * X[i])).toFixed(3)),
            parseFloat((Math.pow((Y[i] - (mat_x[1] + (mat_x[0] * X[i]))), 2)).toFixed(3))
        ]);
    }
    let vc = [2, 3, 4, 5, 6, 7, 8];
    let vv = [act1_table_data_2[0][2], act1_table_data_2[0][3], act1_table_data_2[0][4], act1_table_data_2[0][5], act1_table_data_2[0][6], act1_table_data_2[0][7], act1_table_data_2[0][8]];
    let new_table = new Verify_Table(header, act1_table_data_2, 0, vc, vv, '', d, true, after_avg_verify);
    new_table.load_table();
    setTimeout(() => { MathJax.typeset(); }, 150);
}
function after_avg_verify() {
    let ss = document.getElementById('summations-section');
    let div_ele = document.createElement('div');
    div_ele.setAttribute('class', 'col');
    // let btn_text = get_collapse_btn_text(`<span class='fs-16px' >$$ S_{XX}, S_{YY}, S_{XY}, SS_r   and M_{res} $$</span>`, 'div-step-5');
    div_ele.innerHTML = `

      

            <h5 class="fs-20px">Calculate: </h5>

            <div class="col">
                <div class="col-sm-6">
                    S<sub>XX</sub> (Sum of sqaured deviations of X from <span style='display: inline-block; width: 20px;'>$$ \\overline{X} $$</span>) = <span style='display: inline-block; text-align: left;'>$$ S_{XX} = \\Sigma {(X - \\overline{X})^2} $$</span> = <input type="text" class="form-control fs-16px" id="sm-xx"><span class='fs-16px' id='dsp-sxx'></span>
                </div>

                <br>

                <div class="col-sm-6">S<sub>YY</sub> (Sum of squared deviations of Y from <span style='display: inline-block; width: 20px;'>$$ \\overline{Y} $$</span>) =  <span style='display: inline-block; text-align: left;'>$$ S_{YY} = \\Sigma {(Y - \\overline{Y})^2} $$</span> = <input type="text" class="form-control fs-16px" id="sm-yy"><span class='fs-16px' id='dsp-syy'></span></div>
                <br>
            </div>


            <div class="col">
                <div class="col-sm-6">S<sub>XY</sub> (deviations of X form the <span style='display: inline-block; width: 20px;'>$$ \\overline{X} $$</span> and deviation of Y from <span style='display: inline-block; width: 20px;'>$$ \\overline{Y} $$</span>) = <span style='display: inline-block; text-align: left;'>$$ S_{XY} = \\Sigma {(X - \\overline{X})(Y - \\overline{Y})} $$</span> = <input type="text" class="form-control fs-16px" id="sm-xy"><span class='fs-16px' id='dsp-sxy'></span></div>
                <br>

                <div class="col-sm-6">SS<sub>r</sub> (Sum of squred residues) = <span style='display: inline-block; text-align: left;'>$$ SS_r = \\Sigma {(Y - Y')^2} $$</span> = <input type="text" class="form-control fs-16px" id="sm-r"><span class='fs-16px' id='dsp-ssr'></span></div>
                <br>
            </div>


            <div class="col">
                <div class="col-sm-6">S<sub>XX</sub> (Mean square due to regression) = <span style='display: inline-block; text-align: left;'>$$ M_{res} = \\Sigma { \\frac {(Y - Y')^2}{(n-2)}} = \\frac {SS_r}{(n-2)} $$</span> = <input type="text" class="form-control fs-16px" id="sm-mres"><span class='fs-16px' id='dsp-smres'></span></div>
            </div>

            <br>

           
            <div class="col-4"><button class='btn btn-info std-btn' onclick='verify_sm();' id='vf-sm' >Verify</buttton></div>

    `;
    ss.appendChild(div_ele);
    setTimeout(() => { MathJax.typeset(); }, 100);
}
function verify_sm() {
    let inp1 = document.getElementById('sm-xx');
    let inp2 = document.getElementById('sm-yy');
    let inp3 = document.getElementById('sm-xy');
    let inp4 = document.getElementById('sm-r');
    let inp5 = document.getElementById('sm-mres');
    let btn = document.getElementById('vf-sm');
    //to display
    let dsp_xx = document.getElementById('dsp-sxx');
    let dsp_yy = document.getElementById('dsp-syy');
    let dsp_xy = document.getElementById('dsp-sxy');
    let dsp_ssr = document.getElementById('dsp-ssr');
    let dsp_smres = document.getElementById('dsp-smres');
    sxx = 0;
    syy = 0;
    sxy = 0;
    ssr = 0;
    smres = 0;
    for (let i = 0; i < act1_table_data_2.length; i++) {
        sxx += act1_table_data_2[i][3];
        syy += act1_table_data_2[i][5];
        sxy += act1_table_data_2[i][2] * act1_table_data_2[i][4];
        ssr += act1_table_data_2[i][8];
    }
    smres = ssr / (act1_table_data_2.length - 2);
    console.log(sxx, syy, sxy, ssr, smres);
    if (!verify_values(parseFloat(inp1.value), sxx)) {
        alert('calculated Sxx vlaues is incorrect');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), syy)) {
        alert('calculated Syy vlaues is incorrect');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), sxy)) {
        alert('calculated Sxy vlaues is incorrect');
        return;
    }
    if (!verify_values(parseFloat(inp4.value), ssr)) {
        alert('calculated SSr vlaues is incorrect');
        return;
    }
    if (!verify_values(parseFloat(inp5.value), smres)) {
        alert('calculated M_res vlaues is incorrect');
        return;
    }
    alert('All Values are correct');
    // dsp_xx.innerText = inp1.value;
    // dsp_yy.innerText = inp2.value;
    // dsp_xy.innerText = inp3.value;
    // dsp_ssr.innerText = inp4.value;
    // dsp_smres.innerText = inp5.value;
    // inp1.style.display = 'none';
    // inp2.style.display = 'none';
    // inp3.style.display = 'none';
    // inp4.style.display = 'none';
    // inp5.style.display = 'none';
    // inp1.remove();
    // inp2.remove();
    // inp3.remove();
    // inp4.remove();
    // inp5.remove();
    btn.remove();
    inp1.disabled = true;
    inp2.disabled = true;
    inp3.disabled = true;
    inp4.disabled = true;
    inp5.disabled = true;
    //hide_all_steps();
    //activity1_p6_5();
}
//activity1_p4();
//# sourceMappingURL=activity1_p4.js.map