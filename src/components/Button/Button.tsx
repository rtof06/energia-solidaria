import { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  id: string;
  title: string;
  onClick?: MouseEventHandler;
  disabled: boolean;
  children: ReactNode;
};

export default function Button({ type, id, title, disabled, children, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      id={id}
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  );
}
