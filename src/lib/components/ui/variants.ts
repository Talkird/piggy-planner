import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
	'rounded-md font-medium px-4 py-2 transition active:scale-95 hover:brightness-90 no-underline',
	{
		variants: {
			variant: {
				primary: 'bg-indigo-500 text-white',
				ghost: 'bg-transparent text-black hover:bg-neutral-50'
			}
		}
	}
);
