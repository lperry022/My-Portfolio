module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      keyframes: {
        pulseGlow: {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0px #f65c5c',
          },
          '50%': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 20px #f65c5c',
          },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
