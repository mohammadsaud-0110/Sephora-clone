let allREG = JSON.parse(localStorage.getItem("allregis")) || [];
document.querySelector("#regform").addEventListener("submit",myReg)
function myReg(event){
    event.preventDefault();
    let rname = document.querySelector("#rName").value;
    let rmail = document.querySelector("#rEmail").value;
    let rnumber = document.querySelector("#rMobile").value;
    let raddress = document.querySelector("#rAdd").value;
    let rpassword = document.querySelector("#rPass").value;
    let rcard = document.querySelector("#rCard").value;
    let rpin = document.querySelector("#rPin").value;
    if(rname!="" && rmail!="" &&
         rnumber!=="" && raddress!=="" && rpassword!=="" &&
            rcard!=="" && rpin!==""){
        let regObj={
            rname,
            rmail,
            rnumber,
            raddress,
            rpassword,
            rcard,
            rpin
        };
        // console.log(regObj);
        allREG.push(regObj);
        localStorage.setItem("allregis",JSON.stringify(allREG));
        document.querySelector("#rName").value = "";
        document.querySelector("#rEmail").value = "";
        document.querySelector("#rMobile").value = "";
        document.querySelector("#rAdd").value = "";
        document.querySelector("#rPass").value = "";
        document.querySelector("#rCard").value = "";
        document.querySelector("#rPin").value = "";
        alert("Registration Successfull!");
          
    }
    else{
        alert("Enter the details");
    }
    
}

let loginuser = "";
document.querySelector("#loginform").addEventListener("submit",checklogin)
function checklogin(event){
    event.preventDefault();
    
    let enmail = document.querySelector("#logmail").value;
    
    let enpass = document.querySelector("#logpass").value;
    let flag = false;
    if(enmail!=="" && enpass!==""){
        for(let j=0;j<allREG.length;j++){
            let savedmail = allREG[j].rmail;
            let savedpass = allREG[j].rpassword;
            loginuser = allREG[j].rname;
            localStorage.setItem("loginuser",loginuser);
            if(enmail == savedmail && enpass == savedpass){
                flag = true;
                break;
            }
        }
        if(flag===true){
            window.location.href = "./homepage1.html"
        }
        else{
            alert("Enter correct login details");
        }
    }
    else{
        alert("Enter All Login Details");
    }
}
