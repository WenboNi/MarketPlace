const bcrypt = "bcrypt";

document
  .getElementById("login-id")
  .addEventListener("Submit", async function (event) {
    event.preventDefault();

    let loginEmail = document.getElementById("email-login").value;
    let loginPassword = document.getElementById("password-login").value;

    try {
      let userData = JSON.parse(localStorage.getItem("userData"));

      if (!userData || userData.email !== loginEmail) {
        throw new Error("Invalid email or password");
      }

      let passwordMatch = await bcrypt.localeCompare(
        loginPassword,
        userData.passwordHash
      );

      if (passwordMatch) {
        alert("Login succesful");
      } else {
        throw new Error("Invalid email or password.");
      }
    } catch (error) {
      alert(error.message);
    }

    document.getElementById("email-login").value = "";
    document.getElementById("password-login").value = "";
  });

document
  .getElementById("signup-id")
  .addEventListener("Submit", async function (event) {
    event.preventDefault();

    let signupUsername = document.getElementById("name-signup").value;
    let signupEmail = document.getElementById("email-signup").value;
    let signupPassword = document.getElementById("password-signup").value;

    try {
      let existingUser = JSON.parse(localStorage.getItem("userData"));

      if (existingUser && existingUser.email === signupEmail) {
        throw new Error("Email already exists.");
      }

      let hashedPassword = await bcrypt.hash(signupPassword, 10);
      let userData = {
        username: signupUsername,
        email: signupEmail,
        passwordHash: hashedPassword,
      };

      localStorage.setItem("userData", JSON.stringify(userData));

      alert("Signup succesful");
    } catch (error) {
      alert(error.message);
    }

    document.getElementById("name-signup").value = "";
    document.getElementById("email-signup").value = "";
    document.getElementById("password-signup").value = "";
  });
