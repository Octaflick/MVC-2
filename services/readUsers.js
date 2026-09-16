const readUsers = () => {
  const pathToFile = path.join(__dirname, "users.json");
  fs.readFile(pathToFile, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
    // handles both /users and /users?minAge=20
    const users = JSON.parse(data);
    if (req.query.minAge) {
      const minAge = Number(req.query.minAge);
      const filteredUsers = users.filter((user) => user.age >= minAge);
      return res.status(200).json(filteredUsers);
    }
    res.status(200).json(users);
  });
};

module.exports = readUsers;
