let uzr = JSON.parse(localStorage.getItem("allregis")) || [];
console.log(uzr.length)
for(let i=0;i<uzr.length;i++){
    displayUsers(uzr[i],i);
}

function getData()
{
    document.querySelector("#allprotabbody").innerHTML = "";
        uzr.forEach((elem,index)=>{
            displayUsers(elem,index);
        })
}

function displayUsers(val, i){
    console.log(val);
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText= val.rname;
    let td2 = document.createElement("td");
    td2.innerText = val.rmail;
    let td3 = document.createElement("td");
    td3.innerText = val.rnumber;
    let td4 = document.createElement("td");
    td4.innerText = val.raddress;
    let td5 = document.createElement("td");
    td5.innerText = val.rpassword;
    let td6 = document.createElement("td");
    let button = document.createElement("button");
    button.innerHTML = "Remove";
    button.style.backgroundColor="red";
    button.innerText.style.backgroundColor="white";
    // button.addEventListener("click",(e)=>{
    //     console.log(i);
    //     removeUser(i)
    // })
    td6.append(button);
    row.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("#allprotabbody").append(row);
    // document.querySelector("#rName").value = "";
    // document.querySelector("#rEmail").value = "";
    // document.querySelector("#rMobile").value = "";
    // document.querySelector("#rAdd").value = "";
    // document.querySelector("#rPass").value = "";
}

function removeUser(index)
{
    uzr = uzr.filter((ele,ind)=>ind!==index)
    localStorage.setItem("allregis",JSON.stringify(uzr))
    // getData();
}