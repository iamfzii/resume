import jsPDF from 'jspdf';

export function generateSimpleResumePDF(): void {
  const doc = new jsPDF();
  let y = 20;
  const margin = 20;
  const pageWidth = doc.internal.pageSize.width;

  // Header
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("Muhammad Fazeel", margin, y);
  y += 8;

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("Technical Operations Coordinator", margin, y);
  y += 12;

  // Contact Info
  doc.setFontSize(10);
  doc.text("Email: fazeel.engineer@outlook.com", margin, y);
  doc.text("Phone: +92 300 1234567", pageWidth / 2, y);
  y += 6;
  doc.text("Location: Lahore, Pakistan", margin, y);
  doc.text("LinkedIn: linkedin.com/in/muhammadazeel", pageWidth / 2, y);
  y += 6;
  doc.text("GitHub: github.com/muhammadazeel", margin, y);
  y += 12;

  // Professional Summary
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("PROFESSIONAL SUMMARY", margin, y);
  y += 8;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const summary = "Dynamic Technical Operations Coordinator with 7 years of Computer Science & IT experience specializing in data management, system optimization, and cross-functional team leadership. Proven track record in streamlining operations, implementing automated solutions, and driving technical excellence across diverse projects.";
  const summaryLines = doc.splitTextToSize(summary, pageWidth - 2 * margin);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 5 + 8;

  // Skills
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("TECHNICAL SKILLS", margin, y);
  y += 8;

  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Programming Languages:", margin, y);
  y += 5;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("JavaScript, Python, Java, C/C++, HTML/CSS, SQL, PHP", margin + 5, y);
  y += 8;

  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Frameworks & Libraries:", margin, y);
  y += 5;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("React.js, Node.js, Express.js, TensorFlow, Scikit-learn, Pandas, NumPy", margin + 5, y);
  y += 8;

  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Databases & Tools:", margin, y);
  y += 5;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("MySQL, PostgreSQL, MongoDB, Git, Docker, AWS, Linux/Unix", margin + 5, y);
  y += 12;

  // Experience
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("WORK EXPERIENCE", margin, y);
  y += 8;

  // Job 1
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Technical Operations Coordinator", margin, y);
  y += 6;
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Tech Solutions Inc. | Lahore, Pakistan", margin, y);
  doc.text("2022 - Present", pageWidth - margin - 40, y);
  y += 8;

  doc.setFontSize(10);
  const achievements1 = [
    "Coordinated technical operations across 5+ cross-functional teams, improving project delivery efficiency by 35%",
    "Implemented automated monitoring systems reducing system downtime by 40% and improving overall reliability",
    "Led migration of legacy systems to cloud infrastructure, resulting in 25% cost reduction and improved scalability"
  ];

  achievements1.forEach(achievement => {
    const lines = doc.splitTextToSize(`• ${achievement}`, pageWidth - margin - 10);
    doc.text(lines, margin + 5, y);
    y += lines.length * 5 + 2;
  });

  y += 8;

  // Job 2
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Software Developer", margin, y);
  y += 6;
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Digital Innovations Ltd. | Lahore, Pakistan", margin, y);
  doc.text("2019 - 2022", pageWidth - margin - 40, y);
  y += 8;

  doc.setFontSize(10);
  const achievements2 = [
    "Developed and maintained 10+ web applications using modern JavaScript frameworks and Python backend services",
    "Optimized database queries and system performance, achieving 50% faster response times",
    "Collaborated with UX/UI teams to deliver responsive, user-friendly interfaces for client projects"
  ];

  achievements2.forEach(achievement => {
    const lines = doc.splitTextToSize(`• ${achievement}`, pageWidth - margin - 10);
    doc.text(lines, margin + 5, y);
    y += lines.length * 5 + 2;
  });

  // Check if we need a new page
  if (y > 240) {
    doc.addPage();
    y = 20;
  } else {
    y += 12;
  }

  // Education
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("EDUCATION", margin, y);
  y += 8;

  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Bachelor's Degree in Computer Science", margin, y);
  y += 6;
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("University of Engineering and Technology | Lahore, Pakistan", margin, y);
  doc.text("2014 - 2018", pageWidth - margin - 40, y);
  y += 10;

  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Diploma in Information Technology", margin, y);
  y += 6;
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Government College of Technology | Lahore, Pakistan", margin, y);
  doc.text("2012 - 2014", pageWidth - margin - 40, y);
  y += 12;

  // Certifications
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("CERTIFICATIONS", margin, y);
  y += 8;

  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Android Developer Certification", margin, y);
  y += 5;
  doc.setFont("helvetica", "normal");
  doc.text("PNY Trainings | 2018", margin, y);

  // Save the PDF
  doc.save("Muhammad_Fazeel_Resume.pdf");
}