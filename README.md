<!DOCTYPE html>
<html>
<head>
  <title>Have Fun Tuition Programs</title>
  <style>
    body{
        font-family: Arial, Helvetica, sans-serif;

    }

    h1.centered-heading {
        color: #000000;
    }
    
    .button-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .button {
      padding: 20px 30px;
      flex-basis: 0%;
      margin-bottom: 20px;
      width: 150px;
      height: 100px;
      border-radius: 50%;
      border: none;
      background-color: #ff5432;
      font-family: Arial, Helvetica, sans-serif;
      font-size: medium;
      margin-top: 30px;
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.8);
      transition: 0.5s;

    }

    .button:hover{
        color: #ffffff;
        background-color: #c53514;
    }





    .button-row {
      flex-basis: 100%;
      display: flex;
      justify-content: center;
    }

    .button-container .button-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: auto;
    }

    .button-container img {
      width: 300px;
      margin-top: 5px;
      height: 200px;
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #923f3f;
      padding: 3px 5px;
    }

    .navbar a {
      margin-right: 10px;
      text-decoration: none;
      color: #333;
    }

    .navbar img {
      max-width: 100px;
    }

    .centered-heading{
        text-align: center;
        position: relative;
    
    }

    .centered-heading::after {
      content: "";
      position: absolute;
      left: 44.1%;
      bottom: -8px;
      width: 100%;
      border-bottom: 1px solid #000000;
      width: 150px;
      border-bottom: 3px solid #000000;
    }
    
    .custom-image-primary {
      margin-left: 10px; 
    }

    .button-wrapper{
        margin-right: 100px
    }

    body {
        background-color: #fff2e8;
    }
  </style>
</head>

<body>
  <div class="navbar">
    <img src="logo.png" alt="Logo">
    <div>
      <h4>Have Fun Tuition</h4>
    </div>
    <a href="home.html">Home</a>
    <a href="about.html">About us</a>
    <a href="programs.html">Program</a>
    <a href="location.html">Location</a>
    <a href="contact.html">Contact</a>
  </div>

  <h1 class="centered-heading">Programs</h1>
  <div class="button-container">
    <div class="button-row">
      <div class="button-wrapper">
        <button class="button" onclick="window.location.href='webside case study 1(chapter4).html'">Primary</button>
        <img src="primary.jpg" alt="Primary Image" >
      </div>
      <div class="button-wrapper">
        <button class="button" onclick="window.location.href='secondary.html'">Secondary</button>
        <img src="secondary.jpg" alt="Secondary Image">
      </div>
      <div class="button-wrapper">
        <button class="button" onclick="window.location.href='a-level.html'">A-Level</button>
        <img src="A-Level.png" alt="A-Level Image">
      </div>
    </div>
    <div class="button-row">
      <div class="button-wrapper">
        <button class="button" onclick="window.location.href='uec.html'">UEC</button>
        <img src="UEC.jpg" alt="UEC Image">
      </div>
      <div class="button-wrapper">
        <button class="button" onclick="window.location.href='kindergarten.html'">Kindergarten</button>
        <img src="kindergarten.jpg" alt="Kindergarten Image">
      </div>
    </div>
  </div>
</body>
</html>
