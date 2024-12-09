var _a;
(_a = document.getElementById("generateResume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var skills = document.getElementById("skills").value.split(",");
    var experience = document.getElementById("experience").value;
    if (name && email && phone && skills && experience) {
        var resumeData = {
            name: name,
            email: email,
            phone: phone,
            skills: skills.map(function (skill) { return skill.trim(); }),
            experience: experience,
        };
        displayResume(resumeData);
    }
    else {
        alert("Please fill in all fields.");
    }
});
function displayResume(data) {
    var resumeSection = document.getElementById("resumeSection");
    var resumeOutput = document.getElementById("resumeOutput");
    if (resumeSection && resumeOutput) {
        resumeSection.style.display = "block";
        resumeOutput.innerHTML = "\n        <div class=\"resume-card\">\n          <h2>".concat(data.name, "</h2>\n          <p><strong>Email:</strong> ").concat(data.email, "</p>\n          <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n          <p><strong>Skills:</strong> ").concat(data.skills.join(", "), "</p>\n          <p><strong>Experience:</strong> ").concat(data.experience, "</p>\n        </div>\n      ");
    }
}
