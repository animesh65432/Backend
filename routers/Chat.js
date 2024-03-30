import express from "express";
import fs from "fs";
const router = express.Router();

router.get("/", (req, res) => {
  const username = req.query.username;

  return res.status(200).send(`
    <html>
      <body>
        <div>
          <h3> username: ${username}</h3>
          <form id="messageForm" action="/" method="POST">
            <input placeholder="Please Put Your Message here" id="chat" name="message"></input>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div id="messageContainer"></div>
      </body>
    </html>
  `);
});

router.post("/", (req, res) => {
  const message = req.body.message;
  console.log(req.body, message);

  fs.appendFile("file.txt", message, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).send("<h4>Something Went Wrong</h4>");
    } else {
      const responseHtml = `
        <html>
          <body>
            <div>
              <h4>Message Submitted Successfully!</h4>
              <p>Your message: ${message}</p>
              <form id="messageForm" action="/" method="POST">
                <input placeholder="Please Put Your Message here" id="chat" name="message"></input>
                <button type="submit">Send Message</button>
              </form>
            </div>
            <div id="messageContainer"></div>
          </body>
        </html>
      `;
      res.status(200).send(responseHtml);
    }
  });
});

export default router;
