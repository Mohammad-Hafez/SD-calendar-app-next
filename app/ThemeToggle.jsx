'use client'

import { useTheme } from 'next-themes'
import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { MoonOutlined , SunOutlined } from '@ant-design/icons';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <SunOutlined/> : <MoonOutlined /> }
    </Button>
  )
}