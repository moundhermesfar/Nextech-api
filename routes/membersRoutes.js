const express = require("express");
const Member = require("../models/memberModel.js");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const members = await Member.find({});

    return response.status(200).json({
      count: members.length,
      data: members,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.post("/", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.familyName ||
      !request.body.faculty ||
      !request.body.yearOfStudying ||
      !request.body.email ||
      !request.body.motivation ||
      !request.body.skills
    ) {
      return response.status(400).send({
        message: "All feilds are required",
      });
    }
    const newMember = {
      name: request.body.name,
      familyName: request.body.familyName,
      faculty: request.body.faculty,
      yearOfStudying: request.body.yearOfStudying,
      email: request.body.email,
      motivation: request.body.motivation,
      skills: request.body.skills,
      comments: request.body.comments,
    };

    const member = await Member.create(newMember);

    return response.status(201).send(member);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

module.exports = router;
