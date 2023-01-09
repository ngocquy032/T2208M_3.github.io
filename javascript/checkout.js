// check name
let nameInput = document.getElementById('name');
let nameMsgInput = document.getElementById('checkName');

function checkName() {
  let nameValue = nameInput.value;
  if(nameValue == '') {
    nameMsgInput.textContent = '  Not enough characters please enter more';

  }else{
    nameMsgInput.textContent = '';
  }
}



//check email
let mailInput = document.getElementById('email');
let mailMsgInput = document.getElementById('checkEmail');
const REGEX_MAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

function checkMail(){
  let mailValue = mailInput.value;
  let checkMail = validateMail(mailValue);
  if(!checkMail){
      mailMsgInput.textContent = 'Enter the wrong email format, please try again';
  }else{
      mailMsgInput.textContent = '';
  }
}


function validateMail(mail){
  return REGEX_MAIL.test(mail);
}


// check phone
let phoneInput = document.getElementById('phone');
let phoneMsgInput = document.getElementById('checkphone');
const REGEX_PHONE= /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/;

function checkNumber(){
  let numberValue = phoneInput.value;
  let checkPhone = validatePhoneNumber(numberValue);
  if(!checkPhone){
      phoneMsgInput.textContent = 'Enter the wrong number format, please try again';
  }else{
      phoneMsgInput.textContent ='';
  }
}
function validatePhoneNumber(phoneNumber) {
  return REGEX_PHONE.test(phoneNumber);
}

// function onClickBtnSend(){
//   // console.log('mailMsgInput.textContent: ', !mailMsgInput.textContent);
//   if(mailInput.value != "" && phoneInput.value != "" && nameInput.value != "" &&  ){
//   alert('send support successfully')

//   }

// }

// check addres
let addressInput = document.getElementById('address');
let addressMsgInput = document.getElementById('checkAddress');




function checkAddress() {
  let addressValue = addressInput.value;
  if(addressValue == '') {
    addressMsgInput.textContent = '  Not enough characters please enter more';

  }else{
    addressMsgInput.textContent = '';
  }
}

// check addres
let cityInput = document.getElementById('city');
let cityMsgInput = document.getElementById('checkCity');




function checkCity() {
  let cityValue = cityInput.value;
  if(cityValue == '') {
    cityMsgInput.textContent = '  Not enough characters please enter more';

  }else{
    cityMsgInput.textContent = '';
  }
}






