# Password Generator

This is a **React-based Password Generator** application built with **Vite**. The application allows users to generate secure passwords with customizable options such as length, inclusion of uppercase letters, lowercase letters, numbers, and symbols. It also evaluates the strength of the generated password and provides visual feedback.

## Features

- Generate secure passwords with customizable options:
  - Include uppercase letters
  - Include lowercase letters
  - Include numbers
  - Include symbols
  - Adjustable password length (5 to 50 characters)
- Password strength evaluation with visual indicators:
  - Very Weak, Weak, Good, Strong, Very Strong
- Copy generated password to clipboard with a single click.
- Responsive and modern UI with dark mode support.

## Project Setup

This project uses the following technologies and tools:

- **React**: Frontend library for building user interfaces.
- **Vite**: Fast build tool for modern web projects.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **ESLint**: Linting tool for maintaining code quality.
- **Prettier**: Code formatter with Tailwind CSS plugin.

## Folder Structure

```
src/
├── App.jsx                # Main application component
├── App.css                # Global styles
├── PasswordGenerator.jsx  # Password generator component
├── components/
│   ├── Alert.jsx          # Alert component for notifications
│   ├── CopyButton.jsx     # Button to copy text to clipboard
├── context/
│   ├── AlertContext.jsx   # Context for managing alerts
├── assets/                # Static assets (e.g., images)
├── index.css              # Tailwind CSS setup
├── main.jsx               # Application entry point
```

## How to Run the Project

1. Clone the repository:
   ```sh
   git clone https://github.com/MrAkbari91/password-generator.git
   cd password-generator
   ```

2. Install dependencies:

   - Using **npm**:
     ```sh
     npm install
     ```

   - Using **Bun**:
     ```sh
     bun install
     ```

   - Using **Yarn**:
     ```sh
     yarn install
     ```

3. Start the development server:

   - Using **npm**:
     ```sh
     npm run dev
     ```

   - Using **Bun**:
     ```sh
     bun run dev
     ```

   - Using **Yarn**:
     ```sh
     yarn dev
     ```

4. Open the application in your browser at `http://localhost:5173`.

## Scripts

- **Start the development server**:
  - `npm run dev` / `bun run dev` / `yarn dev`

- **Build the project for production**:
  - `npm run build` / `bun run build` / `yarn build`

- **Preview the production build**:
  - `npm run preview` / `bun run preview` / `yarn preview`

- **Run ESLint to check for code quality issues**:
  - `npm run lint` / `bun run lint` / `yarn lint`

## Customization

You can customize the password generation logic in the [`PasswordGenerator.jsx`](src/PasswordGenerator.jsx) component. The password strength evaluation logic is also implemented in the same file.

## Future Enhancements

- Add user authentication for saving password preferences.
- Implement a password history feature.
- Add more advanced password strength evaluation criteria.

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.