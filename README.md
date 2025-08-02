# Планувальник мрій

> Надихаючий застосунок для створення, збереження та перегляду особистих мрій.
> Побудований на React, RTK Query, Firebase Firestore. Архітектура — feature-based (feature-sliced design).

---

## Основні можливості

- 📝 Додавання мрій (назва, опис, категорія, рік, друг)
- 📋 Перегляд усіх мрій у вигляді списку
- 🔍 Пошук по назві мрії
- 📂 Фільтрація за категорією
- 📊 Сортування за роком
- 🌓 Темна/світла тема
- ✏️ Редагування та 🗑️ видалення мрій
- 📄 Пагінація
- 🎞️ Lottie-анімації
- ☁️ Зберігання даних через Firebase Firestore

---

## Стек технологій

- **React**
- **React Router**
- **Redux Toolkit + RTK Query**
- **Firebase Firestore**
- **SCSS**
- **Lottie (через lottie-react)**
- **Feature-Sliced Design Architecture**

---

## Структура проєкту
<pre>
src
├── App.scss
├── app
│   ├── App.jsx
│   ├── providers
│   ├── router
│   │   └── routes.jsx
│   └── store.js
├── entities
│   ├── dream
│   │   ├── model
│   │   │   ├── api
│   │   │   │   └── DbOperations.js
│   │   │   └── dreamsApi.js
│   │   └── ui
│   │       └── DreamCard.jsx
│   └── index.js
├── features
│   ├── manageDream
│   │   ├── index.js
│   │   └── model
│   │       ├── useAddDream.js
│   │       ├── useDeleteDream.js
│   │       └── useEditDream.js
│   └── theme-switcher
│       ├── index.js
│       ├── model
│       │   └── useTheme.js
│       └── ui
│           └── ThemeToggle.jsx
├── index.css
├── main.jsx
├── pages
│   ├── AddDreamPage.jsx
│   ├── DreamListPage.jsx
│   ├── HomePage.jsx
│   └── NotFoundPage.jsx
├── shared
│   ├── assets
│   │   ├── img
│   │   ├── lottie
│   │   └── scss
│   │       ├── abstracts
│   │       │   ├── _extends.scss
│   │       │   ├── _functions.scss
│   │       │   ├── _mixins.scss
│   │       │   ├── _variables.scss
│   │       │   └── index.scss
│   │       ├── base
│   │       │   ├── _base.scss
│   │       │   ├── _common.scss
│   │       │   ├── _reset.scss
│   │       │   ├── _utilities.scss
│   │       │   └── index.scss
│   │       ├── components
│   │       │   ├── _menu.scss
│   │       │   └── index.scss
│   │       ├── index.scss
│   │       ├── layout
│   │       │   ├── _footer.scss
│   │       │   ├── _header.scss
│   │       │   └── index.scss
│   │       └── pages
│   │           └── index.scss
│   ├── config
│   │   ├── apiConfig.js
│   │   ├── firebaseConfig.js
│   │   └── frontRoutes.js
│   ├── hooks
│   └── ui
│       ├── Button
│       ├── Input
│       ├── Select
│       └── ThemeToggle
└── widgets
    ├── DreamList
    │   ├── index.js
    │   └── ui
    │       └── DreamList.jsx
    ├── Header
    │   ├── index.js
    │   └── ui
    │       └── Header.jsx
    └── SearchPanel
        ├── index.js
        └── ui
            └── SearchPanel.jsx
</pre>