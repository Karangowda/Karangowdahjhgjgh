const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Resume",
    link: "/KaranGowda CloudEngineer.pdf",
    external: true,
    download: true,
  },
  {
    name: "Certifications",
    link: "#certifications",
  },
];

const certifications = [
  {
    title: "Azure Data Fundamentals",
    organization: "Microsoft ",
    credentialId: "5942CC3D1B56B951",
    verifyLink: "https://learn.microsoft.com/en-us/users/karansgowda/credentials/5942cc3d1b56b951?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    imgPath: "/images/certs/dp900.svg",
  },
  {
    title: " Azure Fundamentals",
    organization: "Microsoft",
    credentialId: "862DA87B39C4795E",
    verifyLink: "https://learn.microsoft.com/en-us/users/karansgowda/credentials/862da87b39c4795e?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    imgPath: "/images/certs/az900.svg",
  },
  {
    title: "HashiCorp Certified: Terraform Associate",
    organization: "HashiCorp",
   
    credentialId: "HCTAO-003",
    verifyLink: "https://www.credly.com/badges/19b477b9-746e-44ef-984c-f810a9be0bf7/public_url",
    imgPath: "/images/certs/tf.png",
  },
  {
    title: " Azure AI Fundamentals",
    organization: "Microsoft",
    credentialId: "E93733C0AA34EBEF",
    verifyLink: "https://learn.microsoft.com/en-us/users/karansgowda/credentials/e93733c0aa34ebef",
    imgPath: "/images/certs/ai900.svg",
  }
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 8, suffix: "+", label: "Satisfied Clients" },
  { value: 7, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
     name: "Aws",
    imgPath: "/images/logos/aws.png",
  },
  {
    name: "Azure ",
    imgPath: "/images/logos/azure.svg",
  },
  {
    name: "Terraform ",
    imgPath: "/images/logos/tnnew.svg",
    scale: 0.8,
  },
  {
    name: "Devops",
    imgPath: "/images/logos/devops.png",
    scale: 0.9,
  },
  {
    name: "Data Base",
    imgPath: "/images/logos/db.png",
    scale: 0.8,
  },
];

const techStackIcons = [
  {
    name: "Aws",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Azure",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Devops Engineer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Site Reliability Engineer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Platform Engineer ",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  
  {
    review: "Karan brought clarity and stability to our cloud ecosystem. He optimized performance, tightened security, and resolved issues we’d been struggling with for months. His ability to simplify complex cloud workflows and deliver clean, reliable solutions makes him an invaluable engineer.",
    logoPath: "/images/logos/az.png",
    imgPath: "/images/logos/black.png",
    title: "Azure Cloud Engineer ",
    date: "Oct 2025 - Present",
    responsibilities: [
      "Designed a secure landing zone for a multi-team environment",
      "Optimized cloud spending by 32% using Datadog + Azure Cost Management",
      "Built automated infrastructure using Terraform",
      "Reduced deployment time by introducing CI/CD pipelines using Azure DevOps with YAML-based automation."
    ],
  },
  {
    review: "Karan consistently demonstrates strong technical capability, ownership, and a deep understanding of Azure cloud operations. Over the review period, he delivered reliable and high-quality work across multiple infrastructure components and platform initiatives.",
    logoPath: "/images/logos/zc.png",
    imgPath: "/images/logos/zarthi.svg",
    title: "Junior Associate Cloud Infrastructure",
    date: "May 2024 - June 2025",
    responsibilities: [
      "Design, deploy, and manage scalable cloud infrastructure using Azure services.Ensure architectures follow best practices for reliability, performance, and cost efficiency.",
      "Automate provisioning and configuration using Terraform, ARM/Bicep, and Azure DevOps pipelines. Maintain version-controlled infrastructure and enforce consistent, repeatable deployments..",
      "Analyze cloud usage trends and optimize resources through rightsizing, scheduling, automation, reserved instances, and savings plans. Build dashboards and alerts to track anomalies and prevent cost overruns..",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Naveen",
    mentions: "@naveenkopparam",
    review:
      "I can’t say enough good things about Karan. He was able to take our entire cloud infra modernize it, set standards, reduced cloud bill by 10%.",
    imgPath: "/images/logos/nvn.jpg",
   
    
  },
  {
    name: "Shashank",
    mentions: "@Theshashank_p",
    review:
      "Working with Karan was a remarkable experience. He modernized our cloud infrastructure with precision and transformed our environment into a scalable, secure, and highly efficient system. His attention to detail, deep technical expertise, and commitment to reliability are unmatched. Highly recommend him for any cloud or Azure engineering projects.",
    imgPath: "/images/logos/sas.jpg",
  },
  {
    name: "Sumanth",
    mentions: "@sumanthairani",
    review:
      "Collaborating with Karan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Karan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Karan is the ideal partner.",
    imgPath: "/images/logos/sum.jpg",
  },
  {
    name: "Rudratalur",
    mentions: "@Rudratalur_dk",
    review:
      "Karan was a pleasure to work with. He turned our outdated Infra into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/logos/rud.jpg",
  },
  {
    name: "Shivaay",
    mentions: "@Eshwardeepu",
    review:
      "Karan’s expertise in cloud is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/logos/shi.jpg",
  },
  {
    name: "Aditya",
    mentions: "@Adityavk21",
    review:
      "Karan was a pleasure to work with. He understood our requirements perfectly and delivered the solution that exceeded our expectations. His skills in both infra,security and Ai are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "git ",
    url:"https://github.com/Karangowda",
    imgPath: "/images/git.png",
  },
  {
    name: "x",
    url:"https://x.com/KaranOnCloud",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url:"https://www.linkedin.com/in/karan-s-gowda/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  certifications,
};
