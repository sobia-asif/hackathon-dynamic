interface ResumeData {
    name: string;
    email: string;
    phone: string;
    skills: string[];
    experience: string;
  }
  
  document.getElementById("generateResume")?.addEventListener("click", () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",");
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
  
    if (name && email && phone && skills && experience) {
      const resumeData: ResumeData = {
        name,
        email,
        phone,
        skills: skills.map(skill => skill.trim()),
        experience,
      };
  
      displayResume(resumeData);
    } else {
      alert("Please fill in all fields.");
    }
  });
  
  function displayResume(data: ResumeData) {
    const resumeSection = document.getElementById("resumeSection");
    const resumeOutput = document.getElementById("resumeOutput");
  
    if (resumeSection && resumeOutput) {
      resumeSection.style.display = "block";
      resumeOutput.innerHTML = `
        <div class="resume-card">
          <h2>${data.name}</h2>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Skills:</strong> ${data.skills.join(", ")}</p>
          <p><strong>Experience:</strong> ${data.experience}</p>
        </div>
      `;
    }
  }
  