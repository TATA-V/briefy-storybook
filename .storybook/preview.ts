/** @type { import('@storybook/react').Preview } */
import '../src/tailwind.css'
import '../src/style/global.css';
import '../src/style/reset.css'

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
