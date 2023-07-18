function skillMember() {
  const member = {
    name: "Skill Member",
    age: 25,
    skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
    address: {
      street: "Planet Mars",
      city: "Solar System",
      planet: "Earth",
    },
    dateOfBirth() {
      console.log("DOB");
    },
    getAge() {
      console.log("Age");
    },
  };
  const { name, age, skills, address, dateOfBirth, getAge } = member;
  console.log(name, age, skills, address, dateOfBirth, getAge);
}