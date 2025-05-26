/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary color with shades
        sage: {
          50: '#F2F5F3',
          100: '#E5EBE7',
          200: '#CCDBD0',
          300: '#B2CAB9',
          400: '#99BAA2',
          500: '#7C9E82', // Primary
          600: '#63815D',
          700: '#4A6446',
          800: '#32482F',
          900: '#192217',
        },
        // Secondary color with shades
        sky: {
          50: '#F1F6FA',
          100: '#E3EDF5',
          200: '#C7DBEB',
          300: '#ABC9E0',
          400: '#8FB7D6',
          500: '#6A95B5', // Secondary
          600: '#547A9A',
          700: '#3E5C74',
          800: '#293D4E',
          900: '#141E27',
        },
        // Accent color with shades
        earth: {
          50: '#FAF6F0',
          100: '#F5EDE1',
          200: '#EBDBC3',
          300: '#E0C9A5',
          400: '#D6B777',
          500: '#D2A24C', // Accent
          600: '#B3883D',
          700: '#8C682E',
          800: '#66491F',
          900: '#33240F',
        },
        // Neutral colors
        cream: {
          50: '#FFFEFB',
          100: '#FEFDF8',
          200: '#FDF9F1',
          300: '#FCF6EA',
          400: '#F8F2E2',
          500: '#F5F1E8', // Base neutral
          600: '#E6D9C2',
          700: '#D7C29B',
          800: '#C9AA75',
          900: '#B3914E',
        },
        // Text color
        charcoal: '#2C3539',
        
        // Feedback colors
        success: {
          100: '#ECFDF5',
          500: '#10B981',
          900: '#064E3B',
        },
        warning: {
          100: '#FFFBEB',
          500: '#F59E0B',
          900: '#78350F',
        },
        error: {
          100: '#FEF2F2',
          500: '#EF4444',
          900: '#7F1D1D',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 25px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};