# Quiz Time

A timed quiz app built with **React**, **Vite** and **Tailwind CSS**. Pick a category (HTML, CSS, JavaScript or React), answer 10 questions against a countdown timer, and see your score at the end.

## Features

- 4 categories with 10 multiple-choice questions each (40 in total)
- Countdown timer for every question (default: 20 seconds) with a progress bar that turns red in the last 5 seconds
- When time runs out the question locks and the correct answer is highlighted
- Instant feedback: correct answers turn green, wrong answers turn red
- Live score, results screen, and a retry button
- Responsive dark UI styled with Tailwind

## Tech stack

| Tool | Purpose |
| --- | --- |
| React 18 | UI components and state |
| Vite 5 | Dev server and build tool |
| Tailwind CSS 3 | Styling |

## Getting started

You need [Node.js](https://nodejs.org/) 18 or newer.

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal (usually http://localhost:5173).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |

## Project structure

```
quiz-app/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                  # App entry point
    ├── index.css                 # Tailwind directives and base styles
    ├── App.jsx                   # Holds quiz state (category, question, score)
    ├── data/
    │   └── questions.js          # Categories, questions, and timer setting
    ├── hooks/
    │   └── useTimer.js           # Countdown hook
    └── components/
        ├── CategoryCard.jsx      # A single category card
        ├── CategoryList.jsx      # Grid of category cards
        ├── QuizScreen.jsx        # Question, options, timer, next button
        ├── TimerBar.jsx          # Seconds left and progress bar
        ├── OptionButton.jsx      # One answer option
        └── ResultScreen.jsx      # Final score
```

## How it works

1. `App.jsx` keeps track of the selected category, the current question index, the score, and whether the quiz is finished.
2. `CategoryList` shows one `CategoryCard` per category. Clicking a card starts that quiz.
3. `QuizScreen` shows the current question. It is re-mounted for every question (via a `key`), so the timer resets each time.
4. `useTimer` counts down once per second and calls a callback when it reaches 0, which marks the question as timed out.
5. After the last question, `ResultScreen` shows the score with options to retry or go back.

## Customising

### Change the time per question

Open `src/data/questions.js` and edit this line:

```js
export const TIME_PER_QUESTION = 30; // seconds
```

The timer, the progress bar, and the "Ns each" label on the cards all update automatically.

### Add or edit questions

Questions live in `src/data/questions.js`. Each question has the text, a list of options, and the index (starting at 0) of the correct option:

```js
{
  question: "Which tag creates a hyperlink?",
  options: ["<link>", "<href>", "<a>", "<url>"],
  answer: 2, // "<a>"
}
```

### Add a new category

Add another object to the `categories` array:

```js
{
  id: "python",
  icon: "🐍",
  title: "Python",
  questions: [ /* ...your questions... */ ],
}
```

The new card appears on the home screen automatically. The grid uses 4 columns on large screens, so you can change `lg:grid-cols-4` in `CategoryList.jsx` if you add more.

### Change the colours

All styling uses Tailwind classes. The purple accent is `purple-600` / `purple-500` and the card background is `slate-800`. Search for those class names in `src/components/` and replace them with another Tailwind colour.

## Deployment

Run `npm run build` and upload the contents of the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, and so on).

## License

Free to use and modify for learning and personal projects.