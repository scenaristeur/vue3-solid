module.exports = {
  base: '/vue3-solid/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue3-solid 🥂',
      description: 'Documentation site for the Vue component library plugin'
    }
  },

  themeConfig: {
    repoLabel: 'Contribute!',
    // git repo here... gitlab, github
    repo: '',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'dev',
    editLinkText: 'Help us improve this page!',
    search: false,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: 'Getting Started', link: '/guide' },
          { text: 'Components', link: '/components/' },
          // external link to git repo...again
          { text: 'GitHub', link: '' }
        ],
        sidebar: {
          '/components/': [
            {
              title: 'Components',
              collapsable: false,
              children: [
                'standard-component',
                'input-text.md',
                'input-textarea.md'
              ]
            }
          ]
        }
      }
    }
  }
}
