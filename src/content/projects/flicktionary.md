---
title: 'F L I C K T I O N A R Y'
shortDescription: 'Modular Vanilla JS Pokédex'
description: 'Flicktionary is a responsive, client-side web app built with vanilla JavaScript, HTML, and CSS, styled with Bootstrap. It fetches data from the PokéAPI in batches to support infinite scrolling, dynamically renders each Pokémon as an interactive entry, and uses modals for detailed views. The project is modular, performance-optimized, and includes polyfills for broader browser compatibility.'
pubDate: 2025-05-02
heroImage: '../../assets/images/flicktionary_home.png'
gallery:
  - path: '../../assets/images/flicktionary_home.png'
    description: 'Home screen'
    slug: 'home'
    class: 'two--l'
  - path: '../../assets/images/flicktionary_documentation.png'
    description: 'Documentation page'
    slug: 'detail'
    class: ''
links:
  - url: 'https://github.com/nicovece/flicktionary'
    text: 'Github repository'
  - url: 'https://flicktionary.onrender.com/'
    text: 'Live website'
niceName: 'pokemonakaibu'
---

PokémonĀkaibu is a comprehensive, user-friendly online archive designed to provide Pokémon fans and researchers with detailed, easily accessible information about various Pokémon species, including their stats, abilities, and types.

Built as a client-side web application using vanilla JavaScript, HTML, and CSS, with Bootstrap for responsive styling, it leverages the public PokéAPI to deliver an interactive and visually appealing data exploration experience across all devices.

The app displays a scrollable list of Pokémon, each shown with its name and image. Users can load more entries as they scroll or use the search bar to filter Pokémon by name; search by ID is planned for future updates. Clicking on a Pokémon opens a modal window with detailed information, including stats, types, and abilities.

PokémonĀkaibu loads entries in batches for efficient data handling and infinite scrolling, and uses polyfills for Promises and Fetch to maintain compatibility with older browsers. The codebase is modular and optimized for maintainability, accessibility, and performance, ensuring a fast and smooth user experience. For optimal use, the project can also be run locally using a development server like the Live Server extension in Visual Studio Code.
