const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/firstdatabasekatoch")
  .then(() => console.log("connection successfully......"))
  .catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: String,
  cast: String,
  sex: String,
});

const Playlist = new mongoose.model("Playlist", playlistSchema);

//create documents or insert
const newmethod = async () => {
  try {
    const reactPlaylist = new Playlist({
      name: "shivaji",
      type: "male",
      cast: "rajput",
      sex: "male",
    });
    const result = await reactPlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// newmethod();

//how to get or read document

const getDocument = async () => {
  const result = await Playlist.find({ type: "male" })
    .select({ name: 1 })
    .limit(1);
  console.log(result);
};
getDocument();
