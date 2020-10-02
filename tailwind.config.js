module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.js',
    ],
    options: {
      whitelist: [
        'h-screen'
      ],
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      'print': {'raw': 'print'},
    },
    fontFamily: {
      sans: [
        'Open Sans',
        'sans-serif',
      ],
      mono: [
        'Roboto Mono',
        'monospace',
      ],
    },
    fontSize: {
      sm: '0.75rem', // 12px
      base: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.375rem', // 22px
      '3xl': '1.5rem', // 24px
      '4xl': '2rem', // 32px
      '5xl': '3rem', // 48px
    },
    colors: {
      // theme colors
      'black': '#000',
      'white': '#fff',
      'grey-1': '#6C6C6C',
      'grey-2': '#ADADAD',
      'grey-3': '#DCDCDC',
      'grey-4': '#F5F5F5',
      'grey-4': '#F5F5F5',
      'blue-1': '#2253FF',
      'blue-2': '#12367B',
      'blue-3': '#EDF7FF',
      'orange-1': '#FF7A00',
      'orange-2': '#F45815',
      'red': '#FF0000',
      'pink': '#FFF4F4',
      'green': '#37B04B',
      // 'gradient-1': 'linear-gradient(90deg, #0A76BD 6%, #4AACEE 96%)',
      'yellow-1': '#FFFA8B',
    },
    extend: {},
  },
  variants: {},
}
