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
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        // const data = document.querySelector('ul')
        const{firstName,lastName}=data
        console.log(firstName,lastName)
        // document.getElementById('userList').textContent='FullName';
        const dlist=document.getElementById('userList')
        const list = document.createElement('li')
        list.textContent =`Full Name: ${F_Name} ${L_Name}`
        dlist.appendChild(list);
        if(data.success){
            document.getElementById("message").textContent="login";
        }else{
            document.getElementById("message").textContent="No login";
        }

        // const userListDiv = document.getElementById("userList");
        // const userElement = document.createElement("div");
        // userElement.innerHTML = `<p>First Name: ${F_Name}</p>
        //                          <p>Last Name: ${L_Name}</p>`;
        // userListDiv.appendChild(userElement);
        
    })
        // if(data.success){
        //     const data=await response.json();
        //     console.log(data);
        //     const{firstName,lastName}= Data;
        //     console.log(firstName);
        //     console.log(lastName);
    //   const userListDiv =document.getElementById('userList');
    //     data.forEach(user=> {
    //         const firstName= user.firstName;
    //         const lastName = user.lastName;
    //         const userElement=document.createElement('div');
    //         userElement.innerHTML='<p>firstName:'



.catch(error=>{
        console.error("Error:",error);
});
 

function Submit(){
 fetch(' https://rest-api-bjno.onrender.com/users',{
    method:'GET',
})
.then(res=> res.json())
.then(data =>{
    // console.log(userList);
    const dataContainer=document.getElementById('userList')
    dataContainer.innerHTML='';
    for(let i=0;i<data.length;i++){
     const item=data[i];
     const fullname = 'FullName:'+ item.firstName+''+item.lastName;
     const listItem=document.createElement('li');
     listItem.textContent =fullname;
     dataContainer.appendChild(listItem);
    }

    })

.catch(error=>{
    console.error('Error:',error);
});
}
 }