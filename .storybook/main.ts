export default {
  stories: ['../stories/**/*.stories.@(md|ts)x'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: './../src/client/addon/preset',
      options: { clientPort: 8000 },
    },
  ],
};
