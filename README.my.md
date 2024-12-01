Створення/налаштування проекту:

1. New репозиторій(порожній) на github.com;
2. Клонуємо на комп
3. відкрити термінал, зайті в папку проекту(pwd - де знаходимось, cd -
   навігація(наприклад cd goit-react-hw-02), ls - список папок)
4. npm create vite@latest
5. .(створити проєкт у поточній папці) або назву (тоді створе нову папку)
6. React, JS + SWS (потім typescript)
7. npm install
8. npm run dev (Запустить проєкт)
9. ctrl + С (зупине сервер)
10. відкриваємо VScode
11. в index.html змінитит title з 'Vite + React' на свій
12. додати файл prettier
13. нормалізація стилів (npm i modern-normalize). В main.jsx імпортуємо стилі
    нормалізації (import "modern-normalize");
14. в файлі index.css, скид/додавання деяких глобальних стилів для елементів;
15. Перевірка якості коду: Розширення ESLint + налаштування файлу ESLint: Замінили вміст файлу eslint.config.js; Або 'точково':
<!-- rules: {
...
"react/prop-types": 0,
...
} -->
16. в файлі vite.config.js замінили вміст
17. npm i prop-types - для PropTypes;
18. npm i clsx - додавання декількох класів на елемент
19. Formik(npm i formik) + yup(npm i yup) валідація;
<!--  -->
20. npm install axios (запит на бекенд замість fetch)
21. npm install react-hot-toast ((сповіщення)). Toaster в main біля App
22. npm i nanoid (генерування id)
23. npm i react-icons

**--- Виконання д/з #6 ---**

1. npm install @reduxjs/toolkit (встановлення Redux Toolkit);
2. npm install react-redux (Для використання React та Redux разом);
3. npm i redux-persist - бібліотека як LocalStorige для Redux
4. створюємо папку redux, в ній файли:
   4.1. store.js,
   4.2. contactSlise.js(initialState, slice(name; initialState,
   reducers) + import { createSlice } from '@reduxjs/toolkit'; selectors (не завжди зручно в slice))
5. експортуємо slice як contactReducer і пидключаємо його в store
6. на **store.js** використовуємо configureStore - для створення store, повертає новий
   об'єкт store
7. на **main** огорнути <Provider store={store}>, (приймає **пропс store**) - зв'язує store з компонентами React, щоб вони могли отримувати доступ до його стану та методів. обертаємо Provider все дерево компонентів (щоб будь-який компонент у додатку міг використовувати стор);
8. useSelector в slice
9. const dispatch = useDispatch(); dispatch(addContact(newContact)) - приклад; newContact - як аргумент. в slice буде action.payload. Відправка екшенів
10. useSelector() - витягуємо дані
11. actions передаємо у компоненти
12. **redux-persist** - (npm i redux-persist) бібліотека як _LocalStorige_
    для Redux (документацію можна знайти в redux-toolkit через пошук 'Use with
    Redux-Persist). (1)другий та третій імпорт з докум.Redux-Persist вставляємо в
    **store**; (2) копіюємо persistConfig, persistedReducer, middleware, persistor -
    вставляємо в **store**; Огорнути App в main; <PersistGate loading={null} persistor={persistor}><App/></PersistGate>

---- Home work #5 маршрутизатор, перехід по сторінкам;

21. Маршрутизатор React (npm install react-router-dom); 22. Для правильної роботи додатка з маршрутизацією після розгортання на Vercel: файл налаштувань vercel.json в кореневу папку проекту. Вміст:
    {
    "rewrites": [
    {"source": "/(.*)", "destination": "/"}
    ]
    }

   <!--  ------>

- Loader - npm install react-loader-spinner --save;
- Modal - npm install react-modal

- **Redux DevTools** (вкладка Redux) - розширення інструментів
