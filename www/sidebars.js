/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  main: [
    'main/intro',
    'main/architecture',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'main/getting-started/installation',
        'main/getting-started/usage',
        'main/getting-started/customizing',
        'main/getting-started/examples',
      ],
    },
    {
      type: 'category',
      label: 'Adapters',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'main/adapters/introduction',
        'main/adapters/creating-an-adapter',
        {
          type: 'category',
          label: 'AWS',
          collapsed: true,
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'main/adapters/aws',
            },
          ],
        },
        {
          type: 'category',
          label: 'Azure',
          collapsed: true,
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'main/adapters/azure',
            },
          ],
        },
        {
          type: 'category',
          label: 'Huawei',
          collapsed: true,
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'main/adapters/huawei',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Handlers',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'main/handlers',
        },
      ],
    },
    {
      type: 'category',
      label: 'Resolvers',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'main/resolvers/aws-context',
        'main/resolvers/callback',
        'main/resolvers/promise',
      ],
    },
    {
      type: 'category',
      label: 'Frameworks',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'main/frameworks/deepkit',
        'main/frameworks/express',
        'main/frameworks/fastify',
        'main/frameworks/hapi',
        'main/frameworks/koa',
        'main/frameworks/lazy',
        'main/frameworks/nestjs',
        'main/frameworks/trpc',
      ],
    },
  ],
  api: [
    {
      type: 'autogenerated',
      dirName: 'api',
    },
  ],
};

module.exports = sidebars;
