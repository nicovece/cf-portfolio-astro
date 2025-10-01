---
title: 'Nomalyze'
shortDescription: 'A Django recipes analyzer.'
description: 'A **full-stack Django recipe management application** with intelligent difficulty calculation and interactive data analytics. Built with **Python** and **PostgreSQL**, **Nomalyze** helps users organize recipes while providing visual insights into cooking patterns through **Pandas** and **Matplotlib**. Features advanced search, responsive design, and production deployment on **Render**.'
pubDate: 2025-09-30
heroImage: '../../assets/images/nomalyze_django-homepage.png'
gallery:
  - path: '../../assets/images/nomalyze_django-homepage.png'
    description: 'Home screen'
    slug: 'home'
    class: 'row-1'
  - path: '../../assets/images/nomalyze_django-recipes_list.png'
    description: 'All recipes list'
    slug: 'detail'
    class: 'row-2'
  - path: '../../assets/images/nomalyze_django-recipe_detail.png'
    description: 'Recipe detail'
    slug: 'detail'
    class: 'two--r row-2'
  - path: '../../assets/images/nomalyze_django-search_analyze.png'
    description: 'Search and analyze recipes'
    slug: 'detail'
    class: 'row-3'
links:
  - url: 'https://github.com/nicovece/cf-recipe-app'
    text: 'Github repository'
  - url: 'https://cf-recipe-app.onrender.com/'
    text: 'Live website'
niceName: 'flicktionary-angular'
stack:
  - name: Python
  - name: Django 5.2
  - name: PostgreSQL
  - name: dj-database-url
    description: for environment-based DB configuration
  - name: Pandas
    description: for data processing and analytics
  - name: Matplotlib
    description: for data visualization
  - name: HTML5
  - name: Tailwind CSS
    description: for responsive design
  - name: Django Templates
    description: for dynamic content rendering
  - name: WhiteNoise
    description: for serving static files
  - name: Django Static Files
    description: for static file management
  - name: Gunicorn
    description: for WSGI server in production
  - name: Render
    description: for deployment (PaaS)
  - name: pnpm
    description: for package management
  - name: django-browser-reload
    description: for live-reloading during development
---

**Nomalyze** is a full-stack Django web application that turns recipe management into an **analytical experience**. The name combines _“nom”_ (the sound of eating) with _“analyze”_, highlighting its dual purpose: helping users discover delicious recipes while offering intelligent insights into their cooking habits.

The application is built on **Django 5.2** with a **PostgreSQL backend**, demonstrating proficiency across the full stack—from database design to production deployment. It uses Django’s ORM for efficient data management, with custom template filters and context processors enabling dynamic content rendering.

Static assets are served via **WhiteNoise middleware**, while **Tailwind CSS** provides responsive, modern styling.

A key feature is the **intelligent difficulty calculation algorithm**, which classifies recipes from _Easy_ (quick meals with few ingredients) to _Hard_ (complex, time-intensive dishes). This enhances the user experience while showcasing programmatic decision-making.

The **analytics dashboard** integrates **Pandas** and **Matplotlib**, allowing users to explore their recipe collection through interactive charts and visualizations. Insights include cooking patterns, ingredient frequency, and difficulty distribution.

For deployment, the app runs on **Render** with secure environment-based configuration. Sensitive data is handled through environment variables, and the database dynamically switches between **SQLite (local development)** and **PostgreSQL (production)**—demonstrating readiness for real-world deployment environments.
