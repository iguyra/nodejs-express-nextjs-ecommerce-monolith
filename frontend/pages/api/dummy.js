const dummy = (req, res) => {
  const user = {
    name: "ress",
    password: 1234,
  };

  res.status(201).json({
    status: "success",
    token: "",
    data: {
      user: user,
    },
  });
};

module.exports = dummy;
