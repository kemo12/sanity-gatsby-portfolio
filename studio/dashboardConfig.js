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
                  buildHookId: '60906a5f4a5e940099de30b9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ve98mt2y',
                  apiId: '0ef0be99-e2c7-4c08-83a6-8f76c5068409'
                },
                {
                  buildHookId: '60906a5f3bd8ca11ff50132c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7ue9dud3',
                  apiId: 'f07efc93-143a-4b95-a4a4-6d8a99081fcc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kemo12/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7ue9dud3.netlify.app',
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
