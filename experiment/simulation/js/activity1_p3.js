function activity1_p3() {
    let btn_text = get_collapse_btn_text(`<span class='fs-16px'>$$ \\Sigma{X},  \\Sigma{Y},  \\Sigma{X^2} \\ and \\ \\Sigma{XY}  $$</span>`, 'div-step-3');
    maindiv.innerHTML += `
    ${btn_text}
    <div class='collapse divide' id='div-step-3'>
    <h4 style='text-align: left;'  class='fb-800 fs-16px'>Summation</h4>
    <p class='fs-16px'><span> $$ Required \\ Equations => b \\Sigma {X^2} + a \\Sigma {X} =  \\ \\Sigma {XY} \\ \\  and \\ \\ b \\Sigma {X} + an = \\Sigma {Y} $$</span></p>
    <p class='fs-16px'><span>$$ \\Sigma {X} = ${sum_X}, \\ \\ \\Sigma {Y} = ${sum_Y}, \\ \\ \\Sigma {X^2} = ${sum_XX}, \\ \\ \\Sigma {XY} = ${sum_XY.toFixed(4)} $$</span></p>

    <hr>
    <div>
    <h5 class='fs-16px'>Above Equations can be written as <span style='font-weight: 800;'>$$x = \\ \\frac{B}{A}$$</span></h5>



    <div class='row' style='width: 80vw; margin: auto;'>
        <div class='col-4'>
            A = 
            <span>
                <table class='table table-bordered' style='border-color: black; width: 50%;'>
                    <tr >
                        <td> <span style='font-size: 16px !important;'>$$ \\Sigma {X^2}$$ </span></td>
                        <td><span style='font-size: 16px !important;'>$$ \\Sigma {X}$$ </span></td>
                    </tr>

                    <tr >
                        <td><span style='font-size: 16px !important;'>$$ \\Sigma {X}$$ </span></td>
                        <td class='center-text'><span style='font-size: 16px !important;'>n </span></td>
                    </tr>
                </table>
            </span>
        </div>

        <div class='col-4'>
        x = 
        <span>
            <table class='table table-bordered'  style='border-color: black; width: 20%;'>
                <tr >
                    <td> <span style='font-size: 16px !important;'> b </span></td>
                </tr>

                <tr >
                    <td><span style='font-size: 16px !important;'> a </span></td>
                </tr>
            </table>
        </span>
        </div>

        <div class='col-4'>
        B = 
        <span>
            <table class='table table-bordered'  style='border-color: black; width: 20%;'>
                <tr >
                    <td> <span style='font-size: 16px !important;'>$$ \\Sigma {XY}$$ </span></td>
                </tr>

                <tr >
                    <td><span style='font-size: 16px !important;'>$$ \\Sigma {Y}$$ </span></td>
                </tr>
            </table>
        </span>
        </div>
    </div>

    <div>
        <h5 class='fs-16px'>Calculate the values:</h5>
        <div class='row'>
            <div class='col-4'>
                <div class='row'>
                    <div class='col-3' style='text-align: center;'>a = </div>
                    <div class='col-9'><input class='form-control' id='a_inp' / ><span class='fs-16px' id='dsp-a'></span></div>
                </div>
            </div>
             <div class='col-4'>
                <div class='row'>
                    <div class='col-3'  style='text-align: center;'>b = </div>
                    <div class='col-9'><input class='form-control' id='b_inp' / ><span class='fs-16px' id='dsp-b'></span></div>
                </div>
            </div>
            <div class='col-4'>
                <button class='btn btn-info std-btn' style='margin-left: 5vw;' id='vf-a-b' onclick='verify_a_b();' >Verify</button>
            </div>
        </div>
    
    </div>

    </div>
    </div>
    `;
    // mat_a = [];
    // mat_b = [];
    // mat_a.push([sum_XX, sum_X]);
    // mat_a.push([sum_X, N]);
    mat_A[0][0] = sum_XX;
    console.log(mat_A[0][0]);
    mat_A[0][1] = sum_X;
    console.log(mat_A[0][1]);
    mat_A[1][0] = sum_X;
    console.log(mat_A[1][0]);
    mat_A[1][1] = N;
    console.log(mat_A[1][1]);
    // mat_b.push(sum_XY);
    // mat_b.push(sum_Y);
    mat_B[0] = sum_XY;
    mat_B[1] = sum_Y;
    // console.log(sum_X);
    console.log(mat_A);
    console.log(mat_B);
    //return;
    let A = [[mat_A[0][0], mat_A[0][1]], [mat_A[1][0], mat_A[1][1]]];
    let B = [mat_B[0], mat_B[1]];
    calculate_x_values(A, B);
    setTimeout(() => { MathJax.typeset(); }, 100);
    hide_all_steps();
    show_step('div-step-3');
}
function calculate_x_values(A, B) {
    mat_x = gauss(A, B);
    console.log(`a = ${mat_x[1]}, b = ${mat_x[0]}`);
}
function verify_a_b() {
    let val1 = document.getElementById('a_inp');
    let val2 = document.getElementById('b_inp');
    let btn = document.getElementById('vf-a-b');
    let dsp_a = document.getElementById('dsp-a');
    let dsp_b = document.getElementById('dsp-b');
    if (!verify_values(parseFloat(val1.value), mat_x[1])) {
        alert('Value of a is incorrect');
        return;
    }
    if (!verify_values(parseFloat(val2.value), mat_x[0])) {
        alert('Value of b is incorrect');
        return;
    }
    alert('Entered a and b values are correct!!');
    dsp_a.innerText = val1.value;
    dsp_b.innerText = val2.value;
    val1.remove();
    val2.remove();
    btn.remove();
    activity2();
}
//# sourceMappingURL=activity1_p3.js.map