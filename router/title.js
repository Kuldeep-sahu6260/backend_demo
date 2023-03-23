const express = require("express");
const router = express.Router();
const {updateTitle,getCategories } = require("../controller/title");
const Title = require("../models/title");
const multer = require("multer");

const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));//___dir mens src and then create uplad_
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});


const upload = multer({ storage });

router.post(
  "/title/update",
  upload.single("categoryImage"),
  updateTitle
);

router.get(
  "/title",
  getCategories
)



module.exports = router;
