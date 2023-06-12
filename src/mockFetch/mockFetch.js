const proyectos = [
  {
    id: 1,
    name: "proyecto1",
    link: "https://www.youtube.com",
    lenguages: ["html,css,js"],
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro repellat dolor aliquam`,
  },
  {
    id: 2,
    name: "proyecto2",
    link: "https://www.youtube.com",
    lenguages: ["html,css,js"],
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro repellat dolor aliquam`,
  },
  {
    id: 3,
    name: "proyecto3",
    link: "https://www.youtube.com",
    lenguages: ["html,css,js"],
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro repellat dolor aliquam`,
  },
  {
    id: 4,
    name: "proyecto4",
    link: "https://www.youtube.com",
    lenguages: ["html,css,js"],
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro repellat dolor aliquam`,
  },
];

export let getProjects = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(proyectos);
    }, 2000);
  });
};
