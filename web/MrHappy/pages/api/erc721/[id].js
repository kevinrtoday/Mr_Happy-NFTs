// web/pages/api/erc721/[id].js

const metadata = {
  1: {
    attributes: [
      {
        trait_type: "Shoes",
        value: "Mr Happy",
      },
    ],
    description: "Mr Happy with Shoes.",
    image: "https://ibb.co/3C6xSHr",
    name: "Happy Shoes",
  },
  2: {
    attributes: [
      {
        trait_type: "Skipping",
        value: "Mr Happy",
      },
    ],
    description: "Mr Happy Skipping.",
    image: "https://ibb.co/R0m8Dmn",
    name: "Happy Skipping",
  },
  3: {
    attributes: [
      {
        trait_type: "Hug",
        value: "Mr Happy",
      },
    ],
    description: "Mr Happy needs a hug.",
    image: "https://ibb.co/D7pjpLR",
    name: "Mr Happy hug",
  },
};

export default function handler(req, res) {
  res.status(200).json(metadata[req.query.id] || {});
}
