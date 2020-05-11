import { createContext } from "react";

// empty function is a placeholder. This particular function would be ...
// ... if there was no provider above it, but this shouldn't happen
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
