import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

enum HeadingSize {
  '2xl' = '2xl',
  '3xl' = '3xl',
}

interface HeadingProps {
  size?: keyof typeof HeadingSize;
}

export const Heading: FC<PropsWithChildren<HeadingProps>> = ({
  children,
  size = HeadingSize['2xl'],
}) => {
  const blockClasses = clsx('text-white text-center font-bold', {
    'text-2xl': size === HeadingSize['2xl'],
    'text-3xl': size === HeadingSize['3xl'],
  });

  return (
    <h1 className={blockClasses}>🏎 &nbsp;&nbsp;{children}&nbsp;&nbsp; 🏎</h1>
  );
};
