
async function register(){

    //collect all all the data
  

    let register_data={
        fname :  document.getElementById('fname').value,
       
        email : document.getElementById('email').value,
        password: document.getElementById('password').value,
       
        mobile: document.getElementById('mobile').value,
        username: document.getElementById('username').value,

    };
   let lname =  document.getElementById('lname').value;
   let cpassword= document.getElementById('confirm-password').value;

    if(register_data.password==cpassword)
    {
        let res= await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,
        {
            method:`POST`,
            body :JSON.stringify(register_data),
            headers:{
                'Content-Type':`application/json`,
            },
        });
        let data= await  res.json();
        console.log("server message:-",data.message);
        console.log("erro msg",data.error)
        if(data.error===false)
        {
            alert(data.message)
            window.location.href="./login.html"
        }
        else
        {
            alert(data.message)
            document.getElementById('name').value=null;
            document.getElementById('password').value=null;
            document.getElementById('username').value=null;
            
        }
    }
    else
    {
        alert("entered same password again")
        cpassword: document.getElementById('confirm-password').value=null;
    }

    console.log("Registered_Data",register_data)

   // base url-https://masai-api-mocker.herokuapp.com/

   
};
