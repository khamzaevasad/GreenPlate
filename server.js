const http = require("http");
const mongodb = require("mongodb");
const connectionString =
  "mongodb+srv://Khamzaevasad:Sb3PmKbyvrzKwLlN@cluster0.7usnmhb.mongodb.net/Recipe?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on Connection MongoDB");
    else {
      console.log("✅ MongoDB connection successful");
      db = client.db();
      module.exports = db;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3002;
      server.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
      });
    }
  }
);
