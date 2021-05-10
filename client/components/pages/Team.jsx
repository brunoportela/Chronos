import React from 'react';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
import bioOusmanPic from '../../assets/Bio_picture_ousman.jpg';
import bioBenPic from '../../assets/Bio_picture_ben.jpg';
import bioJenaePic from '../../assets/Bio_picture_jenae.jpg';
import bioTimPic from '../../assets/Bio_picture_Tim.jpg';
import bioChrisPic from '../../assets/Bio_picture_Chris.jpg';
import bioBrianPic from '../../assets/Bio_picture_Brian.jpg';
import bioBriannaPic from '../../assets/Bio_picture_Brianna.png';
import bioAlanPic from '../../assets/Bio_picture_Alan.png';
import bioAlonPic from '../../assets/Bio_picture_Alon.jpg';
import bioMichaelPic from '../../assets/Bio_picture_Michael.jpg';
import bioRonellePic from '../../assets/Bio_picture_Ronelle.jpg';
import bioToddPic from '../../assets/Bio_picture_Todd.jpg';
import bioGregoryPic from '../../assets/Bio_picture_Gregory.jpg';
import bioVincePic from '../../assets/Bio_picture_Vince.png';
import bioMattPic from '../../assets/Bio_picture_Matt.jpg';
import bioDerekPic from '../../assets/Bio_picture_Derek.jpg';
import bioKitPic from '../../assets/Bio_picture_Kit.jpg';
import bioDannyPic from '../../assets/Bio_picture_Danny.jpg';
import bioTiffanyPic from '../../assets/Bio_picture_Tiffany.jpg';
import bioNachiketPic from '../../assets/Bio_picture_Nachiket.jpg';
import bioBrunoPic from '../../assets/Bio_picture_Bruno.jpg';

import '../../stylesheets/Team.scss';

