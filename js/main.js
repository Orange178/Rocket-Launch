//disable all inputs before login
// upd disable launch button
// TrustNo1
function checker()
{
    let password= 'TrustNo1';
    let searchElement = document.getElementById("login").value;
    let lBtn = document.getElementById("55");
    if (password === searchElement)
    {
        let dis3 = document.querySelectorAll("input");

        for (let i = 0; i < dis3.length;i++)
          {
           dis3[i].disabled = false;
          }
        lBtn.disabled= true;
    }

}

function checkValue() {
    let inp1 = document.getElementById("1").value;
    let inp2 = document.getElementById("2").value;
    let inp3 = document.getElementById("3").value;
    let inp4 = document.getElementById("4").value;
    let inp5 = document.getElementById("5").value;
    let rangeInputs = [inp1, inp2, inp3, inp4, inp5];
    let lBtn = document.getElementById("55");
    let correctVal = 0;//array for sum elems range
    let chBox1 = document.getElementById('6');
    let chBox2 = document.getElementById('7');
    let chBox3 = document.getElementById('8');
    let chBox4 = document.getElementById('9');
    let chBox5 = document.getElementById('10');
    let chBox6 = document.getElementById('11');
    let checkBoxArr = [chBox1, chBox2, chBox3, chBox4, chBox5, chBox6];
    let countVal = 0;//array for sum elems checkbox if true
//     for (let i = 0; i < rangeInputs.length; i++)
//     {
//         if (rangeInputs[i] === "100") {
//            // console.log(rangeInputs);
//             correctVal++;
//         }
//         lBtn.disabled = correctVal !== 5;
//         }
//     for ( let i = 0;i<checkBoxArr.length;i++)
//     {
//         if (checkBoxArr[i].checked)
//         {
//             countVal++;
//             // console.log(checkBoxArr);
//             // console.log("checked");
//         }
//         lBtn.disabled = !(countVal === 6 && correctVal === 5);
// }
// }

    for (let i = 0; i < rangeInputs.length; i++)
    {
        if (rangeInputs[i] === "100") {
           // console.log(rangeInputs);
            correctVal++;
        }
        lBtn.disabled = correctVal !== 5;
        }
    for ( let i = 0;i<checkBoxArr.length;i++)
    {
        if (checkBoxArr[i].checked)
        {
            countVal++;
            // console.log(checkBoxArr);
            // console.log("checked");
        }
        lBtn.disabled = !(countVal === 6 && correctVal === 5);
}
}
function launch()
{
    let lBtn = document.getElementById("55");

    alert("3");
    alert("2");
    alert("1");
    alert("LAUNCHING");
  let launchInterval =  setInterval(launch, 1000, 3);
    clearInterval(launchInterval);
    let rocketEl = document.getElementById("99");
    rocketEl.classList.add("rocket-movie");
    lBtn.disabled=true;
}

