//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
//scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      //active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //remove toggle icon and navbar click navbar links(scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//contact form 'form');
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage =
    "Full Name: ${fullName.value}<br> Email:  ${email.value}<br> Phone Number:${phone.value}<br> Message: ${mess.value}<br>";

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "anaah.opoku@gmail.com",
    Password: "AB363C5D12538FD9B34A6829A5D213AD2065",
    To: "anaah.opoku@gmail.com",
    From: "anaah.opoku@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then;
  (message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success",
        text: "Message Sent!",
        icon: "success",
      });
    }
  };
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
