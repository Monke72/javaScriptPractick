//1
const numbers = [21, 2, 1, 31, 3, 1, 2, 21, 212];

const srNum = numbers.reduce((acc, item) => {
  return (acc + item) / numbers.length;
}, 0);
console.log(srNum);

//2
const users = [
  {
    username: "lando12",
    jedi: false,
  },
  {
    username: "kvaigon99",
    jedi: true,
  },
  {
    username: "anakin skywalker",
    jedi: false, // DARK SIDE ISN'T JEDI WAY!!!
  },
  {
    username: "littlegreenpug",
    jedi: true,
  },
  {
    username: "ray",
    jedi: true,
  },
  {
    username: "padmebestqueenever",
    jedi: false,
  },
];

const getJed = users.reduce((count, user) => {
  if (user.jedi) {
    count++;
  }
  return count;
}, 0);

console.log(getJed);

const getArrayOnlyJedi = users.reduce((acc, user) => {
  if (user.jedi) {
    acc.push(user.username);
  }
  return acc;
}, []);
console.log(getArrayOnlyJedi);

//3
const documents = [
  {
    content: "Ты был мне как брат! Я любил тебя!",
    author: "Obi-Wan Kenobi",
    date: "2017-01-17 07:13:07",
  },
  {
    content: "База повстанцев находится на Дантуине.",
    author: "Leia Organa",
    date: "1999-02-19 16:56:11",
  },
  {
    content:
      "Страх открывает доступ к темной стороне! Страх рождает гнев, гнев рождает ненависть, ненависть — залог страданий.",
    author: "Yoda",
    date: "2019-11-27 21:33:56",
  },
];

const doc = documents.reduce(
  (gen, doc) => {
    gen.content = gen.content + " " + doc.content;
    gen.authors.push(doc.author);
    if (!gen.date || new Date(gen.date).valueOf() <= new Date(doc.date)) {
      gen.date = doc.date;
    }
    return gen;
  },
  {
    content: "",
    authors: [],
    date: null,
  }
);
console.log(doc);
