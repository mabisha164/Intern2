function Register(){
    let F_Name = document.getElementById("username").value;
    let L_Name = document.getElementById("username1").value;
    let Email = document.getElementById("e1").value;
    let Password = document.getElementById("e2").value;
    let Confirm = document.getElementById("e3").value;

    let loginData = {
        firstName :F_Name,
        lastName : L_Name,
        email:Email,
        password:Password,
        e3:Confirm 
    };
    fetch("https://rest-api-bjno.onrender.com/register",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
       body:JSON.stringify(loginData)
    })
    .then(res => res.json())
    .then (data=>{ 
        console.log(data)
        if(data.success){
            document.getElementById("message").textContent= "Login Successful!";
        }
        else{
            document.getElementById("message").textContent= "Failed Login";
        }
    })
    .catch(error=>{
        console.error("Error:",error);
    })
    
}
