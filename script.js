let create = document.getElementById("create");
let c_login = document.getElementById("login1");
let dashboard = document.getElementById("Dashboard");



c_login.addEventListener("click", function(){
    const c_user = document.getElementById("user1");
    const c_pass = document.getElementById("pass1");

    if (c_user.value && c_pass.value) {
        window.location.href = "index.html";
        alert("Created Account!");
    } else {
        alert("Please fill out the form completely.");
    }
});

create.addEventListener("click", function(){
    window.location.href = "create.html";
});

dashboard.addEventListener("click", function(){
        window.location.href = "Dashboard.html"
        alert("Welcome");
});
