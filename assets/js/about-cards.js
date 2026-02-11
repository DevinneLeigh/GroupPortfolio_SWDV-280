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
      imageSrc: "assets/images/profile.webp",
      heading: "Jonathan",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
      link: ""
    },
    {
      imageSrc: "assets/images/profile.webp",
      heading: "Jonny",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
      link: ""
    },
    {
      imageSrc: "assets/images/profile.webp",
      heading: "Lea",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
      link: ""
    },
    {
      imageSrc: "assets/images/profile.webp",
      heading: "Luke",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
      link: ""
    },
    {
      imageSrc: "assets/images/profile.webp",
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
      imageSrc: "assets/images/profile.webp",
      heading: "Sarah",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
      link: ""
    },
    {
      imageSrc: "assets/images/profile.webp",
      heading: "Sham",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
      link: ""
    },
    {
      imageSrc: "assets/images/profile.webp",
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
