async function login(){

    //collect all all the data
   
    let login_data={
       
        username: document.getElementById('login_username').value,
        password: document.getElementById('login_password').value,

    };
   
    
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
        let data= await res.json();
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
        if(data.erro===true)
        {
            console.log("hello wrong credential")
            alert("Wrong Credential")
        }
        else
        {
            alert("something wrong Try again")
        }
        
    
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