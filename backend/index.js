const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5050;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://arkababi31:9GvSBqTWOC3BDcEH@cluster0.rxqggdz.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserData = mongoose.model('UserData', {
  personalDetails: {
    name: String,
    email: String,
    phone: Number,
    whatsapp: Number,
  },
  addressDetails: {
    street: String,
    city: String,
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

app.post('/api/sendData', async (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
