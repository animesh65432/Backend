const sucesscontroler = (req, res) => {
  let { name, email } = req.body;
  console.log(name, email);
  if (name == "" || email == "") {
    return res
      .status(400)
      .send("<p>User did not provide name and email properly</p>");
  } else {
    res.redirect("/");
  }
};
module.exports = sucesscontroler;
