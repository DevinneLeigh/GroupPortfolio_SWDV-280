document.addEventListener("DOMContentLoaded", () => {
    const template = document.getElementById("blob-card-template");
    const container = document.getElementById("card-container");

    function createBlobCard({ imageSrc, heading, text, link }) {
        const clone = template.content.cloneNode(true);

        const img = clone.querySelector("img");
        const title = clone.querySelector(".card-heading");
        const description = clone.querySelector(".card-text");
        const anchor = clone.querySelector("a");

        img.src = imageSrc;
        img.alt = heading;
        title.textContent = heading;
        description.textContent = text;
        anchor.href = link;

        return clone;
    }

    const cardsData = [
        {
            imageSrc: "assets/images/ethan.png",
            heading: "Ethan",
            text: "I have been tinkering with several programming languages for years, and I committed to a programming career in 2024. I specialize in backend coding with Python and C#, and I will have my Associate of Science degree at the end of this semester.",
            link: "https://ethanhavlik.github.io/SWDVPortfolio",
        },
        {
            imageSrc: "assets/images/JonathanPopePhoto.jpg",
            heading: "Jonathan",
            text: "Second Year Software Development student with a passion for backend development and data handling. Roughly 7 years of development and coding experience seeking a A.S. in Software Development to start my professional career.",
            link: "https://www.jonathanpope.dev",
        },
        {
            imageSrc: "assets/images/JonnyWagstaffPhoto.jpg",
            heading: "Jonny",
            text: "Hi, I'm Jonathan(Jonny) Wagstaff! I'm a software development student at CWI in my final semester of my associate degree. I like to code, read books, and interact with people! My favorite programming languages are likely Python and HTML, though I like others as well!",
            link: "",
        },
        {
            imageSrc: "assets/images/lea_profile.jpg",
            heading: "Lea",
            text: "Software development student, currently in the last semester of the program. Currently interning at In Time Tec as a UI/UX designer.",
            link: "https://myportfolio-c60573.gitlab.io/index.html",
        },
        {
            imageSrc: "assets/images/LukeMphoto.jpg",
            heading: "Luke",
            text: "Associates in Software Development student with a passion for both front and back end work, enjoys working in groups to create something exciting and new. Loves to learn and is always looking to grow in the industry.",
            link: "https://lukesometimescodes.github.io/",
        },
        {
            imageSrc: "assets/images/matthias-profile.jpg",
            heading: "Matthias",
            text: "Hey, Full stack web developer, Interning at In Time Tec. I have competed in student lead orginizations like Skills USA, and BPA.",
            link: "https://www.linkedin.com/in/matthias-barnes/",
        },
        {
            imageSrc: "assets/images/NicoleAbout.JPG",
            heading: "Nicole",
            text: "I am a Software Development student at the College of Western Idaho with two years of development experience. I plan to build websites professionally while also learning video game development as a passion project.",
            link: "https://nicoledaniel.github.io/PersonalPortfolio02-18-2026/",
        },
        {
            imageSrc: "assets/images/RRS-profile-img.JPG",
            heading: "Riley",
            text: "Software developer with four years of coding experience and a strong focus on problem-solving. Currently have my Associates degree continuing toward a B.S. in Computer Science at Southern New Hampshire University.",
            link: "https://rstra9564.github.io/MyPortfolio-Main/",
        },
        {
            imageSrc: "assets/images/sarah-profile-img.png",
            heading: "Sarah",
            text: "I'm a second year Software Development student at CWI. I have a passion for animation and illustration which I hope to apply to creating engaging websites.",
            link: "https://swwebdev.github.io/Personal_Portfolio_Winter_2025/index.html",
        },
        {
            imageSrc: "assets/images/sham.jpg",
            heading: "Sham",
            text: "Second-year Software Development student at CWI with a passion for web designing, seeking to continue my studies at BSU.",
            link: "https://shamhussari.github.io/sham-portfolio/index.html",
        },
        {
            imageSrc: "assets/images/devinne-profile.jpg",
            heading: "Devinne",
            text: "I'm a Software Development student, set to graduate with my associate's degree in the Spring of 2026. I will be working as a full-stack web developer at Arcane Web Design, located in Boise Idaho. ",
            link: "https://devinneleigh.github.io/DM-Portfolio/dist/",
        },
    ];

    function shuffleArray(array) {
        const shuffled = [...array]; // copy so we don’t mutate original
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    shuffleArray(cardsData).forEach((card) => {
        container.appendChild(createBlobCard(card));
    });
});
