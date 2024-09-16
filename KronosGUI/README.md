# Libraries used in this project

### This project is made in React-Vite:
- npm create vite@latest
- npm i
- npm run dev

## Main libraries:

### Styled components:
- npm install styled-components

**Example using styled components, in the code below:**

```
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
);
```

**RouterDOM:**
- npm install react-router-dom

**Create src/routes/MainRoutes.ts, and put the code below:**

```
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage"; // Example

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  }
]);
```

**And in your src/main.tsx, put the code below:**

```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/MainRoutes'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
```

## Other libraries:
- npm install react-fast-marquee --save
- npm install react-dropdown  --save

## Future implementations
- Vercel
- Updated videos

## Doubts
- [x] How to reload the page after clicking on a link?
- [ ] How to reload the page after selecting a value on the dropdown? (same page who you in)
- [x] How to make the page slide down after pressing Get Started?
