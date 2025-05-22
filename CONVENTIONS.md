# Project Conventions

This document outlines the best practices and conventions to be followed for Next.js, TypeScript, CSS, and Framer Motion development
in this project.

## General Principles

*   **Readability:** Write code that is easy to understand and maintain.
*   **Consistency:** Follow established patterns and conventions throughout the codebase.
*   **Performance:** Be mindful of performance implications in your code.
*   **Accessibility (a11y):** Ensure applications are usable by everyone.
*   **Modularity:** Break down components and functions into small, reusable pieces.

## Next.js

*   **File-based Routing:** Utilise the `app` directory for routing. Keep route handlers concise.
*   **Server Components & Client Components:** Understand the difference and use them appropriately. Default to Server Components   
where possible. Use the `"use client"` directive for components requiring client-side interactivity.
*   **Data Fetching:** Use `async/await` with `fetch` in Server Components. For client-side data fetching, consider libraries like  
SWR or React Query if not using Server Actions.
*   **API Routes:** Place API route handlers in `app/api/...` directories.
*   **Environment Variables:** Use `.env.local` for local development and manage environment variables securely for different       
environments. Prefix public environment variables with `NEXT_PUBLIC_`.
*   **Image Optimisation:** Use the `next/image` component for optimised images.
*   **Font Optimisation:** Use `next/font` for optimised web fonts.
*   **Code Splitting:** Next.js handles automatic code splitting per page. Be mindful of large component imports.
*   **Error Handling:** Implement proper error boundaries and handling for both server and client components.

## TypeScript

*   **Strong Typing:** Use specific types wherever possible. Avoid `any` unless absolutely necessary and provide a justification.   
*   **Interfaces vs Types:** Use `interface` for defining the shape of objects and `type` for unions, intersections, or more complex
types. Be consistent.
*   **Readonly and Immutability:** Use `readonly` for properties that should not be reassigned. Prefer immutable data structures.   
*   **Utility Types:** Leverage built-in utility types like `Partial`, `Required`, `Pick`, `Omit`, etc.
*   **Function Signatures:** Clearly define parameter types and return types for all functions.
*   **Null and Undefined:** Handle `null` and `undefined` explicitly. Use optional chaining (`?.`) and nullish coalescing (`??`)    
where appropriate.
*   **Enums:** Use enums for sets of named constants. Consider string enums for better debuggability.
*   **Consistent Naming:**
    *   `PascalCase` for types, interfaces, enums, and components.
    *   `camelCase` for variables, functions, and object properties.
*   **Module Organisation:** Organise types close to where they are used or in dedicated `types.ts` or `interfaces.ts` files within 
relevant feature directories.
                                                                                                                                    
## CSS / Styling

*   **CSS Modules:** Prefer CSS Modules (`.module.css`) for component-level styling to avoid class name collisions.
*   **Tailwind CSS (if used):**
    *   Utilise utility classes for rapid UI development.
    *   Group related classes for readability.
    *   Use `@apply` sparingly and only for genuinely reusable semantic class groups within global CSS or component-specific CSS    
files.
    *   Customise `tailwind.config.js` for project-specific design tokens.
*   **Global Styles:** Place global styles in `src/app/globals.css`. Use this sparingly for base styles, resets, or global utility  
classes.
*   **Naming Conventions (if not using Tailwind extensively):**
    *   Use BEM (Block, Element, Modifier) or a similar systematic approach for CSS class names if not using CSS Modules or Tailwind
primarily.
    *   Example: `.card__title--highlighted`
*   **Variables:** Use CSS Custom Properties (variables) for theming and maintainability (e.g., colors, spacing).
*   **Responsive Design:** Design mobile-first and use media queries effectively.
*   **Performance:**
    *   Avoid overly complex selectors.
    *   Minimise style recalculations.

## Framer Motion

*   **Component-based Animations:** Encapsulate animations within specific components.
*   **`motion` Components:** Use `motion.` prefixed HTML and SVG elements (e.g., `motion.div`).
*   **Variants:** Use variants for complex or reusable animation states. This improves readability and organisation.
*   **Orchestration:** Use `staggerChildren`, `delayChildren`, and transition props like `delay`, `when` for sequencing animations. 
*   **Performance:**
    *   Animate `transform` and `opacity` where possible, as these are generally more performant.
    *   Be mindful of animating layout properties (e.g., `width`, `height`, `margin`, `padding`) as they can trigger reflows.       
    *   Use `will-change` sparingly and only when necessary.
*   **Accessibility:** Ensure animations do not hinder accessibility. Provide ways to reduce or disable motion if
`prefers-reduced-motion` is enabled.
    ```tsx
    import { useReducedMotion } from "framer-motion";

    // ...
    const shouldReduceMotion = useReducedMotion();
    // ...
    // Conditionally apply animations or simpler fallbacks
    ```
*   **`AnimatePresence`:** Use for animating components when they are added to or removed from the React tree (e.g., modals, list   
items).
*   **Gestures:** Utilise Framer Motion's gesture helpers (`whileHover`, `whileTap`, `onDrag`) for interactive animations.
*   **Layout Animations:** Use `layout` or `layoutId` props for smooth transitions when an element's layout changes. Use with       
caution as it can be performance-intensive.
                                                                                                                                    
## Linting and Formatting

*   **ESLint & Prettier:** Ensure ESLint and Prettier are configured and used consistently.
*   **Auto-formatting on Save:** Configure your editor to format code on save.
*   **Resolve Linting Issues:** Do not commit code with linting errors or warnings unless explicitly justified.

## Commit Messages

*   Follow Conventional Commits specification (e.g., `feat: add new feature`, `fix: resolve bug`, `docs: update documentation`).    

This document is a living guide and may be updated as the project evolves.