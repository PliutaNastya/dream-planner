# Планувальник мрій

> Надихаючий застосунок для створення, збереження та перегляду особистих мрій.
> Побудований на React, RTK Query, Firebase Firestore. Архітектура — feature-based.

---

## Основні можливості

- 📝 Додавання мрій (назва, опис, категорія, рік, друг)
- 📋 Перегляд усіх мрій у вигляді списку
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
│   ├── context
│   │   └── ThemeContext.js
│   ├── providers
│   │   └── ThemeProvider.jsx
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
│   ├── add-edit-dream
│   │   ├── model
│   │   │   └── useManageDream.js
│   │   └── ui
│   │       └── DreamForm.jsx
│   ├── delete-dream
│   │   ├── model
│   │   │   └── useDeleteDream.js
│   │   └── ui
│   │       └── DeleteDreamButton.jsx
│   ├── dream-details
│   │   ├── model
│   │   │   └── useGetDreamDetails.js
│   │   └── ui
│   │       └── DreamDetailsCard.jsx
│   └── get-dreams
│       ├── model
│       │   ├── useDreamsFilters.js
│       │   └── useGetDreams.js
│       └── ui
│           ├── DreamsFilterPanel.jsx
│           └── DreamsList.jsx
├── index.css
├── main.jsx
├── pages
│   ├── AddDreamPage.jsx
│   ├── DreamDetailsPage.jsx
│   ├── DreamListPage.jsx
│   ├── EditDreamPage.jsx
│   ├── HomePage.jsx
│   └── NotFoundPage.jsx
└── shared
    ├── assets
    │   ├── img
    │   ├── lottie
    │   │   ├── dream-animation.lottie
    │   │   ├── dreams-animation.lottie
    │   │   ├── edit-animation.lottie
    │   │   ├── form-animation.lottie
    │   │   └── list-animation.lottie
    │   └── scss
    │       ├── abstracts
    │       │   ├── _extends.scss
    │       │   ├── _functions.scss
    │       │   ├── _mixins.scss
    │       │   ├── _variables.scss
    │       │   └── index.scss
    │       ├── base
    │       │   ├── _base.scss
    │       │   ├── _common.scss
    │       │   ├── _form.scss
    │       │   ├── _reset.scss
    │       │   ├── _utilities.scss
    │       │   └── index.scss
    │       ├── components
    │       │   ├── _menu.scss
    │       │   ├── _theme-toggle.scss
    │       │   └── index.scss
    │       ├── index.scss
    │       ├── layout
    │       │   ├── _main.scss
    │       │   └── index.scss
    │       └── pages
    │           ├── _home.scss
    │           └── index.scss
    ├── config
    │   ├── apiConfig.js
    │   ├── dreamCategories.js
    │   ├── firebaseConfig.js
    │   └── frontRoutes.js
    ├── hooks
    ├── ui
    │   ├── Aside
    │   │   ├── Aside.jsx
    │   │   └── index.js
    │   ├── Banner
    │   │   ├── Banner.jsx
    │   │   └── index.js
    │   ├── Button
    │   │   ├── ActionLink.jsx
    │   │   └── index.js
    │   ├── Icon
    │   │   ├── Icon.jsx
    │   │   └── index.js
    │   ├── MainLayout
    │   │   └── MainLayout.jsx
    │   ├── PaginationBlock
    │   │   ├── PaginationBlock.jsx
    │   │   └── index.js
    │   ├── Spinner
    │   │   ├── Spinner.jsx
    │   │   └── index.js
    │   └── ThemeToggle
    │       ├── ThemeToggle.jsx
    │       └── index.js
    └── utils
        └── getMenuFronRoutes.js
</pre>