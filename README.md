# Random Quote Generator

A random quote generator built with React and Vite. Click a button, get an inspiring quote. Simple as that.

## What it does

Fetches random quotes from the API Ninjas Quotes API and shows them in a Material UI card. Clean interface, no clutter.

## Built with

- React + Vite
- Material UI
- Axios for API calls
- API Ninjas Quotes API

## Getting started

You'll need Node.js installed (version 14 or higher works fine).

**Clone and install:**
```bash
git clone https://github.com/your-username/random-quote-generator.git
cd random-quote-generator
npm install
```

**Get an API key:**

Head to [API Ninjas](https://api-ninjas.com/) and sign up for a free API key. Then create a `.env` file in the root directory:
```
VITE_API_KEY=your_api_key_here
```

**Run it:**
```bash
npm run dev
```

Open http://localhost:5173 and you're good to go.

## How it works

Click the "Get Quote" button and a random quote appears. That's it. The app fetches from the API and displays the quote with its author.

## Project structure
```
src/
  ├── components/     # React components
  ├── App.jsx         # Main app component
  └── main.jsx        # Entry point
```

## Building for production
```bash
npm run build
```

The production files will be in the `dist` folder.

## License

MIT - do whatever you want with it.