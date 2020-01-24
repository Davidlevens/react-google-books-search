const mongoose = require("mongoose");
const Book = require("../models/book");

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    family: 4 // Use IPv4, skip trying IPv6
  }
);

const booksSeed = [
  {
    authors: ["Jon Duckett"],
    googleId: "LpctBAAAQBAJ",
    title: "JavaScript and JQuery",
    subtitle: "Interactive Front-End Web Development",
    link:
      "http://books.google.com/books?id=LpctBAAAQBAJ&dq=title:javascript+and+jquery&hl=&source=gbs_api",
    description:
      "Provides information on how to make more interactive, engaging, and usable Web pages with JavaScript and jQuery, covering core programming concepts in both and such techniques as animation, form validation, and interactive galleries.",
    image:
      "http://books.google.com/books/content?id=LpctBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  {
    authors: ["Robin Nixon"],
    googleId: "gNiEADgNuFwC",
    title: "Learning PHP, MySQL, JavaScript, and CSS",
    subtitle: "A Step-by-Step Guide to Creating Dynamic Websites",
    link:
      "http://books.google.com/books?id=gNiEADgNuFwC&dq=title:javascript+and+jquery&hl=&source=gbs_api",
    description:
      "Learn how to build interactive, data-driven websites—even if you don’t have any previous programming experience. If you know how to build static sites with HTML, this popular guide will help you tackle dynamic web programming. You’ll get a thorough grounding in today’s core open source technologies: PHP, MySQL, JavaScript, and CSS. Explore each technology separately, learn how to combine them, and pick up valuable web programming concepts along the way, including objects, XHTML, cookies, and session management. This book provides review questions in each chapter to help you apply what you’ve learned. Learn PHP essentials and the basics of object-oriented programming Master MySQL, from database structure to complex queries Create web pages with PHP and MySQL by integrating forms and other HTML features Learn JavaScript fundamentals, from functions and event handling to accessing the Document Object Model Pick up CSS basics for formatting and styling your web pages Turn your website into a highly dynamic environment with Ajax calls Upload and manipulate files and images, validate user input, and secure your applications Explore a working example that brings all of the ingredients together",
    image:
      "http://books.google.com/books/content?id=gNiEADgNuFwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  {
    authors: ["Brad Dayley"],
    googleId: "1N1VAgAAQBAJ",
    title: "Sams Teach Yourself JQuery and JavaScript in 24 Hours",
    link:
      "http://books.google.com/books?id=1N1VAgAAQBAJ&dq=title:javascript+and+jquery&hl=&source=gbs_api",
    description:
      "Provides twenty-four lessons about how to use jQuery and JavaScript to build single-page web apps for multiple devices, with designs that incorporate animations, special effects, and image galleries.",
    image:
      "http://books.google.com/books/content?id=1N1VAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  {
    authors: ["David Flanagan"],
    googleId: "2weL0iAfrEMC",
    title: "JavaScript: The Definitive Guide",
    subtitle: "The Definitive Guide",
    link:
      "https://play.google.com/store/books/details?id=2weL0iAfrEMC&source=gbs_api",
    description:
      "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript.",
    image:
      "http://books.google.com/books/content?id=2weL0iAfrEMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  }
];

async function seed() {
  await mongoose
    .connect(
      MONGODB_URI,
      options
    )
    .then(() => {
      console.log("Seed: Connected to Database");
    })
    .catch(err => {
      console.log("Seed: Not Connected to Database ERROR! ", err);
    });
  for (let book of booksSeed) {
    const { _id: bookId } = await new Book({
      title: book.title,
      subtitle: book.subtitle,
      authors: book.authors,
      link: book.link,
      description: book.description,
      image: book.image,
      googleId: book.googleId
    }).save();
  }

  mongoose.disconnect();

  console.info("Seed: Done!");
}

seed();a