  // sign in button UI element
  const container = document.getElementById('js-container');
  const signUpButton = document.querySelector('.js-signUp');
  const signUp = ()=>{
    const x = document.getElementById("signUp")
    
      console.log('tf')
      const Pet = document.getElementById("Pet").value;
      const Email = document.getElementById("Email").value;
      const Name = document.getElementById("Name").value;
      const Password = document.getElementById("Password");
      console.log(Pet)
      console.log(Email)
      console.log(Name)
      console.log(Password) 
   
     
    
     const StoredEmail = localStorage.getItem('email')
     const signUpName = x.elements.item(0).value
    const signUpEmail = x.elements.item(1).value
    const signUpPassword = x.elements.item(2).value

    console.log(signUpName)
    console.log(signUpPassword)
  if(Email === StoredEmail){
    alert('Email Address is Already Registered');
  }
  else{
    const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const rePass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if ( reEmail.test(String(Email)) && rePass.test(String(Password))) {
        localStorage.setItem('user', signUpName)
        localStorage.setItem('email', signUpEmail)
        localStorage.setItem('password', signUpPassword)
       console.log('ehh')

      }
  } }