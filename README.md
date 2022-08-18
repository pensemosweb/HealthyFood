# How to scaffold the project if you don't want to clone it
1. Init the project using `npm create vite@latest`
2. Install the following dependencies using:
  ```bash
    npm install cypress vitest jsdom @testing-library/jest-dom @testing-library/react --save-dev
  ```
3. Add a `jest-setup.js` file with the following content:
  ```js
  import '@testing-library/jest-dom';
  ```
4. Add a `test` object configuration in vite.config.js
  ```js
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ["./jest-setup.js"]
  }
  ```
 5. Finally add `bdd` and `tdd` scripts in package.json
  ```json
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview",
      "bdd": "cypress open",
      "tdd": "vitest"
    }
  ```
  6. If you are lost, you can check the code files of this repo, and the scaffolding is in the first commit.
 
