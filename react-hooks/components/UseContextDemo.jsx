import React, { useContext, useState } from 'react'

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
}

const ThemeContext = React.createContext(themes.light)

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <button
      style={{ background: theme.background, color: theme.foreground }}
      onClick={() => setTheme(themes.dark)}
    >
      I am styled by theme context!
    </button>
  )
}

export function UseContextDemo() {
  let [theme, setTheme] = useState(themes.dark)
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      <h2>UseContext Demo</h2>
      <ThemedButton />
      <button onClick={() => setTheme(themes.light)}>
        Change to light theme
      </button>
    </ThemeContext.Provider>
  )
}
