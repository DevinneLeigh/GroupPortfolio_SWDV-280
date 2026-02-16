document.addEventListener('DOMContentLoaded', () => {

  const template = document.getElementById('blob-card-template');
  const container = document.getElementById('card-container');

  function createBlobCard({ imageSrc, heading, text, link }) {
    const clone = template.content.cloneNode(true);

    const img = clone.querySelector('img');
    const title = clone.querySelector('.card-heading');
    const description = clone.querySelector('.card-text');
    const anchor = clone.querySelector('a');

    img.src = imageSrc;
    img.alt = heading;
    title.textContent = heading;
    description.textContent = text;
    anchor.href = link;

    return clone;
  }

  const cardsData = [
    {
      imageSrc: "assets/images/profile.webp",
      heading: "Ethan",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
      link: ""
    },
    {
      imageSrc: "assets/images/JonathanPopePhoto.jpg",
      heading: "Jonathan",
      text: "Second Year Software Development student with a passion for backend development and data handling. Roughly 7 years of development and coding experience seeking a A.S. in Software Development to start my professional career.",
      link: "https://www.jonathanpope.dev"
    },
    {
      imageSrc: "assets/images/profile.webp",
      heading: "Jonny",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
      link: ""
    },
    {
      imageSrc: "assets/images/lea_profile.jpg",
      heading: "Lea",
      text: "Software development student, currently in the last semester of the program. Currently interning at In Time Tec as a UI/UX designer.",
      link: "https://myportfolio-c60573.gitlab.io/index.html"
    },
    {
      imageSrc: "assets/images/LukeMphoto.jpg",
      heading: "Luke",
      text: "Associates in Software Development student with a passion for both front and back end work, enjoys working in groups to create something exciting and new. Loves to learn and is always looking to grow in the industry.",
      link: "https://lukesometimescodes.github.io/"
    },
    {
      imageSrc: "assets/images/matthias-profile.jpg",
      heading: "Matthias",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
      link: ""
    },
    {
      imageSrc: "assets/images/profile.webp",
      heading: "Nicole",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
      link: ""
    },
    {
      imageSrc: "assets/images/RRS-profile-img.JPG",
      heading: "Riley",
      text: "Software developer with four years of coding experience and a strong focus on problem-solving. CWI graduate currently continuing toward a B.S. in Computer Science at Boise State University.",
      link: "https://stackblitz.com/edit/stackblitz-starters-jpn5yqs7?embed=1&file=src%2Findex.js&view=preview"
    },
    {
      imageSrc: "assets/images/sarah-profile-img.png",
      heading: "Sarah",
      text: "I'm a second year Software Development student at CWI. I have a passion for animation and illustration which I hope to apply to creating engaging websites.",
      link: "https://swwebdev.github.io/Personal_Portfolio_Winter_2025/index.html"
    },
    {
      imageSrc: "assets/images/profile.webp",
      heading: "Sham",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
      link: ""
    },
    {
      imageSrc: "assets/images/devinne-profile.jpg",
      heading: "Devinne",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
      link: "https://devinneleigh.github.io/portfolio3/index.html"
    }
  ];

    function shuffleArray(array) {
    const shuffled = [...array]; // copy so we don’t mutate original
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
    }


    shuffleArray(cardsData).forEach(card => {
    container.appendChild(createBlobCard(card));
    });


});
