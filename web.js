// Change these to your own username and password
const correctUser = "Skyound";
const correctPass = "Lovely1sss002";

function login() {
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;


    if (username === correctUser && password === correctPass) {
        window.location.href = "balance.html";
    } else {
        document.getElementById('result').style.color = 'red';
        document.getElementById('result').innerText = 'Invalid credentials!';
    }
}


setTimeout(() => {
    window.location.href = "index.html"; 
  }, 1800000);
  
  
  
  
  
  const modal = document.getElementById("modal");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");
  
  openBtn.onclick = () => {
    modal.style.display = "flex";
  };

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };




// const hamburger = document.querySelector(".hamburger");
// const nav = document.querySelector(".burger");

// hamburger.addEventListener("click", () => {
//   nav.classList.toggle("active");
// });




const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // prevents document click
  nav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  const clickedInsideNav = nav.contains(e.target);
  const clickedHamburger = hamburger.contains(e.target);

  if (!clickedInsideNav && !clickedHamburger) {
    nav.classList.remove("active");
  }
});



  

