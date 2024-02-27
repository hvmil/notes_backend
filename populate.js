const axios = require("axios");
const notes = [
  {
    content: "Robust zero defect capacity",
    important: false,
  },
  {
    content: "Automated optimizing help-desk",
    important: false,
  },
  {
    content: "Enterprise-wide upward-trending product",
    important: false,
  },
  {
    content: "Stand-alone content-based toolset",
    important: true,
  },
  {
    content: "Future-proofed encompassing capacity",
    important: false,
  },
  {
    content: "Multi-lateral zero administration migration",
    important: false,
  },
  {
    content: "Face to face 6th generation collaboration",
    important: true,
  },
  {
    content: "Versatile discrete productivity",
    important: false,
  },
  {
    content: "Cross-group 24 hour function",
    important: false,
  },
  {
    content: "Synergized intangible service-desk",
    important: true,
  },
  {
    content: "Programmable eco-centric productivity",
    important: true,
  },
  {
    content: "Re-contextualized zero tolerance throughput",
    important: false,
  },
  {
    content: "Assimilated eco-centric data-warehouse",
    important: true,
  },
  {
    content: "Assimilated 5th generation adapter",
    important: false,
  },
  {
    content: "Ameliorated maximized protocol",
    important: true,
  },
];

const del = [
  "65d82e8ed2d41065a3a731a8",
  "65d82ecb7efb7232cde6ce5d",
  "65d9f767a2ca36009a5679d9",
  "65da0637daa74cc45fd123bc",
  "65dc2ec0312433d0196d9dba",
];

del.forEach((note) => {
  axios
    .delete(`http://localhost:3001/api/notes/${note}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.error(err));
});