const bios = [
  {
    name: 'Nachiket Pingle',
    bioParagraph:
    'Nachiket is a fullstack software engineer who seeks out singular challenges and brings forth his eclectic background to provide a sharp, well-thought-out and highly customized solution.  He believes that good leaders are always good followers first.',
    picture: bioNachiketPic,
    contact: {
      gitHub: 'https://github.com/nachiket1',
      linkedIn: 'https://www.linkedin.com/in/nachiketpingle',
    },
  },
  {
    name: 'Tiffany Graves',
    bioParagraph:
      'Tiffany is a software engineer who is passionate about effective modular design and enjoys using her creativity to explore techniques and tools to improve user experiences through innovation and latest trends.',
    picture: bioTiffanyPic,
    contact: {
      gitHub: 'https://github.com/tngraves',
      linkedIn: 'https://www.linkedin.com/in/tngraves/',
    },
  },
  {
    name: 'Bruno Portela',
    bioParagraph:
      'Bruno is a Software Engineer who takes pride on designing and building high quality products that makes people\'s life easier. He is a great team player and is always willing to coach new developers. He loves dogs, punk rock and videogames.',
    picture: bioBrunoPic,
    contact: {
      gitHub: 'https://github.com/brunoportela',
      linkedIn: 'https://www.linkedin.com/in/bgp/',
    },
  },
  {
    name: 'Danny Martinez',
    bioParagraph:
      'Danny is a full-stack software engineer keen on ensuring effective, understandable and hardened code  throughout the Chronos application.',
    picture: bioDannyPic,
    contact: {
      gitHub: 'https://github.com/j-dannymartinez',
      linkedIn: 'https://www.linkedin.com/in/jdanielmartinez/',
    },
  },  
  {
    name: 'Vince Ho',
    bioParagraph:
      'Vince is a full-stack software engineer based in San Diego. Beyond software development, Vince\'s passion includes taking care of his plants and lifting heavy weight off the ground.',
    picture: bioVincePic,
    contact: {
      gitHub: 'https://github.com/hodesza',
      linkedIn: 'https://www.linkedin.com/in/vinceho022/',
    },
  },
  {
    name: 'Matt Jiang',
    bioParagraph:
      'Matt Jiang is a software engineer who loves building sleek and responsive UIs, constructing well-architected backends, and above all writing clean code. Outside of coding, you can find him playing ukulele at a park somewhere.',
    picture: bioMattPic,
    contact: {
      gitHub: 'https://github.com/mattljiang',
      linkedIn: 'https://www.linkedin.com/in/mattljiang/',
    },
  },
  {
    name: 'Derek Lam',
    bioParagraph:
      'Derek is a software engineer currently living in Los Angeles. Before COVID, he enjoyed going to trivia nights and backpacking in Central America, nowadays you can find him indoors waiting for a remake of Game of Thrones season 8.',
    picture: bioDerekPic,
    contact: {
      gitHub: 'https://github.com/DerekQuoc',
      linkedIn: 'https://www.linkedin.com/in/derekqlam/',
    },
  },
  {
    name: 'Kit Loong Yee',
    bioParagraph:
      'Kit is a full-stack software engineer who has a passion in building products to better peoples\' lives. He also enjoys classical music and spending time with his family.',
    picture: bioKitPic,
    contact: {
      gitHub: 'https://github.com/kitloong1',
      linkedIn: 'https://www.linkedin.com/in/kitloongyee/',
    },
  },
  {
    name: 'Michael Wang',
    bioParagraph:
      'Michael is a passionate software engineer who is always deeply entrenched in new technologies while reinforcing his core knowledge. He is always looking to improve in all aspects of his craft, whether it be on an indiviual or team basis.',
    picture: bioMichaelPic,
    contact: {
      gitHub: 'https://github.com/wang3101',
      linkedIn: 'https://www.linkedin.com/in/michael--wang/',
    },
  },
  {
    name: 'Ronelle Caguioa',
    bioParagraph:
      'Ronelle is a fullstack engineer who has a passion for building innovative products and the creative outlet that comes along with it. He has grown a liking to the community encompassing tech and hopes to make significant contributions with his talent.',
    picture: bioRonellePic,
    contact: {
      gitHub: 'https://github.com/ronellecaguioa',
      linkedIn: 'https://www.linkedin.com/in/ronellecaguioa/',
    },
  },
  {
    name: 'Todd Buckner',
    bioParagraph:
      'Todd Buckner is a software engineer originally from Ohio, now living in Los Angeles. He enjoys the Los Angeles Philharmonic, hiking, science fiction, and live comedy.',
    picture: bioToddPic,
    contact: {
      gitHub: 'https://github.com/RToddBuckner',
      linkedIn: 'TBD',
    },
  },
  {
    name: 'Gregory Palasciano',
    bioParagraph:
      'Gregory Palasciano is a full-stack software engineer committed to improving user experiences through responsive and scalable applications.',
    picture: bioGregoryPic,
    contact: {
      gitHub: 'https://github.com/gregpalace',
      linkedIn: 'https://www.linkedin.com/in/gregory-palasciano',
    },
  },
  {
    name: 'Brianna Sookhoo',
    bioParagraph:
      'Brianna Sookhoo is a full-stack software engineer who loves to code in her sleep.',
    picture: bioBriannaPic,
    contact: {
      gitHub: 'https://github.com/briannasookhoo',
      linkedIn: 'https://www.linkedin.com/in/brianna-sookhoo-b03502135/',
    },
  },
  {
    name: 'Brian Bui',
    bioParagraph:
      'Brian Bui is a passionate full-stack software engineer dedicated to the craft of bringing his imagination to life onto the code editor.',
    picture: bioBrianPic,
    contact: {
      gitHub: 'https://github.com/umius-brian/',
      linkedIn: 'https://www.linkedin.com/in/umius-brian/',
    },
  },
  {
    name: 'Alon Ofengart',
    bioParagraph:
      'Alon Ofengart is a full-stack software engineer who will one day develop Python4++.',
    picture: bioAlonPic,
    contact: {
      gitHub: 'https://github.com/alon25',
      linkedIn: 'https://www.linkedin.com/in/alon-ofengart',
    },
  },
  {
    name: 'Alan Lee',
    bioParagraph:
      'Alan Lee is a full-stack software engineer who loves dealing with Docker containers and microservices.',
    picture: bioAlanPic,
    contact: {
      gitHub: 'https://github.com/ajlee12',
      linkedIn: 'https://www.linkedin.com/in/alan-lee-1ba1aa93/',
    },
  },
  {
    name: 'Ousman Diallo',
    bioParagraph:
      "Ousman is a full-stack software engineer passionate about building performant, modular React applications giving special interest to mobile-driven web development and SPAs. Ousman's other interest lie in  microservices, architecting/optimizing communication between distributed systems, and all things written by Tim Ferris.",
    picture: bioOusmanPic,
    contact: {
      gitHub: 'https://github.com/Dialloousman',
      linkedIn: 'https://www.linkedin.com/in/ordiallo/',
    },
  },
  {
    name: 'Ben Mizel',
    bioParagraph:
      'Ben Mizel is a full-stack software engineer passionate about building adaptable, scalable, and resilient applications. He enjoys talking about microservices and distributed computing as well as the modular brilliance of IKEA shelves and Hershey bars.',
    picture: bioBenPic,
    contact: {
      gitHub: 'https://github.com/ben-mizel/',
      linkedIn: 'https://www.linkedin.com/in/ben-mizel/',
    },
  },
  {
    name: 'Chris Romano',
    bioParagraph:
      "With an eye for detail and ability across the stack, Chris is a powerful addition to the Chronos team.  While his visually creative front end solutions often headline, he's equipped to contribute in countless other ways.  From Webpack to data management to server side solutions in Node/Express, he can do it all.",
    picture: bioChrisPic,
    contact: {
      gitHub: 'https://github.com/robicano22',
      linkedIn: 'https://www.linkedin.com/in/chris-p-romano/',
    },
  },
  {
    name: 'Jenae Pennie',
    bioParagraph:
      'Jenae Pennie is a full-stack JavaScript Engineer specializing in React and Express Node. She is deeply passionate about designing and implementing modular full-stack applications. She has experience with React-Redux, React (Context, Hooks, Effects),  Dockerizing Applications, and Creating Microservices.',
    picture: bioJenaePic,
    contact: {
      gitHub: 'https://github.com/jenaepen',
      linkedIn: 'https://www.linkedin.com/in/jenae-pennie',
    },
  },
  {
    name: 'Tim Pagra',
    bioParagraph:
      'Tim is an experienced fullstack software engineer with niche focus on Node/Express servers and React frontends. He is passionate about composition and reusability in software development, giving special interest to decomposing monolithic applications into micro service applications.',
    picture: bioTimPic,
    contact: {
      gitHub: 'https://github.com/timpagra',
      linkedIn: 'https://www.linkedin.com/in/timpagra/',
    },
  },
];

const Team = () => (
  <div className="team-container" id="teamPage">
    {bios.map((obj) => (
      <div className="bio-card">
        <img className="bio-pic" src={obj.picture} alt="loading" />
        <p className="name">{obj.name}</p>
        <p className="bio">{obj.bioParagraph}</p>
        <p className="member-contact">
          <a
            className="member-github"
            href={obj.contact.gitHub}
            target="__blank"
          >
            <ion-icon class = "icon" name="logo-github"></ion-icon>
          </a>
          <a
            className="member-linkedin"
            href={obj.contact.linkedIn}
            target="__blank"
          >
            <ion-icon
                class ="icon"
                name="logo-linkedin"
              ></ion-icon>
          </a>
        </p>
      </div>
    ))}
  </div>
);

export default Team;
