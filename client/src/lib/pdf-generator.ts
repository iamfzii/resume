import jsPDF from 'jspdf';

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  skills: {
    category: string;
    items: string[];
  }[];
  experience: {
    title: string;
    company: string;
    period: string;
    location: string;
    achievements: string[];
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    highlights: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    location: string;
  }[];
  certifications: {
    title: string;
    issuer: string;
    year: string;
  }[];
}

export function generateResumePDF(data: ResumeData): void {
  const doc = new jsPDF();
  let yPosition = 20;
  const pageWidth = doc.internal.pageSize.width;
  const margin = 20;
  const contentWidth = pageWidth - (2 * margin);
  const lineHeight = 6;

  // Helper function to add text with word wrapping
  const addWrappedText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 10): number => {
    if (!text || text.trim() === '') return y;
    
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, maxWidth);
    
    for (let i = 0; i < lines.length; i++) {
      if (y + (i * lineHeight) > doc.internal.pageSize.height - 20) {
        doc.addPage();
        y = 20;
        i = 0;
      }
      doc.text(lines[i], x, y + (i * lineHeight));
    }
    
    return y + (lines.length * lineHeight);
  };

  // Helper function to check if we need a new page
  const checkPageBreak = (requiredSpace: number): number => {
    if (yPosition + requiredSpace > doc.internal.pageSize.height - 20) {
      doc.addPage();
      return 20;
    }
    return yPosition;
  };

  // Header
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text(data.personalInfo.name || "Muhammad Fazeel", margin, yPosition);
  yPosition += 10;

  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text(data.personalInfo.title || "Technical Operations Coordinator", margin, yPosition);
  yPosition += 10;

  // Contact Information
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  
  const contactInfo = [
    data.personalInfo.email || "fazeel.engineer@outlook.com",
    data.personalInfo.phone || "+92 300 1234567",
    data.personalInfo.location || "Lahore, Pakistan",
    data.personalInfo.linkedin || "linkedin.com/in/muhammadazeel",
    data.personalInfo.github || "github.com/muhammadazeel"
  ];

  contactInfo.forEach((info, index) => {
    if (index % 2 === 0) {
      doc.text(info, margin, yPosition);
      if (contactInfo[index + 1]) {
        doc.text(contactInfo[index + 1], pageWidth / 2, yPosition);
      }
      yPosition += 6;
    }
  });

  yPosition += 8;

  // Professional Summary
  yPosition = checkPageBreak(30);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("PROFESSIONAL SUMMARY", margin, yPosition);
  yPosition += 8;

  doc.setFont("helvetica", "normal");
  yPosition = addWrappedText(data.summary, margin, yPosition, contentWidth, 10);
  yPosition += 8;

  // Skills
  yPosition = checkPageBreak(40);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("TECHNICAL SKILLS", margin, yPosition);
  yPosition += 8;

  data.skills.forEach(skillGroup => {
    yPosition = checkPageBreak(15);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text(`${skillGroup.category}:`, margin, yPosition);
    yPosition += 5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const skillsText = skillGroup.items.join(", ");
    yPosition = addWrappedText(skillsText, margin + 5, yPosition, contentWidth - 5, 10);
    yPosition += 5;
  });

  yPosition += 3;

  // Experience
  yPosition = checkPageBreak(40);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("WORK EXPERIENCE", margin, yPosition);
  yPosition += 8;

  data.experience.forEach(exp => {
    yPosition = checkPageBreak(30);
    
    // Job title and company
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(exp.title, margin, yPosition);
    yPosition += 6;

    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text(`${exp.company} | ${exp.location}`, margin, yPosition);
    doc.text(exp.period, pageWidth - margin - 50, yPosition);
    yPosition += 8;

    // Achievements
    exp.achievements.forEach(achievement => {
      yPosition = checkPageBreak(8);
      doc.setFontSize(10);
      yPosition = addWrappedText(`• ${achievement}`, margin + 5, yPosition, contentWidth - 5, 10);
      yPosition += 2;
    });

    yPosition += 5;
  });

  // Projects
  yPosition = checkPageBreak(40);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("FEATURED PROJECTS", margin, yPosition);
  yPosition += 8;

  data.projects.forEach(project => {
    yPosition = checkPageBreak(25);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(project.title, margin, yPosition);
    yPosition += 6;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    yPosition = addWrappedText(project.description, margin, yPosition, contentWidth, 10);
    yPosition += 3;

    doc.setFont("helvetica", "bold");
    doc.text("Technologies:", margin, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text(project.technologies.join(", "), margin + 35, yPosition);
    yPosition += 8;

    project.highlights.forEach(highlight => {
      yPosition = checkPageBreak(8);
      yPosition = addWrappedText(`• ${highlight}`, margin + 5, yPosition, contentWidth - 5, 10);
      yPosition += 2;
    });

    yPosition += 5;
  });

  // Education
  yPosition = checkPageBreak(30);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("EDUCATION", margin, yPosition);
  yPosition += 8;

  data.education.forEach(edu => {
    yPosition = checkPageBreak(15);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(edu.degree, margin, yPosition);
    yPosition += 6;

    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text(`${edu.institution} | ${edu.location}`, margin, yPosition);
    doc.text(edu.period, pageWidth - margin - 50, yPosition);
    yPosition += 10;
  });

  // Certifications
  if (data.certifications.length > 0) {
    yPosition = checkPageBreak(30);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("CERTIFICATIONS", margin, yPosition);
    yPosition += 8;

    data.certifications.forEach(cert => {
      yPosition = checkPageBreak(10);
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text(cert.title, margin, yPosition);
      yPosition += 5;

      doc.setFont("helvetica", "normal");
      doc.text(`${cert.issuer} | ${cert.year}`, margin, yPosition);
      yPosition += 8;
    });
  }

  // Save the PDF
  doc.save(`${data.personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`);
}

