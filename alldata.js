let allREG = JSON.parse(localStorage.getItem("allregis")) || [];
// getData();
document.querySelector("#regform").addEventListener("submit",myReg)
function myReg(event){
    event.preventDefault();
    let rname = document.querySelector("#rName").value;
    let rmail = document.querySelector("#rEmail").value;
    let rnumber = document.querySelector("#rMobile").value;
    let raddress = document.querySelector("#rAdd").value;
    let rpassword = document.querySelector("#rPass").value;
    if(rname!="" && rmail!="" && rnumber!=="" && raddress!=="" && rpassword!==""){
        let regObj={
            rname,
            rmail,
            rnumber,
            raddress,
            rpassword
        };
        console.log(regObj);
        allREG.push(regObj);
        localStorage.setItem("allregis",JSON.stringify(allREG));
        document.querySelector("#rName").value = "";
        document.querySelector("#rEmail").value = "";
        document.querySelector("#rMobile").value = "";
        document.querySelector("#rAdd").value = "";
        document.querySelector("#rPass").value = "";       
    }
    else{
        alert("Enter the details");
    }
    
}

// function getData()
// {
//     document.querySelector("#allprotabbody").innerHTML = "";
//         allTask.forEach((task,index)=>{
//             displayTable(task,index);
//         })
    
// }
// function displayTable(regObj,index){
   
//     let row = document.createElement("tr");
//     let td1 = document.createElement("td");
//     td1.innerText= regObj.rname;
//     let td2 = document.createElement("td");
//     td2.innerText = regObj.rmail;
//     let td3 = document.createElement("td");
//     td3.innerText = regObj.rnumber;
//     let td4 = document.createElement("td");
//     td4.innerText = regObj.raddress;
//     let td5 = document.createElement("td");
//     td5.innerText = regObj.rpassword;
//     let td6 = document.createElement("td");
//     let button = document.createElement("button");
//     button.innerHTML = "Remove";
//     // button.style.backgroundColor="red";
//     // button.innerText.style.backgroundColor="white";
//     // button.addEventListener("click",(e)=>{
//     //     console.log(index);
//     //     deleteItem(index)
//     // })
//     td6.append(button);
//     row.append(td1, td2, td3, td4, td5, td6);
//     document.querySelector("#allprotabbody").append(row);
//     document.querySelector("#rName").value = "";
//     document.querySelector("#rEmail").value = "";
//     document.querySelector("#rMobile").value = "";
//     document.querySelector("#rAdd").value = "";
//     document.querySelector("#rPass").value = "";
// }

