function activity2_p3() {
    let btn_text = get_collapse_btn_text(`<span class='fs-16px'>$$ a_{1} \\ and \\ b_{1}  $$</span>`, 'a2-div-step-4');
    maindiv.innerHTML += `
${btn_text}
<div class='collapse divide' id='a2-div-step-4'>
    <div>We have a linear equation (Estimated): X = c + dY (with values of c, d)</div>

    <p>We can rewrite it as follows: <span style="display: inline-block;">$$ Y = \\frac{X}{d} - \\frac{c}{d} $$</span></p>

    <p>By comparing with equation <span style="display: inline-block;">$$ Y = a_{1} + b_{1}X $$</span></p>

    <p>We get: </p>

    <p style='text-align: center;'><span style="display: inline-block;">$$b_{1} = \\frac{1}{d} = \\ $$</span><span style='display: inline-block;'><input class='form-control' type='number' id='a2-b1-inp'></span></p>


    <p style='text-align: center;'><span style="display: inline-block;">$$a_{1} = -\\frac{c}{d} = \\ $$</span><span style='display: inline-block;'><input class='form-control' type='number' id='a2-a1-inp'></span></p>

    <div><button style="width: 200px; margin: auto;" class="btn btn-info" id="a2-p3-ver" onclick='verify_a2p3();' >Verify</button></div>
</div>
`;
    setTimeout(() => { MathJax.typeset(); }, 100);
    hide_all_steps();
    show_step('a2-div-step-4');
}
function verify_a2p3() {
    let b1 = document.getElementById('a2-b1-inp');
    let a1 = document.getElementById('a2-a1-inp');
    let a2b1 = 1 / mat_x[0];
    let a2a1 = -(mat_x[1] / mat_x[0]);
    if (!verify_values(parseFloat(b1.value), a2b1)) {
        alert('Value of b1 is incorrect');
        return;
    }
    if (!verify_values(parseFloat(a1.value), a2a1)) {
        alert('Value of a1 is incorrect');
        return;
    }
    alert("Entered values are correct!!");
    let btn = document.getElementById('a2-p3-ver');
    btn.style.display = 'none';
    activity3();
}
//# sourceMappingURL=activity2_p3.js.map