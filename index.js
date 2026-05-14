 function update(){   
           let bill =Number(document.getElementById("yourBill").value);

           let tipPercent =document.getElementById("tipInput").value;

           let split =document.getElementById("splitInput").value;
           
           let object = {
            conta: bill,
            troco: tipPercent,
            dividir: split
           }

           let tipValue = bill * (tipPercent/100);
           let tipEach = tipValue / split;
           let newBillEach = (bill+tipValue) / split;

           console.log(typeof bill);
           
           document.getElementById("tipPercent").innerHTML = tipPercent + "%";
           //console.log({object});

           document.getElementById("tipValue").innerHTML = "R$ " + (tipValue).toFixed(2);

           document.getElementById("totalTip").innerHTML = "R$" + (bill + tipValue).toFixed(2);
           document.getElementById("splitValue").innerHTML = split;
           document.getElementById("billEach").innerHTML = "R$ " + (newBillEach).toFixed(2);
           document.getElementById("tipEach").innerHTML = "R$ " + (tipEach).toFixed(2);          
        }

        let container = document.getElementById("container");
        container.addEventListener("input",update);