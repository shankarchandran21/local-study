Utility Types in TS

| Utility Type               | Purpose                                |
| -------------------------- | -------------------------------------- |
| `Partial<T>`               | All properties optional                |
| `Required<T>`              | All properties required                |
| `Readonly<T>`              | Properties cannot be changed           |
| `Pick<T, K>`               | Pick specific keys                     |
| `Omit<T, K>`               | Remove specific keys                   |
| `Record<K, T>`             | Object with specific key-value mapping |
| `Exclude<T, U>`            | Remove types                           |
| `Extract<T, U>`            | Keep only matching types               |
| `NonNullable<T>`           | Remove `null` and `undefined`          |
| `ReturnType<T>`            | Get return type of function            |
| `Parameters<T>`            | Get function parameters                |
| `ConstructorParameters<T>` | Get class constructor params           |
| `InstanceType<T>`          | Get class instance type                |


Difference between abstract class and interface in TypeScript?
What are the differences between interface and type in TypeScript?
What is Redux Thunk and why do we use it?
    Answer:
        1.Redux normally handles synchronous state updates.
        2.Thunk is a middleware that lets you write async logic inside Redux (like API calls).

Explain SSR, CSR, and SSG. Which one does React use by default?
    Answer:
        CSR (Client-Side Rendering) → React default. Bundle is loaded in browser, then UI renders.
        SSR (Server-Side Rendering) → Rendered on server first (Next.js). Good for SEO.
        SSG (Static Site Generation) → HTML generated at build time.
        Example: React uses CSR by default, Next.js supports SSR & SSG.

What are Axios interceptors?

    Answer:
        They are functions that run before request/response. Useful for adding auth tokens, logging, error handling.

