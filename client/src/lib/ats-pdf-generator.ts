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
  addText("Technical Operations Coordinator with 7 years of Computer Science & IT background and experience facilitating the execution of full-stack applications, AI workflows, and cloud-based solutions. Adept at translating functional requirements into coordinated technical deliverables, supporting development cycles, and troubleshooting deployment pipelines. Demonstrated ability to work across system layers—from API integrations and database management to user-facing components and machine learning models—while maintaining operational continuity across tools, teams, and timelines.", 10);

  // TECHNICAL SKILLS
  addSectionHeader("TECHNICAL SKILLS");
  
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Programming & Scripting Languages:", margin, y);
  y += 5;
  addText("Python, JavaScript, Java, C++, HTML5, CSS3, Bash, XML, JSON", 10);
  y += 3;
  
  doc.setFont("helvetica", "bold");
  doc.text("Frontend Development & UI Technologies:", margin, y);
  y += 5;
  addText("React.js, Tailwind CSS, Bootstrap, HTML/CSS, Responsive Web Design, DOM Manipulation, Component-Based Architecture, State Management, UI Prototyping, Figma to Code Conversion", 10);
  y += 3;
  
  doc.setFont("helvetica", "bold");
  doc.text("Backend Development & API Integration:", margin, y);
  y += 5;
  addText("Node.js, Express.js, RESTful APIs, API Testing (Postman), CRUD Operations, Authentication & Authorization Workflows", 10);
  y += 3;
  
  doc.setFont("helvetica", "bold");
  doc.text("Databases & Cloud Storage:", margin, y);
  y += 5;
  addText("MongoDB, Firebase Realtime Database, NoSQL Databases, Firestore (basic), Data Persistence, Cloud-Based Data Sync", 10);
  y += 3;
  
  doc.setFont("helvetica", "bold");
  doc.text("Data Science & Machine Learning:", margin, y);
  y += 5;
  addText("Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, OpenCV, TensorFlow, Keras, TfidfVectorizer, NLTK, Mediapipe, Data Preprocessing, Data Visualization, Regression, Classification, Clustering, Model Training, Accuracy Evaluation, Supervised & Unsupervised Learning", 10);
  y += 3;
  
  doc.setFont("helvetica", "bold");
  doc.text("AI & Automation Tools:", margin, y);
  y += 5;
  addText("ChatGPT, Gemini, GitHub Copilot, Notion AI, Canva AI, Midjourney, AI Text Classification, Prompt Engineering, NLP Implementation", 10);
  y += 3;
  
  doc.setFont("helvetica", "bold");
  doc.text("DevOps, Hosting & Deployment:", margin, y);
  y += 5;
  addText("cPanel, WHM, Netlify, Vercel, FTP, Git, GitHub, CI/CD Awareness, DNS Management, Domain Configuration, Web Hosting Management, WordPress CMS, Google Workspace Admin", 10);
  y += 3;
  
  doc.setFont("helvetica", "bold");
  doc.text("Project Management & Agile Tools:", margin, y);
  y += 5;
  addText("Jira, Trello, Asana, ClickUp, Slack, Google Sheets, Agile Methodologies, Sprint Planning, Task Tracking, Kanban Boards, Team Collaboration", 10);
  y += 3;
  
  doc.setFont("helvetica", "bold");
  doc.text("Marketing & Product Tools:", margin, y);
  y += 5;
  addText("Facebook Ads Manager, Meta Pixel, A/B Testing, Campaign Tracking, Landing Page Deployment, Ad Creative Coordination", 10);
  y += 3;
  
  doc.setFont("helvetica", "bold");
  doc.text("Networking & Systems:", margin, y);
  y += 5;
  addText("OSI Model, TCP/IP, DNS Configuration, DHCP, VPN Setup, Port Management, HTTP/HTTPS Protocols, Basic Linux CLI, Network Troubleshooting, System Support", 10);

  // WORK EXPERIENCE
  addSectionHeader("WORK EXPERIENCE");
  
  addEntry(
    "Project & Marketing Lead",
    "Capestone Shipping - Dubai (Remote)",
    "Feb 2024 - Present",
    [
      "Led cross-functional teams across logistics, hosting, and marketing for 50+ international clients",
      "Managed AED 100k+ monthly project portfolio with 97% on-time delivery",
      "Oversaw web hosting, server setup, domain, and email configurations for 30+ clients",
      "Executed campaigns driving 45% higher engagement and 25% revenue growth",
      "Applied Agile (Scrum) to cut project delays by 35% and improve delivery speed",
      "Reported KPIs weekly to Dubai HQ and used tools like Jira, Trello, and Asana for team coordination"
    ]
  );
  
  addEntry(
    "Project Assistant & Coordinator",
    "GODEV",
    "June 2022 - Jan 2024",
    [
      "Coordinated schedules and resources across 5 teams, delivering 40+ projects & modules with high client satisfaction",
      "Facilitated 60+ client meetings resulting in 98% requirement accuracy & zero scope creep incidents",
      "Monitored multiple project progress, reporting risks and corrective actions to senior management",
      "Supported Agile ceremonies for teams of 6-10 developers",
      "Maintained documentation and version control, reducing communication gaps by 50%",
      "Trained 3 juniors on project management and tools",
      "Applied Agile project coordination using the Scrum framework",
      "Led cross-functional team leadership with effective time management & task prioritization"
    ]
  );
  
  addEntry(
    "Web Developer Intern (MERN Stack)",
    "GODEV",
    "March 2022 - June 2022",
    [
      "Contributed to front-end development tasks using HTML, CSS, and JavaScript",
      "Worked in an Agile environment with regular sprint planning and team collaboration",
      "Participated in standups, project updates, and code versioning discussions",
      "Gained hands-on experience with MERN stack development and project coordination"
    ]
  );

  // FEATURED PROJECTS
  addSectionHeader("FEATURED PROJECTS");
  
  addEntry(
    "Messaging Android Application",
    "Native Android messaging application with modern UI design",
    "Tech Stack: Java, Android Studio, XML, Material Design, RecyclerView",
    [
      "Designed native Android UI with Material Design principles",
      "Implemented RecyclerView for dynamic message loading and display",
      "Applied custom XML layouts for responsive user interface",
      "Integrated modern Android development best practices"
    ]
  );
  
  addEntry(
    "Tax Calculator Web App",
    "Interactive web application for tax calculations with responsive design",
    "Tech Stack: React.js, JavaScript, HTML, CSS, Bootstrap, Figma",
    [
      "Converted static Figma designs into responsive React components",
      "Implemented real-time form logic for tax calculations",
      "Applied React state management for user input handling",
      "Created responsive design with Bootstrap framework"
    ]
  );
  
  addEntry(
    "Fake News Classification System",
    "Machine learning system for automated fake news detection",
    "Tech Stack: Python, Scikit-learn, NLTK, TfidfVectorizer",
    [
      "Preprocessed text data for machine learning model training",
      "Applied TF-IDF vectorization for text feature extraction",
      "Trained logistic regression model for binary classification",
      "Evaluated classification accuracy and model performance metrics"
    ]
  );
  
  addEntry(
    "Hand Gesture Presentation Controller",
    "Computer vision application for gesture-based presentation control",
    "Tech Stack: Python, OpenCV, Mediapipe, PyAutoGUI",
    [
      "Captured hand landmarks using Mediapipe computer vision library",
      "Integrated real-time gesture recognition with screen control automation",
      "Implemented PyAutoGUI for presentation navigation commands",
      "Developed real-time video processing pipeline"
    ]
  );
  
  addEntry(
    "Logistics Dashboard (Internship Project)",
    "Full-stack dashboard for logistics operations management",
    "Tech Stack: MERN Stack (MongoDB, Express.js, React.js, Node.js), Axios",
    [
      "Built frontend dashboard views with React.js components",
      "Integrated REST APIs for backend data flow using Axios",
      "Participated in feature coordination during development sprints",
      "Collaborated with development team using Agile methodologies"
    ]
  );
  
  addEntry(
    "Titanic Survival Prediction",
    "Data science project using machine learning for survival prediction",
    "Tech Stack: Python, Pandas, Scikit-learn, Seaborn",
    [
      "Cleaned and visualized dataset using Pandas and Seaborn",
      "Applied logistic regression for binary classification",
      "Analyzed model performance using accuracy metrics and confusion matrix",
      "Performed exploratory data analysis and feature engineering"
    ]
  );
  
  addEntry(
    "Facebook Ads Campaign – MoveMate (UAE)",
    "Digital marketing campaign management for UAE-based client",
    "Tech Stack: Facebook Ads Manager, Canva, Google Sheets, Meta Pixel",
    [
      "Created and managed ad creatives using Canva design tools",
      "Implemented tracking pixels for campaign performance monitoring",
      "Monitored campaign metrics and optimized for better ROI",
      "Collaborated across remote teams for campaign coordination"
    ]
  );
  
  addEntry(
    "Capstone Web & Hosting Operations",
    "Web hosting and management operations for multiple clients",
    "Tech Stack: WordPress, cPanel, WHM, Google Workspace, Trello",
    [
      "Deployed and managed WordPress sites for various clients",
      "Configured domains and DNS settings for web hosting",
      "Handled hosting support tickets and technical issues",
      "Tracked tasks and project progress via Trello project management"
    ]
  );

  // TECHNICAL DEMONSTRATIONS
  addSectionHeader("TECHNICAL DEMONSTRATIONS");
  
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Web & UI Demonstrations:", margin, y);
  y += 6;
  
  const webProjects = [
    "Cryptocurrency Price UI - Real-time cryptocurrency price interface using public APIs, DOM manipulation, and event-driven UI logic",
    "JavaScript Counter App - Simple counter app demonstrating logic handling with increment, decrement, and reset functionality",
    "React Counter App - Component-based state management using React hooks for real-time UI updates",
    "JavaScript Calculator - Basic calculator supporting arithmetic operations with responsive input/output handling",
    "Online Compiler UI (Simulated) - Simulated code editor interface with input/output layout and interactive UI feedback",
    "Rock Paper Scissors Game - Conditional logic and interactive gameplay UI using event listeners and DOM manipulation",
    "Stopwatch Timer - Stopwatch timer with start, pause, and reset logic using JavaScript time functions"
  ];
  
  webProjects.forEach(project => {
    addText(`• ${project}`, 10);
  });
  
  y += 5;
  doc.setFont("helvetica", "bold");
  doc.text("Machine Learning Demonstrations:", margin, y);
  y += 6;
  
  const mlProjects = [
    "Neural Network – Digit Recognition - Trained dense neural network to classify handwritten digits using MNIST dataset with evaluation metrics",
    "Simple Linear Regression – Salary Prediction - Built linear regression model to predict salary based on years of experience and plotted regression line",
    "Multiple Linear Regression – Salary Estimation - Predicted salary using multiple independent variables; performed encoding and model evaluation",
    "Decision Tree Classifier – Food Likness - Created decision tree classifier to predict food preferences using demographic input features",
    "K-NN Classifier – Food Likness Accuracy - Implemented K-Nearest Neighbors algorithm for food preference classification and accuracy comparison",
    "Unsupervised Learning – Clustering Models - Applied K-means, DBSCAN, Agglomerative Clustering, and K-medoids with cluster visualizations, confusion matrix, and silhouette analysis"
  ];
  
  mlProjects.forEach(project => {
    addText(`• ${project}`, 10);
  });

  // EDUCATION
  addSectionHeader("EDUCATION");
  
  addEntry(
    "Bachelor of Science in Computer Science",
    "NCBA&E | Lahore, Pakistan",
    "2019 - 2023",
    [
      "Graduated with comprehensive foundation in computer science principles",
      "Completed coursework in algorithms, data structures, and software engineering",
      "Gained expertise in programming languages, database systems, and system design",
      "Participated in academic projects and technical development initiatives"
    ]
  );
  
  addEntry(
    "Diploma of C.I.T (Computer Information Technology)",
    "GCT Iqbal Town Lahore | Lahore, Pakistan",
    "2016 - 2019",
    [
      "Specialized in computer information technology and system administration",
      "Gained practical experience in computer hardware, networking, and technical support",
      "Developed foundational skills in programming and system troubleshooting"
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