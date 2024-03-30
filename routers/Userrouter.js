const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send(`
    <html>
      <form id="loginForm" action="/" method="GET">
        <input type="text" placeholder="Please put your name here" name="username" id="username"></input>
        <button type="submit">Add</button>
      </form>
      <script>
        document.getElementById("loginForm").addEventListener("submit", function(event) {
          event.preventDefault();
          localStorage.setItem("username", document.getElementById("username").value);
        });
      </script>
    </html>
  `);
});

module.exports = router;