// Resume data for Muhammad Fazeel
export const resumeData: ResumeData = {
  personalInfo: {
    name: "Muhammad Fazeel",
    title: "Technical Operations Coordinator",
    email: "fazeel.engineer@outlook.com",
    phone: "+92 300 1234567",
    location: "Lahore, Pakistan",
    linkedin: "linkedin.com/in/muhammadazeel",
    github: "github.com/muhammadazeel"
  },
  summary: "Dynamic Technical Operations Coordinator with 7 years of Computer Science & IT experience specializing in data management, system optimization, and cross-functional team leadership. Proven track record in streamlining operations, implementing automated solutions, and driving technical excellence across diverse projects. Expertise in full-stack development, machine learning implementations, and agile project management methodologies.",
  skills: [
    {
      category: "Programming Languages",
      items: ["JavaScript", "Python", "Java", "C/C++", "HTML/CSS", "SQL", "PHP"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React.js", "Node.js", "Express.js", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"]
    },
    {
      category: "Databases & Tools",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Git", "Docker", "AWS", "Linux/Unix"]
    },
    {
      category: "Technical Skills",
      items: ["Data Analysis", "Machine Learning", "API Development", "System Administration", "DevOps", "Agile/Scrum"]
    }
  ],
  experience: [
    {
      title: "Technical Operations Coordinator",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "Lahore, Pakistan",
      achievements: [
        "Coordinated technical operations across 5+ cross-functional teams, improving project delivery efficiency by 35%",
        "Implemented automated monitoring systems reducing system downtime by 40% and improving overall reliability",
        "Led migration of legacy systems to cloud infrastructure, resulting in 25% cost reduction and improved scalability",
        "Designed and maintained technical documentation standards, enhancing team productivity and knowledge sharing",
        "Mentored junior developers and conducted technical training sessions for team skill development"
      ]
    },
    {
      title: "Software Developer",
      company: "Digital Innovations Ltd.",
      period: "2019 - 2022",
      location: "Lahore, Pakistan",
      achievements: [
        "Developed and maintained 10+ web applications using modern JavaScript frameworks and Python backend services",
        "Optimized database queries and system performance, achieving 50% faster response times",
        "Collaborated with UX/UI teams to deliver responsive, user-friendly interfaces for client projects",
        "Implemented RESTful APIs and microservices architecture for scalable application development",
        "Participated in code reviews and established best practices for development team workflows"
      ]
    },
    {
      title: "Junior Developer (Internship)",
      company: "StartupTech Hub",
      period: "2018 - 2019",
      location: "Lahore, Pakistan",
      achievements: [
        "Contributed to full-stack development projects using React.js and Node.js technologies",
        "Assisted in database design and implementation for multiple client applications",
        "Gained hands-on experience with version control systems and collaborative development workflows",
        "Supported senior developers in debugging, testing, and deployment processes"
      ]
    }
  ],
  projects: [
    {
      title: "E-Commerce Platform with Advanced Analytics",
      description: "Full-stack e-commerce solution with real-time analytics, inventory management, and customer insights dashboard.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Chart.js"],
      highlights: [
        "Implemented secure payment gateway integration with multiple payment providers",
        "Built comprehensive admin dashboard with real-time sales analytics and reporting",
        "Developed responsive design supporting mobile and desktop user experiences",
        "Integrated automated inventory management system with low-stock alerts"
      ]
    },
    {
      title: "AI-Powered Content Management System",
      description: "Content management platform with machine learning-based content categorization and user behavior analysis.",
      technologies: ["Python", "React.js", "TensorFlow", "PostgreSQL", "Redis"],
      highlights: [
        "Implemented natural language processing for automatic content tagging",
        "Developed recommendation engine improving user engagement by 45%",
        "Built scalable architecture handling 10,000+ concurrent users",
        "Created comprehensive API documentation and developer tools"
      ]
    },
    {
      title: "Real-Time Collaboration Tool",
      description: "Web-based collaboration platform with real-time editing, video conferencing, and project management features.",
      technologies: ["React.js", "Socket.io", "Node.js", "WebRTC", "MySQL"],
      highlights: [
        "Implemented real-time document editing with conflict resolution",
        "Integrated video conferencing capabilities using WebRTC technology",
        "Built comprehensive project management dashboard with task tracking",
        "Developed mobile-responsive interface for cross-platform accessibility"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "University of Engineering and Technology",
      period: "2014 - 2018",
      location: "Lahore, Pakistan"
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Government College of Technology",
      period: "2012 - 2014",
      location: "Lahore, Pakistan"
    }
  ],
  certifications: [
    {
      title: "Android Developer Certification",
      issuer: "PNY Trainings",
      year: "2018"
    }
  ]
};