// Get a reference to the object representing the BODY element so we can append stuff to it.
const body = document.querySelector('body');

// Create a new H1 element.
const q1 = document.createElement('h1');
const q2 = document.createElement('h1');
const q3 = document.createElement('h1');



// Add the new H1 element to the body.
body.append(q1);

// Create a new P element.
const a1 = document.createElement('p');
const a2 = document.createElement('p');
const a3 = document.createElement('p');


// Create a text node and add it to the P element. Note the use of `` rather
// than '' which allows us to break the string across lines.
// Create a text node and add it to the H1


//list
const l1 = document.createElement('li');
const l2 = document.createElement('li');
const l3 = document.createElement('li');
const l4 = document.createElement('li');
const l5 = document.createElement('li');
const l6 = document.createElement('li');
const l7 = document.createElement('li');
const l8 = document.createElement('li');
const l9 = document.createElement('li');
const l10 = document.createElement('li');




q1.append(document.createTextNode('Can you tell me why HTML was developed?'));

a1.append(
  document.createTextNode(`
 HTML (Hypertext Markup Language) was developed to create a standard way to
 create and structure documents on the World Wide Web. It allows developers to
 create structured documents, including headings, paragraphs, images and links,
 that can be displayed in a web browser. It was created to simplify the process
 of creating and sharing documents online, so that anyone can create and view
 web pages with a consistent look and feel.
`),
);


// Add the new P element to the body.
body.append(a1);

q2.append(document.createTextNode(`
  What about using HTML for GUIs?
`),
);

body.append(q2)

a2.append(
  document.createTextNode(`
  HTML can be used to create user interfaces for web applications, but it is primarily designed as a 
  markup language for creating structured documents to be displayed in web browsers. While it can 
  be used to create basic user interfaces, it is not typically considered a good choice for creating 
  complex, interactive user interfaces. Other technologies such as JavaScript and CSS are typically used in
  conjunction with HTML to create more advanced user interfaces for web applications. Additionally, there are 
  other technologies such as Electron, React Native and NativeScript that allow to create cross-platform desktop 
  and mobile apps using web technologies such as HTML, CSS, and JavaScript.
`),
);


body.append(a2);

q3.append(document.createTextNode(`
What are some of the main elements of HTML?
`),
);

body.append(q3)

a3.append(
  document.createTextNode(`
  Some of the main elements of HTML include:
`),
);

body.append(a3)


l1.append(
  document.createTextNode(`
  <html>: This is the root element of an HTML document, and it contains all of the other elements.
`),
);

body.append(l1)

l1.append(
  document.createTextNode(`
  <html>: This is the root element of an HTML document, and it contains all of the other elements.
`),
);

body.append(l1)

l2.append(
  document.createTextNode(`
  //<head>: This element contains information about the document, such as the title of the page, which is displayed in the browser's title bar or tab.
  `),
);

body.append(l2)

l3.append(
  document.createTextNode(`
  //<body>: This element contains the content of the document that is displayed in the browser window.
  `),
);

body.append(l3)

l4.append(
  document.createTextNode(`
  //<h1> to <h6>: These elements are used for headings and subheadings. <h1> is the highest level heading, while <h6> is the lowest.
  `),
);

body.append(l4)

l5.append(
  document.createTextNode(`
  //<p>: This element is used for paragraphs of text.
  `),
);

body.append(l5)

l6.append(
  document.createTextNode(`
  //<a>: This element is used for hyperlinks, which allow users to navigate between pages on the web.
  `),
);

body.append(l6)

l7.append(
  document.createTextNode(`
  //<img>: This element is used to embed images in a web page.
  `),
);

body.append(l7)

l8.append(
  document.createTextNode(`
  //<ul> and <ol>: These elements are used for unordered and ordered lists, respectively.
  `),
);

body.append(l8)

l9.append(
  document.createTextNode(`
  //<li>: This element is used for list items.
  `),
);

body.append(l9)

l10.append(
  document.createTextNode(`
  //<div> and <span>: These elements are used for grouping and applying styles to elements on a web page.`),
);

body.append(l10)

