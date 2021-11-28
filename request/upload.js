
    // sign up UI button
    const signUpButton = document.querySelector('.js-signUp');
  
    // sign in UI button
    const signInButton = document.querySelector('.js-signIn');
   
 
  const signUp = () => {
 
    const storedUser = localStorage.getItem('email')
    const Name =document.getElementById('Name').value
    const Email =document.getElementById('Email').value
    const Password =document.getElementById('Password').value
    const Pet =document.getElementById('Pet').value
    if(Email === storedUser){
      alert('Email Address is Already Registered');
    }
    else{
      const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const rePass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

      if ( reEmail.test(String(Email)) && rePass.test(String(Password))) {
        localStorage.setItem('user', Name)
        localStorage.setItem('email', Email)
        localStorage.setItem('password', Password)
        localStorage.setItem('Pet', Pet)
      }
    }
}
 const signIn=()=>{
const StoredEmail= localStorage.getItem('email')
const StoredPassword = localStorage.getItem('password')
const newEmail = document.getElementById('EmailSignIn').value
const newPassword = document.getElementById('PasswordSignIn').value
if(newEmail === StoredEmail){
  if(newPassword === StoredPassword){
    alert('you are logged in')
  }
  else{
    alert('password is incorrect')
  }
}
else{
  alert('You should sign in first')
}
 }
 const signOut = ()=>{
   localStorage.clear()
 }