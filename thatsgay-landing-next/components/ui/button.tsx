import * as React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, ...props }: ButtonProps) {
  return <button className={clsx('inline-flex items-center justify-center', className)} {...props} />;
}

export default Button;
