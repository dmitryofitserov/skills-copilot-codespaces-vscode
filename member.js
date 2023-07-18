function skillsMember() {
    let skills = ["HTML", "CSS", "JavaScript", "Python", "Java", "C++"];
    let skillsList = document.getElementById("skills");
    let skillCount = skills.length;
    let skillString = "";
    for (let i = 0; i < skillCount; i++) {
        skillString += `<li class="list-group-item">${skills[i]}</li>`;
    }
    skillsList.innerHTML = skillString;
}