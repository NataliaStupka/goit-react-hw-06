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

**--- Виконання д/з #6 ---**

<!--h/w-5  маршрутизатор, перехід по сторінкам-->

21. Маршрутизатор React (npm install react-router-dom);
22. Для правильної роботи додатка з маршрутизацією після розгортання на Vercel: файл налаштувань vercel.json в кореневу папку проекту. Вміст:
    {
    "rewrites": [
    {"source": "/(.*)", "destination": "/"}
    ]
    }

   <!--  ------>

- Loader - npm install react-loader-spinner --save;
- Modal - npm install react-modal
