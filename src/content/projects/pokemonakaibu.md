---
title: 'PokémonĀkaibu'
shortDescription: 'Modular Vanilla JS Pokédex'
description: '**PokémonĀkaibu** is a responsive, client-side web app built with vanilla **JavaScript**, **HTML**, and **CSS**, styled with **Bootstrap**. It fetches data from the PokéAPI in batches to support infinite scrolling, dynamically renders each Pokémon as an interactive entry, and uses modals for detailed views. The project is modular, performance-optimized, and includes polyfills for broader browser compatibility.'
pubDate: 2025-05-01
heroImage: '../../assets/images/pokemon_home.png'
gallery:
  - path: '../../assets/images/pokemon_home.png'
    description: 'Home screen'
    slug: 'home'
    class: ''
  - path: '../../assets/images/pokemon_detail.png'
    description: 'Detail modal'
    slug: 'detail'
    class: ''
  # - path: '../../assets/images/pokemon_search.png'
  #   description: 'Search feature'
  #   slug: 'search'
  #   class: ''
links:
  - url: 'https://github.com/nicovece/pokemonakaibu'
    text: 'Github repository'
  - url: 'https://nicovece.github.io/pokemonakaibu/'
    text: 'Live website'
niceName: 'pokemonakaibu'
stack:
  - name: JavaScript
    description: ES6+
  - name: HTML5
  - name: CSS3
    description: with custom styles and responsive design
  - name: Bootstrap 5
    description: for layout and UI components
  - name: PokéAPI
    description: for Pokémon data
  - name: Fetch API
    description: with polyfill for compatibility
  - name: Promise API
    description: with polyfill for compatibility
  - name: jQuery
    description: for DOM manipulation and event handling
  - name: Live Server
    description: for local development, via VSCode extension
  - name: Prettier
    description: for code formatting
  - name: ESLint
    description: for code linting
---

**PokémonĀkaibu** is a comprehensive, user-friendly online archive designed to provide Pokémon fans and researchers with detailed, easily accessible information about various Pokémon species, including their stats, abilities, and types.

Built as a client-side web application using **vanilla JavaScript**, **HTML**, and **CSS**, with **Bootstrap** for responsive styling, it leverages the public PokéAPI to deliver an interactive and visually appealing data exploration experience across all devices.

The app displays a scrollable list of Pokémon, each shown with its name and image. Users can load more entries as they scroll or use the search bar to filter Pokémon by name; search by ID is planned for future updates. Clicking on a Pokémon opens a modal window with detailed information, including stats, types, and abilities.

PokémonĀkaibu loads entries in batches for efficient data handling and infinite scrolling, and uses polyfills for Promises and Fetch to maintain compatibility with older browsers. The codebase is modular and optimized for maintainability, accessibility, and performance, ensuring a fast and smooth user experience. For optimal use, the project can also be run locally using a development server like the Live Server extension in Visual Studio Code.
