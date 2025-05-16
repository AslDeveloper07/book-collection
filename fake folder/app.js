"use strict";

const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    imageSrc: "./devbooks.webp",
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    imageSrc: "./devbooks.webp",
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    imageSrc: "./devbooks.webp",
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    imageSrc: "./devbooks.webp",
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "The Clean Coder: A Code of Conduct for Professional Programmers",
    author: ["Robert C. Martin"],
    imageSrc: "./devbooks.webp",

    publisher: "Prentice Hall",
    publicationDate: "2011-05-16",
    edition: 1,
    keywords: ["programming", "software development", "professionalism"],
    pages: 224,
    format: "hardcover",
    ISBN: "9780137081073",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.22,
        ratingsCount: 6481,
        reviewsCount: 245,
        fiveStarRatingCount: 4009,
        oneStarRatingCount: 210,
      },
    },
    highlighted: false,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    imageSrc: "./devbooks.webp",
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    imageSrc: "./devbooks.webp",
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    imageSrc: "./devbooks.webp",
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "Introduction to Algorithms",
    author: [
      "Thomas H. Cormen",
      "Charles E. Leiserson",
      "Ronald L. Rivest",
      "Clifford Stein",
    ],
    imageSrc: "./devbooks.webp",
    publisher: "MIT Press",
    publicationDate: "2009-07-31",
    edition: 3,
    keywords: ["algorithms", "computer science", "data structures"],
    pages: 1312,
    format: "hardcover",
    ISBN: "9780262033848",
    language: "English",
    programmingLanguage: "C, Java, Python",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 13530,
        reviewsCount: 1030,
        fiveStarRatingCount: 8761,
        oneStarRatingCount: 463,
      },
    },
    highlighted: false,
  },
  {
    title: "Introduction to Algorithms",
    author: [
      "Thomas H. Cormen",
      "Charles E. Leiserson",
      "Ronald L. Rivest",
      "Clifford Stein",
    ],
    imageSrc: "./devbooks.webp",
    publisher: "MIT Press",
    publicationDate: "2009-07-31",
    edition: 3,
    keywords: ["algorithms", "computer science", "data structures"],
    pages: 1312,
    format: "hardcover",
    ISBN: "9780262033848",
    language: "English",
    programmingLanguage: "C, Java, Python",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 13530,
        reviewsCount: 1030,
        fiveStarRatingCount: 8761,
        oneStarRatingCount: 463,
      },
    },
    highlighted: false,
  },
  {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: ["Robert C. Martin"],
    imageSrc: "./devbooks.webp",
    publisher: "Prentice Hall",
    publicationDate: "2008-08-11",
    edition: 1,
    keywords: ["software engineering", "clean code", "programming"],
    pages: 464,
    format: "hardcover",
    ISBN: "9780132350884",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.4,
        ratingsCount: 49343,
        reviewsCount: 1752,
        fiveStarRatingCount: 33612,
        oneStarRatingCount: 1052,
      },
    },
    highlighted: true,
  },
  {
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: ["Erich Gamma", "Richard Helm", "Ralph Johnson", "John Vlissides"],
    imageSrc: "./devbooks.webp",
    publisher: "Addison-Wesley",
    publicationDate: "1994-10-21",
    edition: 1,
    keywords: ["design patterns", "software design", "object-oriented"],
    pages: 395,
    format: "hardcover",
    ISBN: "9780201633610",
    language: "English",
    programmingLanguage: "C++",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.18,
        ratingsCount: 8905,
        reviewsCount: 283,
        fiveStarRatingCount: 5322,
        oneStarRatingCount: 211,
      },
    },
    highlighted: false,
  },
  {
    title: "The Pragmatic Programmer: Your Journey to Mastery",
    author: ["Andrew Hunt", "David Thomas"],
    imageSrc: "./devbooks.webp",
    publisher: "Addison-Wesley",
    publicationDate: "1999-10-30",
    edition: 1,
    keywords: ["programming", "software engineering", "best practices"],
    pages: 352,
    format: "hardcover",
    ISBN: "9780201616224",
    language: "English",
    programmingLanguage: "Ruby, C, Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.48,
        ratingsCount: 25884,
        reviewsCount: 1075,
        fiveStarRatingCount: 17986,
        oneStarRatingCount: 276,
      },
    },
    highlighted: true,
  },
  {
    title: "Refactoring: Improving the Design of Existing Code",
    author: ["Martin Fowler"],
    imageSrc: "./devbooks.webp",
    publisher: "Addison-Wesley",
    publicationDate: "1999-07-08",
    edition: 1,
    keywords: ["refactoring", "software design", "code quality"],
    pages: 464,
    format: "hardcover",
    ISBN: "9780201485677",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.29,
        ratingsCount: 12090,
        reviewsCount: 385,
        fiveStarRatingCount: 7521,
        oneStarRatingCount: 269,
      },
    },
    highlighted: false,
  },
  {
    title: "The Mythical Man-Month: Essays on Software Engineering",
    author: ["Frederick P. Brooks Jr."],
    imageSrc: "./devbooks.webp",
    publisher: "Addison-Wesley",
    publicationDate: "1975-01-01",
    edition: 1,
    keywords: ["software engineering", "management", "project management"],
    pages: 322,
    format: "hardcover",
    ISBN: "9780201835953",
    language: "English",
    programmingLanguage: null,
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.2,
        ratingsCount: 7397,
        reviewsCount: 302,
        fiveStarRatingCount: 4317,
        oneStarRatingCount: 178,
      },
    },
    highlighted: true,
  },
  {
    title: "The Art of Computer Programming",
    author: ["Donald E. Knuth"],
    imageSrc: "./devbooks.webp",
    publisher: "Addison-Wesley",
    publicationDate: "1968-01-01",
    edition: 1,
    keywords: ["algorithms", "computer science", "mathematics"],
    pages: 3200,
    format: "hardcover",
    ISBN: "9780201896831",
    language: "English",
    programmingLanguage: "C, Pascal",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.55,
        ratingsCount: 3890,
        reviewsCount: 220,
        fiveStarRatingCount: 3112,
        oneStarRatingCount: 37,
      },
    },
    highlighted: false,
  },
  {
    title: "Artificial Intelligence: A Modern Approach",
    author: ["Stuart Russell", "Peter Norvig"],
    imageSrc: "./devbooks.webp",
    publisher: "Prentice Hall",
    publicationDate: "2009-12-28",
    edition: 3,
    keywords: [
      "artificial intelligence",
      "computer science",
      "machine learning",
    ],
    pages: 1152,
    format: "hardcover",
    ISBN: "9780136042594",
    language: "English",
    programmingLanguage: "Java, Lisp",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.28,
        ratingsCount: 35254,
        reviewsCount: 2462,
        fiveStarRatingCount: 22870,
        oneStarRatingCount: 968,
      },
    },
    highlighted: false,
  },
  {
    title: "The Clean Coder: A Code of Conduct for Professional Programmers",
    author: ["Robert C. Martin"],
    imageSrc: "./devbooks.webp",
    publisher: "Prentice Hall",
    publicationDate: "2011-05-16",
    edition: 1,
    keywords: ["programming", "software development", "professionalism"],
    pages: 224,
    format: "hardcover",
    ISBN: "9780137081073",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.22,
        ratingsCount: 6481,
        reviewsCount: 245,
        fiveStarRatingCount: 4009,
        oneStarRatingCount: 210,
      },
    },
    highlighted: false,
  },
];

