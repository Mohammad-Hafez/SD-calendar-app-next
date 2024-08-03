'use client'

import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { ConfigProvider, theme } from 'antd'
import { ThemeProvider } from 'next-themes'
import { App as AntApp } from 'antd';

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <ConfigProvider
          theme={{
            algorithm: theme.defaultAlgorithm,
          }}
        >
          <AntApp>{children}</AntApp>
        </ConfigProvider>
      </ThemeProvider>
    </Provider>
  )
}