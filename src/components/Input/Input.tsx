import { ComponentProps, FC, forwardRef } from 'react';

interface InputProps {
  name: ComponentProps<'input'>['name'];
  placeholder: ComponentProps<'input'>['placeholder'];
  onChange: ComponentProps<'input'>['onChange'];
  onBlur: ComponentProps<'input'>['onBlur'];
  type?: ComponentProps<'input'>['type'];
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ ...inputProps }, ref) => {
  return (
    <input
      ref={ref}
      {...inputProps}
      className='border border-black/15 rounded py-3 px-6 text-xl w-full'
    />
  );
});
