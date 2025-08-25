export interface Founder {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  quote: string;
  gradientFrom: string;
  gradientTo: string;
  skills?: string[];
  links?: {
    x?: string;
    github?: string;
    linkedin?: string;
  };
}

export const foundersData: Founder[] = [
  {
    name: "Naveen P",
    role: "Co-Founder & CTO, ALLIED",
    bio: "Leads AI systems and data engineering.",
    avatar: "/founders/naveen.jpg",
    quote: "We envision a world where AI isn't just a tool but a seamless extension of human capability. At Allied, we build with clarity, creativity, and care.",
    gradientFrom: "from-indigo-900",
    gradientTo: "to-purple-800",
    skills: ["AI", "RAG", "Edge AI", "Motion UI"],
    links: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Senin Ashraf",
    role: "Co-Founder & CEO, ALLIED",
    bio: "Vision & ecosystem ops.",
    avatar: "/founders/senin.jpg",
    quote: "From university dorm rooms to global innovation, Allied was born from the desire to challenge boundaries and shape impactful solutions.",
    gradientFrom: "from-orange-600",
    gradientTo: "to-purple-800"
  },
  {
    name: "Devadathan C",
    role: "Co-Founder & COO, ALLIED",
    bio: "Ops & delivery.",
    avatar: "/founders/devadathan.jpg",
    quote: "Language is the link between humans and machines. Our goal is to make that connection as natural and intelligent as possible.",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-600"
  },
  {
    name: "Abhishekh",
    role: "Co-Founder & CFO, ALLIED",
    bio: "Finance & analytics.",
    avatar: "/founders/abhishekh.jpg",
    quote: "Scalability isn't a buzzword—it's our foundation. Every product we design is built to grow with the user and the world.",
    gradientFrom: "from-blue-600",
    gradientTo: "to-purple-700"
  },
  {
    name: "Sreelesh",
    role: "Co-Founder & CMO, ALLIED",
    bio: "Brand & growth.",
    avatar: "/founders/sreelesh.jpg",
    quote: "Stories shape perception. At Allied, I ensure that our technology's voice is as powerful and meaningful as its code. Communication is our bridge to the world.",
    gradientFrom: "from-slate-600",
    gradientTo: "to-blue-700"
  }
];
