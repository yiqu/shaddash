import React, { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = '',
  colors = ['#ffaa40', '#9c40ff', '#ffaa40'],
  animationSpeed = 8,
  showBorder = false,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div
      className={ cn(
        `
          relative flex max-w-fit flex-row items-center justify-center
          overflow-hidden backdrop-blur transition-shadow duration-500
          font-normal
        `,
        className,
        {
          'rounded-[1.25rem] px-2': showBorder,
        },
      ) }
    >
      { showBorder ?
        <div
          className={ `
            animate-gradient pointer-events-none absolute inset-0 z-0 bg-cover
          ` }
          style={ {
            ...gradientStyle,
            backgroundSize: '300% 100%',
          } }
        >
          <div
            className={ cn('absolute inset-0 z-[-1] bg-background', {
              'rounded-[1.25rem]': showBorder,
            }) }
            style={ {
              width: 'calc(100% - 2px)',
              height: 'calc(100% - 2px)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            } }
          ></div>
        </div>
      : null }
      <div
        className={ `
          animate-gradient relative z-2 inline-block bg-cover text-transparent
          font-normal
        ` }
        style={ {
          ...gradientStyle,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          backgroundSize: '300% 100%',
        } }
      >
        { children }
      </div>
    </div>
  );
}

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         gradient: {
//           '0%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//           '100%': { backgroundPosition: '0% 50%' },
//         },
//       },
//       animation: {
//         gradient: 'gradient 8s linear infinite'
//       },
//     },
//   },
//   plugins: [],
// };
