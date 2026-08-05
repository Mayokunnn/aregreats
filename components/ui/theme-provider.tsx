'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: 'class' | 'data-theme' | ('class' | 'data-theme')[]
  defaultTheme?: string
  enableColorScheme?: boolean
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  enableCSSSelector?: boolean
  storageKey?: string
  themes?: string[]
  forcedTheme?: string
  nonce?: string
  enableTransitionOnColorSchemeChange?: boolean
}

export function ThemeProvider({
  children,
  attribute = 'class',
  defaultTheme = 'system',
  enableSystem = true,
  enableColorScheme = false,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute as any}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      enableColorScheme={enableColorScheme}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
