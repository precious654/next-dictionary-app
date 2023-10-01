"use client";
import { ThemeProvider } from "next-themes"

function ThemeProvide({children}: {children: React.ReactNode}) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default ThemeProvide;