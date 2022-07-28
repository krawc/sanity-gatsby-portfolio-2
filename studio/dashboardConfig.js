export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62e298e0b7b3a725632a4fcd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-fw8iiviy',
                  apiId: '0dd7f710-9609-4e57-9b40-c74530d6146f'
                },
                {
                  buildHookId: '62e298e128f8b2268f3addde',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-g23kw53e',
                  apiId: '6033c84f-92a4-4e0d-97aa-ac3a402a5f6b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/krawc/sanity-gatsby-portfolio-2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-g23kw53e.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
