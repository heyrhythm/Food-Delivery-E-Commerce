// In your Express.js server

app.get("/api/search", (req, res) => {
    const query = req.query.query.toLowerCase();
    const data = [
      { id: 1, name: "Pizza" },
      { id: 2, name: "Burger" },
      { id: 3, name: "Pasta" },
      { id: 4, name: "Sushi" },
    ];
  
    const filteredResults = data.filter(item =>
      item.name.toLowerCase().includes(query)
    );
  
    res.json(filteredResults);
  });
  