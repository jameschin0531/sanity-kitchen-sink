export default {
  widgets: [
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
                  buildHookId: '5fb8b4c6a9e60ad25a8e471a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fdq3kmkg',
                  apiId: '1d4c6387-a96a-4e3c-8ebc-b0d031d02602'
                },
                {
                  buildHookId: '5fb8b4c6f65236f34e883240',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-jhrbqvvh',
                  apiId: 'd4541a77-f9f7-4fc6-8182-eec0e31e41a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jameschin0531/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-jhrbqvvh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
