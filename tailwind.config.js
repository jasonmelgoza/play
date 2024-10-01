/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./playroom/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  prefix: '',
  safelist: [
    // Combined width, height, min/max, padding, margin, and gap utilities
    {
      pattern: /^(w|h|min-w|min-h|max-w|max-h|p|m|gap)-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },

    // Pixel-based and percentage-based width and height utilities
    ...Array.from({ length: 1000 }, (_, i) => `w-[${i + 1}px]`),
    ...Array.from({ length: 1000 }, (_, i) => `h-[${i + 1}px]`),
    ...Array.from({ length: 100 }, (_, i) => `w-[${i + 1}%]`),
    ...Array.from({ length: 100 }, (_, i) => `h-[${i + 1}%]`),

    // Z-index utilities
    { pattern: /^z-(0|10|20)$/ },

    // Background utilities
    {
      pattern: /^bg-/,
      variants: [
        'primary',
        'secondary',
        'destructive',
        'muted',
        'accent',
        'popover',
        'card',
      ],
    },

    // Text alignment utilities
    { pattern: /^text-(left|right|center|justify)$/ },

    // Text size utilities
    { pattern: /^text-(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl)$/ },

    // Pixel-based text size utilities
    ...Array.from({ length: 100 }, (_, i) => `text-[${i + 1}px]`),

    // Display utilities
    { pattern: /^(block|inline-block|inline|flex|inline-flex|grid|hidden)$/ },

    // Overflow utilities
    { pattern: /^overflow-(hidden|visible|scroll|auto)$/ },

    // Flex utilities
    {
      pattern:
        /^(flex-(row|col|wrap|nowrap|grow|shrink)|items-|justify-|self-)/,
    },

    // Rounded utilities
    { pattern: /^rounded(-sm|-md|-lg|-full)?$/ },

    // Border utilities
    { pattern: /^border(-0|-2|-4|-8)?$/ },

    // Opacity utilities
    { pattern: /^opacity-(0|20|40|60|80|100)$/ },

    // Shadow utilities
    { pattern: /^shadow-(none|sm|md|lg|xl|2xl|inner)$/ },
  ],
  theme: {
    container: {
      center: 'true',
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
        body: 'hsl(var(--body))',
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
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'background-pattern': "url('../images/background.svg')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
