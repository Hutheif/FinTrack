//get refernce to the elemnts
//const navItems = document.getElementsByTagName("nav-item");

const navItems = document.getElementsByClassName("nav-item");

const loadFormonclick = (event) => {
  console.log("Link clicked");

  const clickedText = event.target.textContent.trim().toLowerCase();

  if (clickedText === "register") {
    document.getElementById("register-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
  } else if (clickedText === "login") {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
  }
};

for (let navItem of navItems) {
  navItem.addEventListener("click", loadFormonclick);
}
