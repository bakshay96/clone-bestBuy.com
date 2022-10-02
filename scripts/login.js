async function login(){
    console.log("hello login function")
    //collect all all the data
   
    let login_data={
       
        username: document.getElementById('login_username').value,
        password: document.getElementById('login_password').value,

    };
    if(login_data.username=="" || login_data.password=="")
    {
        alert("filed not be empty")
    }
    console.log("logon")
   
    
   // base url-https://masai-api-mocker.herokuapp.com/
   //sub url: auth/login

    let res= await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,
    {
        method:`POST`,
        body : JSON.stringify(login_data),
        headers:{
            'Content-Type':`application/json`,
        },
    });
    let data= await  res.json();

    //1)get username = login_data.username=> normal way
    //2)destructure method ->
        let{username}=login_data;

    //how to get token
    //1)let token=data.token; => simple way to access token data
    //2) Destructure method =>
        let {token}=data;
    
    // checking data usrname and token
    console.log(username,token)
    
    getProfile(username,token)  //function call

    //get the profile when login is sucessfull
    console.log(data);
    saveUser(username,token,15000)
};

let getProfile = async(username,token) =>{
    //username
    let data;
    try
    {
        
    
        let res= await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,
        {
            method:`GET`,
        // body : JSON.stringify(login_data),
            headers:{
                'Content-Type':`application/json`,
            Authorization : `Bearer ${token}`,
            },
        });
        data= await res.json();
        let name=data.name;
        console.log("server name",username);
        console.log("inputname",username)
        if(username==data.username)
        {
            alert("login successfull....!!")
            console.log('Hello',data.name);
            document.getElementById('uname').innerText=data.name
            localStorage.setItem("user_name",JSON.stringify(name));
            moveBy();
            //alert(" Welcome..Login Successfull ")
        }
    }
    catch(err)
    {
        console.log(err)
        alert("login Successfull")
        window.location.href="./home.html"
    
    }
   
   
    //move();
    
};

let saveUser =(username,token,time) =>{
    let user={
        username,
        token,
    };
    localStorage.setItem("user_details",JSON.stringify(user));

    setTimeout(() =>
    {
        localStorage.setItem("user_details",JSON.stringify(null))

    },time);
}

function moveBy()
{
    window.location.href="./home.html"
}


// ----------------------////login------------

// let form = document.querySelector("form");
//     let  signupLS = JSON.parse(localStorage.getItem("signup"))|| [];
    
//     form.addEventListener("submit",function(event){
//         event.preventDefault();
//         if(signupLS.length === 0){
//             alert("No user till Now");
//             return
//         }
//         let obj={
//            email: form.login_username.value,
//            password:form.login_password.value,

//         }
//         let flag = true;
//         signupLS.forEach(function(ele){
//             if(ele.email===obj.email && ele.password ===obj.password){
//                 falg = false;
//                 localStorage.setItem("signin",JSON.stringify(ele));
//                 alert("sign up Sucessfull");
                
//                 window.location.href="https://giphy.com/gifs/moodman-lol-spit-take-Q7ozWVYCR0nyW2rvPW"

//             }
//         })
//         if(flag === true){
//             alert("User DoesNot Exist")
//             form.login_password="";
//             form.login_username="";
//         }
//     })