"use strict";

document.getElementById('memberForm').addEventListener('submit', function(e) {
    var username = document.getElementById('username').value;
    
    //prevents page from refreshing
    e.preventDefault();

    document.getElementById('username').style.display = 'none';
    document.getElementById('password').style.display = 'none';
    document.querySelector('label[for="usernameLabel"]').style.display = 'none';
    document.querySelector('label[for="passwordLabel"]').style.display = 'none';
    document.getElementById('loginButton').style.display = 'none';
    document.getElementById('greeting').textContent = "Hello, " + username + "!";
  });
  