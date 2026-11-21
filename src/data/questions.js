// Seconds allowed per question
export const TIME_PER_QUESTION = 30;

export const categories = [
  {
    id: "html",
    icon: "🌐",
    title: "HTML",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "High Text Machine Language",
          "HyperTool Multi Language",
          "Home Text Markup Link",
        ],
        answer: 0,
      },
      {
        question: "Which tag creates the largest heading?",
        options: ["<h6>", "<h1>", "<head>", "<header>"],
        answer: 1,
      },
      {
        question: "Which tag creates a hyperlink?",
        options: ["<link>", "<href>", "<a>", "<url>"],
        answer: 2,
      },
      {
        question: "Which attribute sets an image's file path?",
        options: ["href", "alt", "path", "src"],
        answer: 3,
      },
      {
        question: "Which tag makes an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: 0,
      },
      {
        question: "Which tag inserts a line break?",
        options: ["<lb>", "<br>", "<break>", "<hr>"],
        answer: 1,
      },
      {
        question: "Where does the visible page content go?",
        options: ["<head>", "<meta>", "<body>", "<title>"],
        answer: 2,
      },
      {
        question: "Which tag defines a table row?",
        options: ["<td>", "<th>", "<table>", "<tr>"],
        answer: 3,
      },
      {
        question: "Which semantic tag holds navigation links?",
        options: ["<nav>", "<menu>", "<section>", "<aside>"],
        answer: 0,
      },
      {
        question: "Which attribute gives an image alternative text?",
        options: ["title", "alt", "name", "caption"],
        answer: 1,
      },
    ],
  },
  {
    id: "css",
    icon: "🎨",
    title: "CSS",
    questions: [
      {
        question: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Creative Style System",
          "Cascading Style Sheets",
          "Colorful Style Sheets",
        ],
        answer: 2,
      },
      {
        question: "Which property changes text colour?",
        options: ["font-color", "text-style", "fg", "color"],
        answer: 3,
      },
      {
        question: "Which symbol selects a class?",
        options: [". (dot)", "# (hash)", "* (star)", "& (and)"],
        answer: 0,
      },
      {
        question: "Which symbol selects an ID?",
        options: [". (dot)", "# (hash)", "@ (at)", "$ (dollar)"],
        answer: 1,
      },
      {
        question: "Which declaration turns on Flexbox?",
        options: [
          "flex: on",
          "display: flex",
          "layout: flex",
          "position: flex",
        ],
        answer: 1,
      },
      {
        question: "Which property adds space outside an element's border?",
        options: ["padding", "spacing", "margin", "gap"],
        answer: 2,
      },
      {
        question: "Which property sets text size?",
        options: ["text-size", "font-size", "size", "font-style"],
        answer: 1,
      },
      {
        question: "Which value fixes an element to the viewport?",
        options: [
          "position: absolute",
          "position: relative",
          "position: sticky",
          "position: fixed",
        ],
        answer: 3,
      },
      {
        question: "Which pseudo-class styles an element on mouse over?",
        options: [":hover", ":focus", ":active", ":over"],
        answer: 0,
      },
      {
        question: "Which property defines grid columns?",
        options: [
          "grid-columns",
          "grid-template-columns",
          "columns-grid",
          "grid-cols",
        ],
        answer: 1,
      },
    ],
  },
  {
    id: "js",
    icon: "⚡",
    title: "JavaScript",
    questions: [
      {
        question: "Which keyword declares a variable that can't be reassigned?",
        options: ["var", "let", "const", "static"],
        answer: 2,
      },
      {
        question: "What does typeof null return?",
        options: ['"null"', '"undefined"', '"object"', '"number"'],
        answer: 2,
      },
      {
        question: "Which method adds an item to the end of an array?",
        options: ["push()", "pop()", "shift()", "add()"],
        answer: 0,
      },
      {
        question: "What does === check?",
        options: [
          "Value only",
          "Value and type",
          "Type only",
          "Reference only",
        ],
        answer: 1,
      },
      {
        question: "Which statement prints to the browser console?",
        options: ["print()", "echo()", "console.log()", "log.console()"],
        answer: 2,
      },
      {
        question: "Which of these is NOT a JavaScript data type?",
        options: ["string", "boolean", "symbol", "float"],
        answer: 3,
      },
      {
        question: "How do you get the number of items in an array?",
        options: ["arr.length", "arr.size()", "arr.count", "len(arr)"],
        answer: 0,
      },
      {
        question: "Which method selects an element by its ID?",
        options: [
          "querySelectorAll()",
          "document.getElementById()",
          "getElement()",
          "document.find()",
        ],
        answer: 1,
      },
      {
        question: "Which method turns a JSON string into an object?",
        options: [
          "JSON.stringify()",
          "JSON.object()",
          "JSON.parse()",
          "JSON.decode()",
        ],
        answer: 2,
      },
      {
        question: "Which is the correct arrow function syntax?",
        options: ["function => {}", "() -> {}", "=> () {}", "() => {}"],
        answer: 3,
      },
    ],
  },
  {
    id: "react",
    icon: "⚛️",
    title: "React",
    questions: [
      {
        question: "Which company created React?",
        options: ["Google", "Meta (Facebook)", "Microsoft", "Amazon"],
        answer: 1,
      },
      {
        question: "What does JSX stand for?",
        options: [
          "JavaScript XML",
          "JavaScript Extra",
          "Java Syntax Extension",
          "JSON XML",
        ],
        answer: 0,
      },
      {
        question: "Which hook manages state in a function component?",
        options: ["useEffect", "useRef", "useState", "useMemo"],
        answer: 2,
      },
      {
        question: "Which hook runs side effects such as data fetching?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        answer: 0,
      },
      {
        question: "How do you pass data from a parent to a child component?",
        options: ["state", "props", "refs", "hooks"],
        answer: 1,
      },
      {
        question:
          "Which attribute should list items have for efficient rendering?",
        options: ["id", "index", "name", "key"],
        answer: 3,
      },
      {
        question: "How must a component name start?",
        options: ["Lowercase letter", "Underscore", "Capital letter", "Number"],
        answer: 2,
      },
      {
        question: "What is the Virtual DOM?",
        options: [
          "A lightweight copy of the real DOM",
          "A browser extension",
          "A CSS framework",
          "A database",
        ],
        answer: 0,
      },
      {
        question:
          "How can you return multiple elements without an extra DOM node?",
        options: ["<div>", "<Fragment> or <></>", "<span>", "<group>"],
        answer: 1,
      },
      {
        question: "How do you update state from useState?",
        options: [
          "Assign it directly",
          "Call the setter function",
          "Use this.state",
          "Edit props",
        ],
        answer: 1,
      },
    ],
  },
];
