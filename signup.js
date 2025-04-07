
function signUp() {
  const username = document.getElementById("username").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (!/\d/.test(username)) {
    message.innerText = "Username এ অবশ্যই নাম্বার থাকতে হবে";
    return;
  }
  if (!/^\d{11}$/.test(phone)) {
    message.innerText = "ফোন নম্বর ১১ সংখ্যার হতে হবে";
    return;
  }
  if (!/^\d{6}$/.test(password)) {
    message.innerText = "পাসওয়ার্ড ৬ সংখ্যার হতে হবে";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some(u => u.phone === phone)) {
    message.innerText = "এই নাম্বার আগে ব্যবহার করা হয়েছে";
    return;
  }

  users.push({ username, phone, password });
  localStorage.setItem("users", JSON.stringify(users));
  message.innerText = "Sign Up সফল হয়েছে, এখন Sign In করুন";
}
