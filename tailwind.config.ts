import Palate from "./src/theme/Palate/index";
import BorderRadius from './src/theme/Shape';
import Breakpoints from "./src/theme/Breakpoint";
import FontFamily from "./src/theme/Typography/font-family";
import Spacing from "./src/theme/spacing";
import Typography from "./src/theme/Typography/typography";

import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/slices/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: Palate,
    borderRadius: BorderRadius,  
    fontSize: Typography,
    extend: {
      fontFamily: FontFamily,
      screens: Breakpoints,
      spacing: Spacing
    },
  },
  plugins: [],
} satisfies Config;

