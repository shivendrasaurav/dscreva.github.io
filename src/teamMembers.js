//Store details about all team members in the members array

const members = [
    {
        name: "Niran N",
        team: "Management",
        title: "DSC Lead",
        tags: ['Films', 'Web', 'Sports'],
        image_url: "./static/members_portrait/niran.jpeg",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        name: "Anurag Sharan",
        team: "Tech",
        title: "Tech Lead",
        tags: ['Web', 'Music', 'Films'],
        image_url: "./static/members_portrait/anurag.jpg",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        name: "Adarsh A Nair",
        team: "Web",
        title: "Web Development Lead",
        tags: ['Coder', 'Singer', 'Sports Enthusiast'],
        image_url: "./static/members_portrait/adarsh.jpeg",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    
    {
        name: "Aman Srivastava",
        team: "Design",
        title: "Design Lead",
        tags: ['Films', 'Web', 'Sports'],
        image_url: "./static/members_portrait/aman.jpeg",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }, 

    {
        name: "Sanjana Shivakumar",
        team: "Tech",
        title: "Cloud Platform Lead",
        tags: ['WebDev', 'Bibliophile', 'Coffeeholic'],
        image_url: "./static/members_portrait/sanjana.jpeg",
        description: "I’m an aspiring Full Stack Web Developer with a keen interest in Cloud Computing.    My hobbies include isolating and annihilating errors, coding at nocturnal hours and attempting to fix warnings."
    }, 
    {
        name: "Deeksha Kottary",
        team: "Management",
        title: "Management Lead",
        tags: ['Web', 'Music', 'Films'],
        image_url: "./static/members_portrait/deeksha.jpeg",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        name: "Shreevallabha A",
        team: "Android",
        title: "Android Lead",
        tags: ['Entrepreneur', 'Innovator', 'Engineer'],
        image_url: "./static/members_portrait/shreevallabha.jpeg",
        description: "I am an aspiring entrepreneur and engineer, willing to innovate design and develop applications on electronics hardware, software and IOT.  I have experience with web development, android app development, IoT, embedded linux and MCUs.Reach me out at shreevallabhas@gmail.com"
    },
    {
        name: "Chirag Vijay",
        team: "Management",
        title: "Management Team",
        tags: ['Reading', 'Films', 'Teaching'],
        image_url: "./static/members_portrait/chirag.jpeg",
        description: "Work mode always activated :) . I can save you from flipping the pages of voluminous and boring textbooks and make the concepts interesting.."
    },
    {
        name: "Divyanshi Pathak",
        team: "Management",
        title: "Management Team",
        tags: ['Maths', 'AI', 'Rom-Com'],
        image_url: "./static/members_portrait/divyanshi.jpg",
        description: "Of the people, for the people but not by the people.Chasing the ultimate equation that contains philosophy of your being. "
    },
    {
        name: "Pranav S Hegde",
        team: "Management",
        title: "Management Team",
        tags: ['Coding', 'gaming', 'Fitness'],
        image_url: "./static/members_portrait/pranav.png",
        description: "Just your everyday Engg student who is more specialised in other fields than my very own field , equipped with the innate sense of curiosity and attraction towards anything challenging and knowledge oriented."
    },
    {
        name: "Himanshu Ranjan",
        team: "Web",
        title: "Wed Development Team",
        tags: ['Coding', 'Gaming', 'Music'],
        image_url: "./static/members_portrait/himanshu.jpg",
        description: "Project oriented developer with Android/IOS,ML and Content Writing skills.Music while I code is a treat and Gaming is  the retreat from the treat."
    },
    {
        name: "Dharshan K",
        team: "Web",
        title: "Wed Development Team",
        tags: ['Coding', 'Fitness', 'Oratory'],
        image_url: "./static/members_portrait/dharshan.jpg",
        description: "Designer, Developer, Engineer, Programmer and many more. Ultimately I am a problem solver. I love challenges and solving them. An open-minded person, optimistic, enthusiastic, fitness maniac, public speaker, life-long learner."
    },
    {
        name: "Devanshu Roy",
        team: "Web",
        title: "Wed Development Team",
        tags: ['Art', 'coffee', 'gaming'],
        image_url: "./static/members_portrait/devanshu.jpg",
        description: "I am here to turn your ideas into code, powered by our thoughts and technologies. ML/CV enthusiast and Web Developer, wanting to find the 777."
    }, 
    {
        name: "Shradha B Kaba",
        team: "Design",
        title: "Design Team",
        tags: ['Sketch', 'code', 'game'],
        image_url: "./static/members_portrait/shraddha.jpg",
        description: "I am a person who is positive about every aspect of life.I love what I do and have a steady source of motivation that drives me to do my best. "
    },  {
        name: "Vishnu sai bhonsle",
        team: "Android",
        title: "Android Team",
        tags: ['WEB', 'ANDROID', 'ML'],
        image_url: "./static/members_portrait/vishnu.jpg",
        description: "I'm a person who loves to explore and enthusiast to learn new things around the world "
    },  {
        name: "Sahil Chachra",
        team: "Mentors",
        title: "Mentor Team",
        tags: ['Deep Learning', 'Coding', 'Space'],
        image_url: "./static/members_portrait/sahil.jpg",
        description: "Hello! This is Sahil, currently in my final year, pursuing B.Tech in CSE. I am really passionate about coding! My keen interests are Deep Learning and Competitive Programming. Apart from these, I help in organising and managing various technical events in REVA."
    },  {
        name: "Shivendra Saurav",
        team: "Mentors",
        title: "Mentor Team",
        tags: ['Coding', 'Football', 'Gaming'],
        image_url: "./static/members_portrait/shivendra.jpeg",
        description: "Currently pursuing B. Tech in CSE from REVA University. I have spoken at DSC OMG 2020. I am Teaching Assistant at RACE (REVA Academy for Corporate Excellence) a Content Creator for the YouTube channel The Code Drop, and a Core Member of DSC, REVA University. I have been designing and developing websites and web apps for a couple of years now. I have participated in many hackathons and has won a lot of them. Maybe you want a music app, maybe you want a web page for your brand, or maybe you want to make Conway's Game of Life, I can do all that and much more."
    },  {
        name: "Saketh",
        team: "Mentors",
        title: "Mentor Team",
        tags: ['Art', 'coffee', 'gaming'],
        image_url: "./static/members_portrait/saket.jpg",
        description: "I am here to turn your ideas into code, powered by our thoughts and technologies. ML/CV enthusiast and Web Developer, wanting to find the 777."
    }, 
    {
        name: "Shubham Baid",
        team: "Mentors",
        title: "Mentor Team",
        tags: ['Coding', 'Sketching', 'Music'],
        image_url: "./static/members_portrait/shubham.jpeg",
        description: "A machine learning and AI enthusiast. always try to learn and explore how the world can be made better with AI and its powers."
    }, 
    
];

export default members;