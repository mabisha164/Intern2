async function Register(){
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
    try{
    const response =await fetch("https://rest-api-bjno.onrender.com/register",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
       body:JSON.stringify(loginData)
    });
        if(data.success){
            const data=await response.json();
            
            console.log(data);
        }
        else{
            console.log('Error:',response.status);
        }
    }catch(error){
        console.log("Error:",error);
    }
}

