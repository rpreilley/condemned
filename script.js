$("#password").on('keyup', function() {
  event.preventDefault();
  var value = this.password.value;
  var check = value.toUpperCase();

  if (check.length === 8) {
    if (check === "FUJWDBRY") {
      valveOne();
      this.password.value = '';
    } else if (check === "ESGSUCKS") {
      valveTwo();
      this.password.value = '';
    } else if (check === "URGNADIE") {
      valveThree();
      this.password.value = '';
    } else if (check === "IMDUMBAF") {
      valveFour();
      this.password.value = '';
    } else if (check === "THXSLASH") {
      valveFive();
      this.password.value = '';
    } else if (check === "RICKROLL") {
      rickRoll();
      this.password.value = '';
    } else {
      wrongAnswer();
      this.password.value = '';
    }
  }
});


function valveOne() {
  document.getElementById('password').className = 'hiddentext';
  var image = document.querySelectorAll("img")[0];
  var source = image.src = image.src.replace("assets/gas_valve_system_background.gif","assets/gas_valve_system_correct1.gif");
  setTimeout(myTimer, 3000)
}

function valveTwo() {
  document.getElementById('password').className = 'hiddentext';
  var image = document.querySelectorAll("img")[0];
  var source = image.src = image.src.replace("assets/gas_valve_system_background.gif","assets/gas_valve_system_correct2.gif");
  setTimeout(myTimer, 3000)
}

function valveThree() {
  document.getElementById('password').className = 'hiddentext';
  var image = document.querySelectorAll("img")[0];
  var source = image.src = image.src.replace("assets/gas_valve_system_background.gif","assets/gas_valve_system_correct3.gif");
  setTimeout(myTimer, 3000)
}

function valveFour() {
  document.getElementById('password').className = 'hiddentext';
  var image = document.querySelectorAll("img")[0];
  var source = image.src = image.src.replace("assets/gas_valve_system_background.gif","assets/gas_valve_system_correct4.gif");
  setTimeout(myTimer, 3000)
}

function valveFive() {
  document.getElementById('password').className = 'hiddentext';
  var image = document.querySelectorAll("img")[0];
  var source = image.src = image.src.replace("assets/gas_valve_system_background.gif","assets/gas_valve_system_correct5.gif");
  setTimeout(myTimer, 3000)
}

function wrongAnswer() {
  document.getElementById('password').className = 'hiddentext';
  var image = document.querySelectorAll("img")[0];
  var source = image.src = image.src.replace("assets/gas_valve_system_background.gif","assets/gas_valve_system_incorrect.gif");
  setTimeout(myTimer, 3000)
}

function rickRoll() {
  document.getElementById('password').className = 'hiddentext';
  var image = document.querySelectorAll("img")[0];
  var source = image.src = image.src.replace("assets/gas_valve_system_background.gif","assets/rickroll.gif");
  setTimeout(myTimer, 3000)
}


function myTimer() {
  var image = document.querySelectorAll("img")[0];
  var source = image.src = "assets/gas_valve_system_background.gif";
  clearTimeout();
  location.reload();
}
