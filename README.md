# Project Title

Interactive Theme Switcher with User Preferences

## Project Description

A simple web application that allows users to switch between a "Light" and a
"Dark" theme. The application persistently remember the user's selected theme
preference across sessions and demonstrate proficiency with React hooks and
TypeScript. Posts are loaded from dummyjson api: https://dummyjson.com/posts and displayed
using grid.

## Deployment

To deploy this project run

Start by cloning the project to your local machine, cd into the server folder and install the dependencies by runnning:

```bash
  npm i
```

also cd into the appointment folder and install the packages by running:

```bash
  npm i
```

## Tech Stack

- TypeScript
- Next 14
- Tailwind CSS

## Color Reference

| Color  | Hex     |
| ------ | ------- |
| main   | #FFFFFF |
| border | #4b5563 |
| dark   | #27272a |

## Features

- The application have a toggle (a button) that allows the user to switch between "Light" and "Dark" themes.
- The visual appearance of the application changes dynamically based on the selected theme (e.g., background color, text color, etc.)
- The application stores the user's chosen theme preference in local storage.

- On initial load or refresh, the application applies the user's last selected theme
- The entire application is written using TypeScript.
- Appropriate types for state variables, props, and functions are used

- useState is used to manage the current theme ("light" or "dark").

- useEffect is used to load the saved theme preference from storage on initial render.
- I Used useEffect to update local storage with the new theme selection whenever it changes.

- I Implemented a theme context using React createContext and useContext.
- I Provide theme data and a toggle function through the context to make them available throughout the application.
- I Demonstrated the usage of context provider and consumers.

- I Organized the project into reusable components.
- created a component for the theme switcher and another for the main content area of the application.
- Used GitHub for version control.
- This project was deployed using Vercel

## 🚀 About Me

I'm a Front-end developer with over 4 years of Experience in building responsive web applications, working with databases and familiar with best practices for deploying scalable and distributed software systems.

I am proficient in the technologies listed below

JavaScript | Node.js | Express.js| Git | Firebase | HTML5| CSS3 | MongoDB | ReactJS | NextJS | React js | React Native | Heroku | Vue Js | Angular Js | Postman | Netlify | API Integration.

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Joshjayboy)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joshua-akintemi-952ab419a/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/JoshuaJayBoy)

## Author

- [Joshua Akintemi](https://github.com/Joshjayboy)
