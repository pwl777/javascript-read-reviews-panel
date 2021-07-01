/* ------ JavaScript - Reviews Panel ------ */
/*
===========================================================
Local Reviews Data
===========================================================
*/

const reviews = [
  {
    id: 1,
    name: "Pierson Lippard",
    job: "Front End Developer",
    img: "img/Pierson_01.jpeg",
    text: "The pandemic has allowed me the oportunity to spend my personal time aquiring the technical knowledge to develop my programming skills.",
  },
  {
    id: 2,
    name: "Wells Chan",
    job: "Entrepreneur",
    img: "img/wells-chan-unsplash.png",
    text: "Being a young entrepreneur offers me a fullfilling lifestyle with the daily freedom to follow a range of exciting business possibilities.",
  },
  {
    id: 3,
    name: "Levi Meir Clancy",
    job: "Scientist",
    img: "img/levi-meir-clancy-unsplash.png",
    text: "The pandemic has allowed many budding young scientists like myself a foothold into a vital and worthwhile career to help millions of people.",
  },
  {
    id: 4,
    name: "Biel Morro",
    job: "Mouse Catcher",
    img: "img/biel-morro-unsplash.jpg",
    text: "What can I say, except that I am truly passionate about catching mice. Maybe it's down to genetics, or maybe I am just naturally gifted.",
  },
  {
    id: 5,
    name: "Christina Wocintech",
    job: "Lead Developer",
    img: "img/christina-wocintechchat-1-unsplash.jpg",
    text: "I have a passion for creating fun and useful apps and elements with code. It's also great fun constantly learning and updating my skills.",
  },
  {
    id: 6,
    name: "Sikwe Scarter",
    job: "Ethical Hacker",
    img: "img/sikwe-scarter-unsplash.jpg",
    text: "The pandemic has shown a huge rise in online criminal activity. I am determined to help people learn how to protect themselves.",
  },
  {
    id: 7,
    name: "Christina Wocintechat",
    job: "Data Analyst",
    img: "img/christina-wocintechchat-2-unsplash.jpg",
    text: "The modern world has seen a massive rise in data collecting and analysis. I enjoy analysing data to help research and predicting trends.",
  },
  {
    id: 8,
    name: "Junior Reis",
    job: "Researcher",
    img: "img/junior-reis-unsplash.jpg",
    text: "I work as a researcher, but my real passion is photography....hehehehe....but don't tell my boss.",
  },
  {
    id: 9,
    name: "Guillaume Bolduc",
    job: "Student",
    img: "img/guillaume-bolduc-unsplash.jpg",
    text: "Being a student through 2020-2021 has been a great challenge. Isolation has been good for focus, but terrible for essential social interaction.",
  },
  {
    id: 10,
    name: "Robby Robot",
    job: "Satellite Engineer",
    img: "https://robohash.org/YOUR-TEXT.png ?bgset=bg2",
    text: "I remember the feeling of utter excitement when I got my job working as a satellite Engineer at NASA. Apparently I am a born natural.",
  },
  {
    id: 11,
    name: "Bernadette Bouffant",
    job: "Hair Stylist",
    img: "https://robohash.org/KEIKO.png ?bgset=bg2",
    text: "Hair, hair, hair, I absoblutely love my job. I am a real people person, It's wonderful chatting with my clients and listening to their stories.",
  },
  {
    id: 12,
    name: "Andy Aerial",
    job: "Digital TV Engineer",
    img: "https://robohash.org/SHEENA.png ?bgset=bg2",
    text: "The digital aerial market has had a huge surge in demand since the start of the 2020-21 pandemic, my fitness levels are so good now.",
  },
];

/*
===========================================================
Select Items
===========================================================
*/

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

/*
===========================================================
Set Starting Item
===========================================================
*/

let currentItem = 0;

/*
===========================================================
Load Initial Item
===========================================================
*/

window.addEventListener("DOMContentLoaded", function () {
  //   const item = reviews[currentItem];
  //   img.src = item.img;
  //   author.textContent = item.name;
  //   job.textContent = item.job;
  //   info.textContent = item.text;
  showPerson();
});

/*
===========================================================
Show Person Based On Item
===========================================================
*/

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

/*
===========================================================
Show Next Person
===========================================================
*/

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

/*
===========================================================
Show Previous Person
===========================================================
*/

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

/*
===========================================================
Show Random Person
===========================================================
*/

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
