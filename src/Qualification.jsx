import React from "react";

function Qualifications() {
  const educationData = [
    {
      title: "SSLC",
      school: "Sri Mahalakshmi Matric Hr. Sec. School",
      location: "Sankarankovil",
      year: "2022",
      result: 92.4
    },
    {
      title: "HSC",
      school: "Sri Mahalakshmi Matric Hr. Sec. School",
      location: "Sankarankovil",
      year: "2024",
      result: 89.3
    },
    {
      title: "College",
      school: "Government College Of Engineering",
      location: "Tirunelveli",
      year: "2025 - Present",
      result: null
    }
  ];

  return (
    <section className="education-timeline" id="qualification">
      <h1>Qualifications</h1>

      {educationData.map((edu, index) => (
        <div className="timeline-card" key={index}>
          <div className="icon">
            {edu.title === "College" ? "🎓" : "🏫"}
          </div>

          {/* Title (SSLC/HSC/College) */}
          <h1>{edu.title}</h1>

          {/* School / College name */}
          <h3>{edu.school}</h3>

          {/* Location */}
          <h3>{edu.location}</h3>

          {/* Year */}
          <h4>{edu.year}</h4>

          {/* Percentage Bar (Only for SSLC & HSC) */}
          {edu.result !== null && (
            <div className="progress-container">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${edu.result}%` }}
                ></div>
              </div>
              <p className="percent-text">{edu.result}%</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Qualifications;
