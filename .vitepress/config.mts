import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Aarsh's ILO Guide",
  description: "Tips for the ILO",
  base: '/Official-Guide/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Competition', link: 'Competition/Competition-Overview' },
      { text: 'Tools', link: '/Tool-Tutorials/Tool-Tutorials-Overview' },
      { text: 'Extra Resources', link: '/Extra-Resources/Extra-Resources-Overview' }
    ],

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Competition', link: 'Competition/Competition-Overview' },
      { text: 'Tools', link: '/Tool-Tutorials/Tool-Tutorials-Overview' },
      { text: 'Extra Resources', link: '/Extra-Resources/Extra-Resources-Overview' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Introduction', link: '/Overview/Introduction' }
        ]
      },
      {
        text: 'Competition',
        items: [
          { text: 'Overview', link: '/Competition/Competition-Overview' },
          { text: 'ILO 2024', link: '' },
          {
            items: [
              {text: 'Overview', link: '/Competition/ILO-2024/ILO-2024-Overview'},
              {text: 'Round 1', link: '/Competition/ILO-2024/ILO-2024-Test-1-Problems'},
              {text: 'Round 2', link: '/Competition/ILO-2024/ILO-2024-Test-2-Problems'},
              {text: 'Round 3', link: '/Competition/ILO-2024/ILO-2024-Test-3-Problems'},
              {text: 'Finals', link: '/Competition/ILO-2024/ILO-2024-Finals-Problems'}
            ]
          },
          { text: 'ILO 2025', link: '' },
          {
            items: [
              {text: 'Overview', link: '/Competition/ILO-2025/ILO-2025-Overview'},
              {text: 'Round 1', link: '/Competition/ILO-2025/ILO-2025-Test-1-Problems'},
              {text: 'Round 2', link: '/Competition/ILO-2025/ILO-2025-Test-2-Problems'},
              {text: 'Round 3', link: '/Competition/ILO-2025/ILO-2025-Test-3-Problems'},
              {text: 'Finals', link: '/Competition/ILO-2025/ILO-2025-Finals-Problems'},
            ]
          }
        ]
      },
      {
        text: 'Tool Tutorials',
        items: [
          {text: 'Overview', link: '/Tool-Tutorials/Tool-Tutorials-Overview'},
          {text: 'Babbage', link: ''},
          {
            items: [
              {text: 'Overview', link: '/Tool-Tutorials/Babbage/Babbage-Overview'}
            ]
          },
          {text: 'Fitch', link: ''},
          {
            items: [
              {text: 'Overview', link: '/Tool-Tutorials/Fitch/Fitch-Overview'}
            ]
          },
          {text: 'Hilbert', link: ''},
          {
            items: [
              {text: 'Overview', link: '/Tool-Tutorials/Hilbert/Hilbert-Overview'}
            ]
          },
          {text: 'Robinson', link: ''},
          {
            items: [
              {text: 'Overview', link: '/Tool-Tutorials/Robinson/Robinson-Overview'}
            ]
          }
        ]
      },
      {
        text: 'Extra Resources',
        items: [
          { text: 'Overview', link: '/Extra-Resources/Extra-Resources-Overview' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Aarsh-International-Logic-Olympiad-ILO/Official-Guide' }
    ]
  }
})
