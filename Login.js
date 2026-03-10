document.getElementById("login-btn").addEventListener("click", function(){
    // console.log("btn click")

    // get userName
    const userName = document.getElementById("user-name");
    const name = userName.value;
    // console.log(name)

    // get pass
    const userPassword = document.getElementById("user-password");
    const pass = userPassword.value;
    // console.log(pass)

    if(name == "admin" && pass == "admin123"){
        window.location.assign("home.html")
    }
    else{
        alert("login failed");
        return ; 
    }
 

})