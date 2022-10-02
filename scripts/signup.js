
// async function register(event){
   
//     event.preventDefault();
//     //collect all all the data
//   let form=document.querySelector('form');

//     let register_data={
//         fname :  document.getElementById('fname').value,
       
//         email : document.getElementById('email').value,
//         password: document.getElementById('password').value,
       
//         mobile: document.getElementById('mobile').value,
//         username: document.getElementById('username').value,

//     };
//    let lname =  document.getElementById('lname').value;
//    let cpassword= document.getElementById('confirm-password').value;
//    let data;
//     if(register_data.password==cpassword && form.fname!=""&& form.email!=""&& form.mobile!="")
//     {
//        try
//        { 
//             let res= await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,
//             {
//                 method:`POST`,
//                 body :JSON.stringify(register_data),
//                 headers:{
//                     'Content-Type':`application/json`,
//                 },
//             });
//              data= await  res.json();
//             console.log("server message:-",data.message);
//             console.log("erro msg",data.error)
//         }
//         catch(err)
//         {
//             console.log("DATA",err);
//             alert("Server Error")
//             window.location.href="./login.html"

//         }
       
//         if(data.error===false)
//         {
//             alert(data.message)
//             window.location.href="./login.html"
//         }
//         else
//         {

//             alert(data.message)
//             form.username.value=null;
//             form.fname=null;
//             document.getElementById('username').value=null;
            
//         }
//     }
//     else
//     {
//         alert("entered same password again")
//         cpassword: document.getElementById('confirm-password').value=null;
//     }

//     console.log("Registered_Data",register_data)
//     alert("Account created sucessfully")

//    // base url-https://masai-api-mocker.herokuapp.com/

   
// };

// ------------------------------//local data validation-----------------------

function register()
{
    let form = document.querySelector("form");
    let signupLS = JSON.parse(localStorage.getItem("signup"))|| [];

        let obj={
            fname :document.getElementById('fname').value,
            lname :document.getElementById('lname').value,
            email :document.getElementById('email').value,
            password:document.getElementById('password').value,
            mobile: document.getElementById('mobile').value,
            username: document.getElementById('username').value,
            cpassword: document.getElementById('confirm-password').value,
        };
            // cpassword: document.getElementById('confirm-password').value,
        
        
        

        
        // let obj2 ={
        //     name:form.fname.value,
        //     email:form.email.value,
        //     password:form.password.value,
        // }
   
    // if(obj.cpassword!=obj.password)
    // {
    //     alert("Enter same password !")
    //     document.getElementById('confirm-password').value="";
       
      
    // }
     if(obj.fname == "" || obj.email=="" || obj.password == "" || obj.mobile=="" || obj.username=="")
     {
            alert("Field Empty");
            return;
    }
    else{
            signupLS.push(obj);
            localStorage.setItem("signup",JSON.stringify(signupLS));
            alert("sinup sucessfull..!")
            
            window.location.href="./login.html";
        
      
        
        }
        
    
}
