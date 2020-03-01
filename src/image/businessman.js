import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg height="100px" viewBox="0 0 512 512.001" width="100px" {...props}>
      <Path
        d="M511.945 185.266v277.586c0 14.238-6.058 27.058-15.734 36.035-8.777 8.136-20.52 13.11-33.422 13.11H49.15c-12.903 0-24.645-4.974-33.41-13.102C6.061 489.91.003 477.09.003 462.852V185.266zm0 0"
        fill="#fec970"
      />
      <Path
        d="M511.941 185.266L315.164 21.418c-34.297-28.559-84.09-28.559-118.387 0L0 185.266h.004L58 233.555l138.777 115.55c34.301 28.567 84.094 28.567 118.383 0l138.79-115.55 57.995-48.29"
        fill="#fba028"
      />
      <Path
        d="M453.95 83.012v150.543l-138.79 115.55c-34.289 28.567-84.082 28.567-118.383 0L58 233.555V83.012c0-31.387 25.45-56.836 56.844-56.836h282.27c31.394 0 56.835 25.449 56.835 56.836zm0 0"
        fill="#bfdadd"
      />
      <Path
        d="M453.95 83.012v116.062L315.16 314.63c-34.289 28.562-84.082 28.562-118.383 0L58 199.074V83.012c0-31.387 25.45-56.836 56.844-56.836h282.27c31.394 0 56.835 25.449 56.835 56.836zm0 0"
        fill="#e4f5f7"
      />
      <G fill="#4b5051">
        <Path d="M370.898 224.902H141.051a7.835 7.835 0 01-7.836-7.836 7.838 7.838 0 017.836-7.836h229.847a7.838 7.838 0 017.836 7.836 7.835 7.835 0 01-7.836 7.836zm0 0M370.898 270.414H141.051c-4.328 0-7.836-3.508-7.836-7.836s3.508-7.836 7.836-7.836h229.847c4.329 0 7.836 3.508 7.836 7.836s-3.507 7.836-7.836 7.836zm0 0M370.898 133.887H141.051c-4.328 0-7.836-3.508-7.836-7.836s3.508-7.836 7.836-7.836h229.847c4.329 0 7.836 3.508 7.836 7.836s-3.507 7.836-7.836 7.836zm0 0M370.898 179.395H141.051c-4.328 0-7.836-3.508-7.836-7.836s3.508-7.836 7.836-7.836h229.847c4.329 0 7.836 3.507 7.836 7.836s-3.507 7.836-7.836 7.836zm0 0" />
      </G>
      <Path
        d="M501.496 109.703c0 60.3-48.883 109.184-109.18 109.184-60.3 0-109.183-48.883-109.183-109.184 0-60.297 48.883-109.18 109.183-109.18 60.297 0 109.18 48.883 109.18 109.18zm0 0"
        fill="#26bf64"
      />
      <Path
        d="M501.496 109.703c0 57.14-43.879 104.02-99.773 108.785-55.907-4.765-99.778-51.644-99.778-108.785 0-57.129 43.871-104.008 99.778-108.77 55.894 4.762 99.773 51.641 99.773 108.77zm0 0"
        fill="#49d685"
      />
      <Path
        d="M391.793 176.875a7.838 7.838 0 01-5.996-2.797l-45.442-54.113c-2.78-3.317-2.351-8.258.961-11.04a7.834 7.834 0 0111.04.962l37.253 44.363 42-98a7.834 7.834 0 0110.29-4.113 7.832 7.832 0 014.113 10.289l-47.016 109.699a7.818 7.818 0 01-6.055 4.664 7.577 7.577 0 01-1.148.086zm0 0"
        fill="#fff"
      />
      <Path
        d="M464.227 480.102a7.805 7.805 0 01-5.008-1.813l-124.95-104.031a7.84 7.84 0 01-1.007-11.035c2.77-3.325 7.71-3.778 11.035-1.008l124.945 104.027a7.833 7.833 0 011.012 11.035 7.82 7.82 0 01-6.027 2.825zm0 0M177.43 374.465L74.746 462.172c-14.144 12.086-7.82 35.183 10.512 38.371 29.488 5.125 63.945 10.875 73.21 11.457H49.153c-12.906 0-24.648-4.973-33.414-13.102C6.063 489.914.004 477.094.004 462.855v-277.59h37.101v189.223c.356 38.25 45.196 58.778 74.598 34.309l55.945-46.586c3.387-2.809 8.454-2.297 11.192 1.203 2.644 3.371 1.879 8.313-1.41 11.05zm0 0"
        fill="#fba028"
      />
    </Svg>
  );
}

export default SvgComponent;
