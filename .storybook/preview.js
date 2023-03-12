import { addDecorator } from '@storybook/react';
import { Global, css } from '@emotion/react';
import logo from '../public/images/macbislogo2022.JPG';
// import './src/styles/custom.css';

// import { ThemeProvider, createTheme } from '@mui/material';
// import Capitalization from '../src/stories/Capitalization';

// const theme = createTheme({
//   typography: {
//     fontFamily: 'Cabin',
//     // override other typography styles here
//   },
// });

// <ThemeProvider theme={theme}>
//  <Capitalization />
// </ThemeProvider>

/* src/assets/custom.css */

/* Change the background color of the left panel in Storybook docs */
// .sbdocs {
//   background-color: #f0f0f0;
// }


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  previewTabs: {
    canvas: { hidden: true },
    docs: { hidden: true },
  },
  brand: {
    logo: logo,
    name: 'MACBIS Design System',
    title: 'MACBIS Design System',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// addDecorator(storyFn => (
//   <>
//     <Global
//       styles={css`
//         body {
//           font-family: 'Cabin', sans-serif;
//         }
//       `}
//     />
//     {storyFn()}
//   </>
// ));



// import React from 'react';

// export default {
//   title: 'Capitalization',
//   decorators: [
//     (Story) => (
//       <>
//         {/* Hide Canvas and Docs tabs */}
//         <style>
//           {`
//             .sb-show-main.sb-main-padded {
//               grid-template-columns: auto;
//             }
//             .sbdocs.sbdocs-padded {
//               display: none;
//             }
//           `}
//         </style>
//         <Story />
//       </>
//     ),
//   ],
// };

// export const MyComponent = () => <div>Hello World</div>;
