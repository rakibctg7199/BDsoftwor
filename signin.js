
function signIn() {
  const username = document.getElementById("username").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.username === username && u.phone === phone && u.password === password);

  if (!user) {
    message.innerText = "ভুল তথ্য! Username, Phone & Password মিলছে না";
    return;
  }

  localStorage.setItem("loggedInUser", JSON.stringify(user));
  window.location.href = "home.html";
}
