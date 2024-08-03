'use client'

import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { ConfigProvider, theme } from 'antd'
import { ThemeProvider, useTheme } from 'next-themes'
import { App as AntApp } from 'antd'
import { Analytics } from "@vercel/analytics/react"

function AntConfigProvider({ children }) {
  const { theme: currentTheme } = useTheme()
  
  return (
    <ConfigProvider
      theme={{
        algorithm: currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <AntApp>{children}</AntApp>
    </ConfigProvider>
  )
}

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <AntConfigProvider>
          <Analytics/>
          {children}
        </AntConfigProvider>
      </ThemeProvider>
    </Provider>
  )
}