function activity2_p2() {
    let btn_text = get_collapse_btn_text(`<span class='fs-16px'>$$ \\Sigma{X},  \\Sigma{Y},  \\Sigma{Y^2} \\ and \\ \\Sigma{XY}  $$</span>`, 'a2-div-step-3');
    maindiv.innerHTML += `
    ${btn_text}
    <div class='collapse divide' id='a2-div-step-3'>
    <h4 style='text-align: left;'  class='fb-800 fs-16px'>Summation</h4>
    <p class='fs-16px'><span> $$ Required \\ Equations => d\\Sigma {Y^2} + c\\Sigma {Y} =  \\ \\Sigma {X} \\ \\  and \\ d\\Sigma {Y} + cn = \\Sigma {XY} $$</span></p>
    <p class='fs-16px'><span>$$ \\Sigma {X} = ${act2_sum_X}, \\ \\ \\Sigma {Y} = ${act2_sum_Y}, \\ \\ \\Sigma {Y^2} = ${act2_sum_Y2}, \\ \\ \\Sigma {XY} = ${act2_sum_XY.toFixed(4)} $$</span></p>

    <hr>
    <div>
    <h5 class='fs-16px'>Above Equations can be written as <span style='font-weight: 800;'>$$Ax = B$$</span></h5>



    <div class='row' style='width: 80vw; margin: auto;'>
        <div class='col-4'>
            A = 
            <span>
                <table class='table table-bordered' style='border-color: black; width: 50%;'>
                    <tr >
                        <td> <span style='font-size: 16px !important;'>$$ \\Sigma {Y^2}$$ </span></td>
                        <td><span style='font-size: 16px !important;'>$$ \\Sigma {Y}$$ </span></td>
                    </tr>

                    <tr >
                        <td><span style='font-size: 16px !important;'>$$ \\Sigma {Y}$$ </span></td>
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
                    <td> <span style='font-size: 16px !important;'> d </span></td>
                </tr>

                <tr >
                    <td><span style='font-size: 16px !important;'> c </span></td>
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
                    <td><span style='font-size: 16px !important;'>$$ \\Sigma {X}$$ </span></td>
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
                    <div class='col-9'><input class='form-control' id='c_inp' / ><span class='fs-16px' id='a2-dsp-a'></span></div>
                </div>
            </div>
             <div class='col-4'>
                <div class='row'>
                    <div class='col-3'  style='text-align: center;'>b = </div>
                    <div class='col-9'><input class='form-control' id='d_inp' / ><span class='fs-16px' id='a2-dsp-b'></span></div>
                </div>
            </div>
            <div class='col-4'>
                <button class='btn btn-info std-btn' style='margin-left: 5vw;' id='vf-a-b-2' onclick='verify_a_b_2();' >Verify</button>
            </div>
        </div>
    
    </div>

    </div>
    </div>
    `;
    // a2_mat_A = [];
    // a2_mat_B = [];
    // a2_mat_A.push([sum_XX, sum_X]);
    // a2_mat_A.push([sum_X, N]);
    a2_mat_A[0][0] = act2_sum_Y2;
    console.log(a2_mat_A[0][0]);
    a2_mat_A[0][1] = act2_sum_Y;
    console.log(a2_mat_A[0][1]);
    a2_mat_A[1][0] = act2_sum_Y;
    console.log(a2_mat_A[1][0]);
    a2_mat_A[1][1] = N;
    console.log(a2_mat_A[1][1]);
    // a2_mat_B.push(sum_XY);
    // a2_mat_B.push(sum_Y);
    a2_mat_B[0] = act2_sum_XY;
    a2_mat_B[1] = act2_sum_X;
    // console.log(sum_X);
    console.log(a2_mat_A);
    console.log(a2_mat_B);
    //return;
    let A = [[a2_mat_A[0][0], a2_mat_A[0][1]], [a2_mat_A[1][0], a2_mat_A[1][1]]];
    let B = [a2_mat_B[0], a2_mat_B[1]];
    calculate_x_values_2(A, B);
    setTimeout(() => { MathJax.typeset(); }, 100);
    hide_all_steps();
    show_step('a2-div-step-3');
}
function calculate_x_values_2(A, B) {
    a2_mat_x = gauss(A, B);
    console.log(`c = ${a2_mat_x[1]}, d = ${a2_mat_x[0]}`);
}
function verify_a_b_2() {
    let val1 = document.getElementById('c_inp');
    let val2 = document.getElementById('d_inp');
    let btn = document.getElementById('vf-a-b-2');
    let dsp_a = document.getElementById('a2-dsp-a');
    let dsp_b = document.getElementById('a2-dsp-b');
    if (!verify_values(parseFloat(val1.value), a2_mat_x[1])) {
        alert('Value of a is incorrect');
        return;
    }
    if (!verify_values(parseFloat(val2.value), a2_mat_x[0])) {
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
//# sourceMappingURL=activity2_p2.js.map