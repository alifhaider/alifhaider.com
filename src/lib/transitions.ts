export const blogPageTransition = {
  forwards: {
    old: {
      name: 'blog-page-out',
      duration: '0.22s',
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fillMode: 'both',
    },
    new: {
      name: 'blog-page-in',
      duration: '0.4s',
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fillMode: 'both',
    },
  },
  backwards: {
    old: {
      name: 'blog-page-out',
      duration: '0.22s',
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fillMode: 'both',
    },
    new: {
      name: 'blog-page-in',
      duration: '0.4s',
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fillMode: 'both',
    },
  },
}
