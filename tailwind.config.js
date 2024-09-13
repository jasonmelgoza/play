/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./playroom/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  prefix: '',
  safelist: [
    // Width and height utilities
    {
      pattern: /^(w|h)-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    // Min and max width/height utilities
    {
      pattern: /^(min|max)-(w|h)-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    // Padding utilities
    {
      pattern: /^p(\w?)-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    // Margin utilities
    {
      pattern: /^m(\w?)-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    // Gap utilities
    {
      pattern: /^gap-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    // Pixel-based width and height utilities
    ...Array.from({ length: 1000 }, (_, i) => `w-[${i + 1}px]`),
    ...Array.from({ length: 1000 }, (_, i) => `h-[${i + 1}px]`),
    // Percentage-based width and height utilities
    ...Array.from({ length: 100 }, (_, i) => `w-[${i + 1}%]`),
    ...Array.from({ length: 100 }, (_, i) => `h-[${i + 1}%]`),
    // Text alignment utilities
    'text-left',
    'text-right',
    'text-center',
    'text-justify',
    // Display utilities
    'block',
    'inline-block',
    'inline',
    'flex',
    'inline-flex',
    'grid',
    'hidden',
    // Overflow utilities
    'overflow-hidden',
    'overflow-visible',
    'overflow-scroll',
    'overflow-auto',
    // Flex utilities
    'flex-row',
    'flex-col',
    'flex-wrap',
    'flex-nowrap',
    'flex-grow',
    'flex-shrink',
    'items-start',
    'items-end',
    'items-center',
    'items-baseline',
    'items-stretch',
    'justify-start',
    'justify-end',
    'justify-center',
    'justify-between',
    'justify-around',
    'justify-evenly',
    'self-auto',
    'self-start',
    'self-end',
    'self-center',
    'self-stretch',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
