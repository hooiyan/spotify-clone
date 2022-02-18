module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      display: 'Sora',
      body: 'Sora',
    },
    screens: {
      '2xl': { max: '2199px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '374px' },
    },
    extend: {
      colors: {
        spotifyGreen: 'var(--green)',
        spotifyLightBlack: 'var(--light-black)',
        spotifyCardBlack: 'var(--card-black)',
        spotifyDarkGrey: 'var(--dark-grey)',
        spotifyDropdownGrey: 'var(dropdown-grey)',
        spotifyGrey: 'var(--grey)',
      },
      cursor: {
        'col-resize': 'col-resize',
      },
      height: {
        '10-percent': '10%',
        '90-percent': '90%',
      },
      rotate: {
        20: '20deg',
      },
      width: {
        200: '50rem',
      },
    },
  },
}
