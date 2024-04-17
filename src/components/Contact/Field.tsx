import { twMerge } from 'tailwind-merge';
import { useFormContext } from 'react-hook-form';

interface FieldProps {
  type: 'textarea' | 'input';
  name: string;
}

function Field({ type, name }: FieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

  return (
    <label
      className={twMerge('flex flex-col gap-2 mb-4.5', errors[name] && 'mb-0')}
    >
      <span className="first-letter:uppercase font-medium ml-1.5">{name} :</span>
      {type === 'textarea' ? (
        <textarea
          className={twMerge(
            'bg-thirtd border border-primary px-2 rounded-md resize-none h-',
            errors[name] && 'border-red-500'
          )}
          rows={5}
          {...register('message')}
        />
      ) : (
        <input
          className={twMerge(
            'bg-thirtd border border-primary h-10 px-2 rounded-md',
            errors[name] &&
              'border-red-500 focus:border-red-500 outline-red-500'
          )}
          {...register(name)}
        />
      )}
      {errors[name] && (
        <span className="ml-1.5 text-red-500">
          {errors[name].message as string}
        </span>
      )}
    </label>
  );
}

export default Field;