// DOM elements
const bookContainer = document.getElementById("booksContainer");
const highlitedBtn = document.getElementById("highlight");
const sortBtn = document.getElementById("sort");
const searchInput = document.getElementById("searchInput");
const loading = document.getElementById("loading");

// Create book card
function createBookCard(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  const keywordsHTML = book.keywords
    .map((keyword) => `<span>${keyword}</span>`)
    .join("");

  bookCard.innerHTML = `
                <img class="book-image" src="${book.imageSrc}" alt="${
    book.title
  }">
                <div class="book-content">
                    <h2>${book.title}</h2>
                    <p><strong>Author: </strong>${book.author.join(", ")}</p>
                    <p><strong>Publisher: </strong>${book.publisher}</p>
                    <p><strong>Published: </strong>${new Date(
                      book.publicationDate
                    ).toLocaleDateString()}</p>
                    <p><strong>Edition: </strong>${book.edition}</p>
                    <p><strong>Pages: </strong>${book.pages}</p>
                    <p><strong>Language: </strong>${book.language}</p>
                    <div class='keywords'><strong>Keywords: </strong><br>${keywordsHTML}</div>
                    <p class='rating'><strong>Rating: </strong>${
                      book.thirdParty.goodreads.rating
                    } ★</p>
                    ${
                      book.highlighted
                        ? '<p class="highlighted">Featured Book</p>'
                        : ""
                    }
                </div>
            `;

  return bookCard;
}

// Display books
function displayBooks(booksArray) {
  bookContainer.innerHTML = "";
  if (booksArray.length === 0) {
    bookContainer.innerHTML = '<p class="no-results">No books found</p>';
    return;
  }
  booksArray.forEach((book) => {
    bookContainer.appendChild(createBookCard(book));
  });
}

// Initial display
displayBooks(books);

// Highlighted books filter
highlitedBtn.addEventListener("click", function () {
  bookContainer.innerHTML = "";
  loading.style.display = "block";

  setTimeout(() => {
    const featuredBooks = books.filter((book) => book.highlighted);
    displayBooks(featuredBooks);
    loading.style.display = "none";
  }, 500);
});

// Sort by pages
sortBtn.addEventListener("click", function () {
  bookContainer.innerHTML = "";
  loading.style.display = "block";

  setTimeout(() => {
    const sortedBooks = [...books].sort((a, b) => b.pages - a.pages);
    displayBooks(sortedBooks);
    loading.style.display = "none";
  }, 500);
});

// Search functionality
searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm)
  );
  displayBooks(filteredBooks);
});
