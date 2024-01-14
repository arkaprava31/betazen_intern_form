const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 5050;

const date = new Date();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://arkababi31:9GvSBqTWOC3BDcEH@cluster0.rxqggdz.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let fname; let fpath;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname;
    cb(null, fileName);
    // req.body.fileName = fileName;
    filePath = path.join('uploads', fileName); 
    location = path.join(__dirname, filePath)

    fname = fileName;
    fpath = location;

    console.log(fname);
    console.log(fpath);
  },
});

const upload = multer({ storage: storage });

const UserData = mongoose.model('UserData', {
  uploadTime: { type: Date, default: date },
  cv: {
    fileName: {type: String, default: fname},
    filePath: {type: String, default: fpath},
  },
  personalDetails: {
    name: String,
    email: String,
    phone: Number,
    whatsapp: Number,
  },
  addressDetails: {
    address: String,
    state: String,
    country: String,
    pin: Number,
  },
  educationDetails: {
    college: String,
    dept: String,
    year: String,
  },
  workDetails: {
    codinglang: String,
    level: String,
    ReactDeveloper: {type: Boolean, default: false},
    WordPressDeveloper: {type: Boolean, default: false},
    NodejsDeveloper: {type: Boolean, default: false},
    FlutterDeveloper: {type: Boolean, default: false},
    AndroidDeveloper: {type: Boolean, default: false},
    IOSDeveloper: {type: Boolean, default: false},
    UIUXDesigner: {type: Boolean, default: false},
    GraphicsDesigner: {type: Boolean, default: false},
    BlogWritingDataCollection: {type: Boolean, default: false},
    DataCollection: {type: Boolean, default: false},
  },
  otherDetails: {
    expectations: String,
    dailyTime: String,
    startingDate: String,
    whyYou: String,
    linkdin: String,
    github: String,
    drive: String,
    msgForUs: String,
  }
});



app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.status(200).send('File uploaded!');
});

app.post('/api/sendData', upload.single('file'), async (req, res) => {
  try {
    const userData = req.body;

    const newUserData = new UserData(userData);
    await newUserData.save();

    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
