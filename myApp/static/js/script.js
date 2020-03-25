// 'use strict';

// let state = {
//     loginFormShown: false,
//     registerFormShown: false,
// };

// const show = element => {
//     element.classList.remove('hidden')
// };

// const hide = element => {
//     element.classList.add('hidden')
// };

// let formsOverlay = document.querySelector('.form-overlay');

// let loginForm = formsOverlay.querySelector('.login-form');
// let loginBtn = document.querySelector('.login-btn');
// let loginFormCloseBtn = loginForm.querySelector('.hide-login-form');


// loginBtn.addEventListener('click', event => {
//     if (state.loginFormShown){
//         hide(loginForm);
//         hide(formsOverlay);
//         state.loginFormShown = false;
//     } else if (state.registerFormShown && !state.loginFormShown) {
//         hide(registerForm);
//         show(loginForm);
//         state.registerFormShown = false;
//         state.loginFormShown = true;
//     } else if (!state.loginFormShown){
//         show(loginForm);
//         show(formsOverlay);
//         state.loginFormShown = true;
//     }
// });

// loginFormCloseBtn.addEventListener('click', event =>{
//     hide(loginForm);
//     hide(formsOverlay);
// });

// let registerForm = formsOverlay.querySelector('.register-form');
// let registerBtn = document.querySelector('.register-btn');
// let registerFormCloseBtn = registerForm.querySelector('.hide-register-form');


// registerBtn.addEventListener('click', (event) => {
//     if (state.registerFormShown){
//         hide(registerForm);
//         hide(formsOverlay);

//         state.registerFormShown = false;
//     } else if (state.loginFormShown && !state.registerFormShown) {
//         hide(loginForm);
//         show(registerForm);
//         state.loginFormShown = false;
//         state.registerFormShown = true;
//     } else if (!state.registerFormShown) {
//         show(registerForm);
//         show(formsOverlay);
//         state.registerFormShown = true;
//     }
// });


// registerFormCloseBtn.addEventListener('click', (e) =>{
//     hide(registerForm);
//     hide(formsOverlay);

// });

// // Form validation

// const animateError = (element, time=400) => {
//   element.classList += ' error-anim error';
//   setTimeout(()=>{
//       element.classList.remove('error-anim');
//   }, time)
// };




// document.addEventListener('DOMContentLoaded', evt => {
//     // Phone layout

//     let navBar = document.querySelector('.nav-bar');
//     let navBarToggleBtn = document.querySelector('.nav-bar-icon');

//     if (window.innerWidth < 767){
//         let navBarShown = false;

//         navBar.style.transform = `translateX(${(window.innerWidth*2)}px)`;

//         navBarToggleBtn.addEventListener('click', evt1 => {
//             if (navBarShown){

//                 // hide it
//                 navBar.style.transform = `translateX(${(window.innerWidth*2)}px)`;

//                 setTimeout(()=>{
//                     navBar.style.display = 'none';
//                 },200);

//                 navBarShown = !navBarShown;
//             } else {
//                 // show it
//                 navBar.style.display = 'flex';

//                 setTimeout(()=>{
//                     navBar.style.transform = 'translateX(0)';
//                 },200);

//                 navBarShown = !navBarShown;
//             }
//         })
//     }
//     // End phone layout
//     // validation


//     // id_field is django naming convention for django generated forms
//     let userNameField = registerForm.querySelector('#id_username');
//     let emailField = registerForm.querySelector('#id_email');
//     let passwordField1 = registerForm.querySelector('#id_password1');
//     let passwordField2 = registerForm.querySelector('#id_password2');
//     let allowedChars = /[A-Za-z0-9@._+-]{4,}/i;

//     registerForm.addEventListener('submit', evt => {
//         if (passwordField1.value !== passwordField2.value){
//             animateError(passwordField1);
//             animateError(passwordField2);
//             evt.preventDefault();
//             return
//         }

//         if (passwordField1.value.length < 8){
//             animateError(passwordField1)
//         }
//         if (!userNameField.value.match(allowedChars)){
//             animateError(userNameField);
//             evt.preventDefault();
//         }
//     });


// });


