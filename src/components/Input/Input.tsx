import React, { ChangeEvent } from 'react';

type InputProps = {
  label: string;
  value?: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name: string;
  required: boolean;
};

export default function Input({ label, value, onChange, placeholder, type, name, required }: InputProps) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </label>
    </div>
  );
}
