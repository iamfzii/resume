import jsPDF from 'jspdf';

export function generateATSResumePDF(): void {
  const doc = new jsPDF();
  let y = 20;
  const margin = 20;
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const contentWidth = pageWidth - (2 * margin);
  const lineHeight = 5;

  // Helper function to add new page if needed
  const checkNewPage = (requiredSpace: number): void => {
    if (y + requiredSpace > pageHeight - 20) {
      doc.addPage();
      y = 20;
    }
  };

  // Helper function to add text with proper wrapping
  const addText = (text: string, fontSize: number = 10, isBold: boolean = false): void => {
    doc.setFontSize(fontSize);
    doc.setFont("helvetica", isBold ? "bold" : "normal");
    
    const lines = doc.splitTextToSize(text, contentWidth);
    const requiredSpace = lines.length * lineHeight + 2;
    checkNewPage(requiredSpace);
    
    doc.text(lines, margin, y);
    y += lines.length * lineHeight;
  };

  // Helper function to add section header
  const addSectionHeader = (title: string): void => {
    y += 8;
    checkNewPage(15);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(title.toUpperCase(), margin, y);
    y += 8;
    
    // Add underline
    doc.setLineWidth(0.5);
    doc.line(margin, y - 2, margin + contentWidth, y - 2);
    y += 3;
  };

  // Helper function to add job or project entry
  const addEntry = (title: string, subtitle: string, period: string, items: string[]): void => {
    checkNewPage(30);
    
    // Title
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(title, margin, y);
    y += 6;
    
    // Subtitle and period
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const subtitleLines = doc.splitTextToSize(subtitle, contentWidth - 60);
    doc.text(subtitleLines, margin, y);
    doc.text(period, pageWidth - margin - 50, y);
    y += Math.max(subtitleLines.length * 5, 5) + 3;
    
    // Items/achievements
    items.forEach(item => {
      const lines = doc.splitTextToSize(`• ${item}`, contentWidth - 10);
      checkNewPage(lines.length * lineHeight + 2);
      doc.text(lines, margin + 5, y);
      y += lines.length * lineHeight + 2;
    });
    
    y += 3;
  };

  // HEADER SECTION
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("MUHAMMAD FAZEEL", margin, y);
  y += 8;

  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text("Technical Operations Coordinator", margin, y);
  y += 12;

  // CONTACT INFORMATION
  doc.setFontSize(10);
  doc.text("Email: fazeel.engineer@outlook.com", margin, y);
  doc.text("Phone: +92 300 1234567", margin + 90, y);
  y += 5;
  doc.text("Location: Lahore, Pakistan", margin, y);
  doc.text("LinkedIn: linkedin.com/in/muhammadazeel", margin + 90, y);
  y += 5;
  doc.text("GitHub: github.com/muhammadazeel", margin, y);
  y += 8;

  // PROFESSIONAL SUMMARY
  addSectionHeader("PROFESSIONAL SUMMARY");
  addText("Dynamic Technical Operations Coordinator with 7 years of Computer Science & IT experience specializing in data management, system optimization, and cross-functional team leadership. Proven track record in streamlining operations, implementing automated solutions, and driving technical excellence across diverse projects. Expertise in full-stack development, machine learning implementations, and agile project management methodologies.", 10);

  // TECHNICAL SKILLS
  addSectionHeader("TECHNICAL SKILLS");
  
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Programming Languages:", margin, y);
  y += 5;
  addText("JavaScript, Python, Java, C/C++, HTML/CSS, SQL, PHP", 10);
  y += 3;
  
  doc.setFont("helvetica", "bold");
  doc.text("Frameworks & Libraries:", margin, y);
  y += 5;
  addText("React.js, Node.js, Express.js, TensorFlow, Scikit-learn, Pandas, NumPy, Keras", 10);
  y += 3;
  
  doc.setFont("helvetica", "bold");
  doc.text("Databases & Tools:", margin, y);
  y += 5;
  addText("MySQL, PostgreSQL, MongoDB, Git, Docker, AWS, Linux/Unix, Redis", 10);
  y += 3;
  
  doc.setFont("helvetica", "bold");
  doc.text("Technical Specializations:", margin, y);
  y += 5;
  addText("Data Analysis, Machine Learning, API Development, System Administration, DevOps, Agile/Scrum, Cloud Computing, Microservices Architecture", 10);

  // WORK EXPERIENCE
  addSectionHeader("WORK EXPERIENCE");
  
  addEntry(
    "Technical Operations Coordinator",
    "Tech Solutions Inc. | Lahore, Pakistan",
    "2022 - Present",
    [
      "Coordinated technical operations across 5+ cross-functional teams, improving project delivery efficiency by 35%",
      "Implemented automated monitoring systems reducing system downtime by 40% and improving overall reliability",
      "Led migration of legacy systems to cloud infrastructure, resulting in 25% cost reduction and improved scalability",
      "Designed and maintained technical documentation standards, enhancing team productivity and knowledge sharing",
      "Mentored junior developers and conducted technical training sessions for team skill development",
      "Established CI/CD pipelines and deployment processes, reducing deployment time by 50%"
    ]
  );
  
  addEntry(
    "Software Developer",
    "Digital Innovations Ltd. | Lahore, Pakistan",
    "2019 - 2022",
    [
      "Developed and maintained 10+ web applications using modern JavaScript frameworks and Python backend services",
      "Optimized database queries and system performance, achieving 50% faster response times",
      "Collaborated with UX/UI teams to deliver responsive, user-friendly interfaces for client projects",
      "Implemented RESTful APIs and microservices architecture for scalable application development",
      "Participated in code reviews and established best practices for development team workflows",
      "Built automated testing suites improving code quality and reducing bug reports by 30%"
    ]
  );
  
  addEntry(
    "Junior Developer (Internship)",
    "StartupTech Hub | Lahore, Pakistan",
    "2018 - 2019",
    [
      "Contributed to full-stack development projects using React.js and Node.js technologies",
      "Assisted in database design and implementation for multiple client applications",
      "Gained hands-on experience with version control systems and collaborative development workflows",
      "Supported senior developers in debugging, testing, and deployment processes",
      "Developed mobile-responsive web interfaces following modern design principles"
    ]
  );

  // FEATURED PROJECTS
  addSectionHeader("FEATURED PROJECTS");
  
  addEntry(
    "E-Commerce Platform with Advanced Analytics",
    "Full-stack e-commerce solution with real-time analytics and inventory management",
    "Technologies: React.js, Node.js, MongoDB, Express.js, Chart.js",
    [
      "Implemented secure payment gateway integration with multiple payment providers",
      "Built comprehensive admin dashboard with real-time sales analytics and reporting",
      "Developed responsive design supporting mobile and desktop user experiences",
      "Integrated automated inventory management system with low-stock alerts",
      "Achieved 99.9% uptime with proper error handling and monitoring"
    ]
  );
  
  addEntry(
    "AI-Powered Content Management System",
    "Content management platform with machine learning-based content categorization",
    "Technologies: Python, React.js, TensorFlow, PostgreSQL, Redis",
    [
      "Implemented natural language processing for automatic content tagging",
      "Developed recommendation engine improving user engagement by 45%",
      "Built scalable architecture handling 10,000+ concurrent users",
      "Created comprehensive API documentation and developer tools",
      "Integrated real-time search functionality with Elasticsearch"
    ]
  );
  
  addEntry(
    "Real-Time Collaboration Tool",
    "Web-based collaboration platform with real-time editing and video conferencing",
    "Technologies: React.js, Socket.io, Node.js, WebRTC, MySQL",
    [
      "Implemented real-time document editing with conflict resolution",
      "Integrated video conferencing capabilities using WebRTC technology",
      "Built comprehensive project management dashboard with task tracking",
      "Developed mobile-responsive interface for cross-platform accessibility",
      "Achieved sub-100ms latency for real-time updates"
    ]
  );

  // TECHNICAL DEMONSTRATIONS
  addSectionHeader("TECHNICAL DEMONSTRATIONS");
  
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Web Development Projects:", margin, y);
  y += 6;
  
  const webProjects = [
    "Cryptocurrency Price Interface - Real-time API integration with DOM manipulation",
    "React Counter Application - Component-based state management with hooks",
    "JavaScript Calculator - Arithmetic operations with responsive input handling",
    "Online Compiler UI - Simulated code editor with interactive feedback",
    "Stopwatch Timer - Precision timing with start/pause/reset functionality"
  ];
  
  webProjects.forEach(project => {
    addText(`• ${project}`, 10);
  });
  
  y += 5;
  doc.setFont("helvetica", "bold");
  doc.text("Machine Learning Projects:", margin, y);
  y += 6;
  
  const mlProjects = [
    "Neural Network Digit Recognition - MNIST dataset classification with TensorFlow/Keras",
    "Linear Regression Salary Prediction - Experience-based prediction with Scikit-learn",
    "Decision Tree Food Preference Classifier - Demographic-based classification",
    "K-NN Algorithm Implementation - Food preference accuracy comparison",
    "Unsupervised Learning Clustering - K-means, DBSCAN with visualization"
  ];
  
  mlProjects.forEach(project => {
    addText(`• ${project}`, 10);
  });

  // EDUCATION
  addSectionHeader("EDUCATION");
  
  addEntry(
    "Bachelor's Degree in Computer Science",
    "University of Engineering and Technology | Lahore, Pakistan",
    "2014 - 2018",
    [
      "Graduated with strong foundation in algorithms, data structures, and software engineering",
      "Completed coursework in database systems, computer networks, and artificial intelligence",
      "Participated in coding competitions and technical workshops"
    ]
  );
  
  addEntry(
    "Diploma in Information Technology",
    "Government College of Technology | Lahore, Pakistan",
    "2012 - 2014",
    [
      "Specialized in computer hardware, networking, and system administration",
      "Gained practical experience in troubleshooting and technical support"
    ]
  );

  // CERTIFICATIONS
  addSectionHeader("CERTIFICATIONS");
  
  addEntry(
    "Android Developer Certification",
    "PNY Trainings",
    "2018",
    [
      "Comprehensive Android development training covering Java programming",
      "Android Studio, UI/UX design principles, and mobile app deployment",
      "Hands-on experience building native Android applications"
    ]
  );

  // ADDITIONAL SKILLS
  addSectionHeader("ADDITIONAL QUALIFICATIONS");
  
  const additionalSkills = [
    "Project Management: Agile/Scrum methodologies, Sprint planning, Team coordination",
    "System Administration: Linux/Unix systems, Server configuration, Performance monitoring",
    "Cloud Technologies: AWS services, Docker containerization, Microservices deployment",
    "Data Analysis: Statistical analysis, Data visualization, Performance metrics",
    "Quality Assurance: Code reviews, Testing frameworks, Debugging techniques"
  ];
  
  additionalSkills.forEach(skill => {
    addText(`• ${skill}`, 10);
  });

  // Save the PDF
  doc.save("Muhammad_Fazeel_ATS_Resume.pdf");
}