  // sign up button UI element
  const openSignUpButton = document.getElementById('js-openSignUp');

  // sign in button UI element
  const openSignInButton = document.getElementById('js-openSignIn');

  // overall container UI element
  const container = document.getElementById('js-container');

  // create account form UI element
  const createAccountForm = document.querySelector('.js-createAccountForm');

  // sign in form UI element
  const signInForm = document.querySelector('.js-signInForm');

  // sign up UI button
  const signUpButton = document.querySelector('.js-signUp');

  // sign in UI button
  const signInButton = document.querySelector('.js-signIn');

  // sign-up container UI element
  const signUpContainer = document.querySelector('.sign-up-container');

  // sign-in container UI element
  const signInContainer = document.querySelector('.sign-in-container');

  // overlay-left container UI element
  const overlayLeftContainer = document.querySelector('.overlay-left');

  // overlay-right container UI element
  const overlayRightContainer = document.querySelector('.overlay-right');

  // click event listener for sign up button UI
  openSignUpButton.addEventListener('click', () => {
    container.classList.add('js-right-panel-active');
                signUpContainer.focus();
  });

  // click event listener for sign in button UI
  openSignInButton.addEventListener('click', () => {
    container.classList.remove('js-right-panel-active');
    signInContainer.focus();
  });

  // focus out event listener for sign in button
  signInButton.addEventListener('focusout', () => {
    overlayRightContainer.focus();
  });

  // focus out event listener for sign up button
  signUpButton.addEventListener('focusout', () => {
    overlayLeftContainer.focus();
  });

  const signUp = () => {
    const x = document.getElementById("signUp")
    const storedUser = localStorage.getItem('email')

    const signUpName = x.elements.item(0).value
    const signUpEmail = x.elements.item(1).value
    const signUpPassword = x.elements.item(2).value

    if(signUpEmail === storedUser){
      alert('Email Address is Already Registered');
    }
    else{
      const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const rePass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

      if ( reEmail.test(String(signUpEmail)) && rePass.test(String(signUpPassword))) {
        localStorage.setItem('user', signUpName)
        localStorage.setItem('email', signUpEmail)
        localStorage.setItem('password', signUpPassword)
      }
    }
}

  const signIn = () => {
    const x = document.getElementById("signIn")

    const signInEmail = x.elements.item(0).value
    const signInPassword = x.elements.item(1).value

    const storedUser = localStorage.getItem('email')
    const storedPass = localStorage.getItem('password')

    if(signInEmail === storedUser && signInPassword === storedPass) {
      const signInEmail = document.querySelector('.signInEmail');
      signInEmail.classList.remove("error");
      const signInPass = document.querySelector('.signInPass');
      signInPass.classList.remove("error");
      const errMessage = document.querySelector('.errorMessage');
      errMessage.classList.remove("active");
      window.location.replace('./main.html');
    }
    else { 
      const errMessage = document.querySelector('.errorMessage');
      errMessage.classList.add("active");
      const signInEmail = document.querySelector('.signInEmail');
      signInEmail.classList.add("error");
      const signInPass = document.querySelector('.signInPass');
      signInPass.classList.add("error");
    }
  }