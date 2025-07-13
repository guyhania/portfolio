# Workflow
1. First think through the problem, read the codebase for relevant files, and write a plan to tasks/todo.md.
2. The plan should have a list of todo items that you can check off as you complete them
3. Before you begin working, check in with me and I will verify the plan.
4. Then, begin working on the todo items, marking them as complete as you go.
5. Please every step of the way just give me a high level explanation of what changes you made
6. Make every task and code change you do as simple as possible. We want to avoid making any massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.
7. Finally, add a review section to the [todo.md](http://todo.md/) file with a summary of the changes you made and any other relevant information.

# Code style
- Use ES modules (import/export) syntax, not CommonJS (require)
- Destructure imports when possible (e.g., import { foo } from 'bar')
- Use single quotes for strings
- Prefer const over let when variables won't be reassigned
- Use meaningful variable and function names
- Follow camelCase for variables and functions, PascalCase for classes
- Use 2-space indentation
- Use single quotes for strings unless interpolation is needed
- Include trailing commas in multiline objects and arrays
- Use semicolons consistently
- Line length limit: 80 characters
- Use camelCase for variables and functions
- Use PascalCase for classes and components
- Use UPPER_SNAKE_CASE for constants
- Use kebab-case for file names
- Use descriptive names, avoid abbreviations
- Use TypeScript interfaces over types when possible
- Prefer readonly arrays and objects
- Use optional chaining (?.) and nullish coalescing (??)
- Avoid any type, use unknown instead
- Use arrow functions for callbacks and short functions
- Use functional components with hooks
- Prefer named exports over default exports
- Use PascalCase for component names
- Keep components small and focused
- Use TypeScript for prop types
- Use comments sparingly, prefer self-documenting code
- Don't comment out code - remove it instead
- Don't add comments that describe the process of changing code
- Comments should not include past tense verbs like "added", "removed", or "changed"
- Place comments above the code they describe, not at the end of lines
- Don't add comments that emphasize different versions of the code
- Prefer editing existing files to creating new ones
- Keep related functionality in the same file when appropriate
- Use index files for clean imports from directories
- Never create documentation files (*.md or README) unless explicitly requested
- Use try-catch blocks for error handling
- Prefer specific error types over generic Error
- Log errors with context information
- Use early returns to reduce nesting

# Tech Stack
- Framework: Next.js 14
- Language: TypeScript 5.2
- Styling: Tailwind CSS 3.4

# Code Style
- Use ES modules (import/export) syntax
- Destructure imports when possible
- Follow TypeScript strict mode guidelines
- Prefer async/await
- Follow the Airbnb Style Guide

# Workflow
- Run `npm run lint` before committing
- Use `npm run format` to auto-format code
- Ensure tests pass with `npm test`

# Do Not
- Do not edit files in the `src/legacy` directory
- Do not use `any` type in TypeScript
- Do not commit directly to the `main` branch

# Tools
- Follow Prettier formatting rules
- Use ESLint configuration in .eslintrc.js
- Follow the Airbnb style guide