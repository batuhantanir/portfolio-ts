import { zodResolver } from '@hookform/resolvers/zod';
import CompenentHeader from './CompenentHeader';
import Container from './Container';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { twMerge } from 'tailwind-merge';

const schema = z.object({
  name: z.string().nonempty('İsim boş olamaz.'),
  email: z.string().email('Email hatalı.').nonempty('Email boş olamaz.'),
  message: z.string().nonempty('Mesaj boş olamaz.'),
});
type FormField = z.infer<typeof schema>;

function Contact({ active }: { active: boolean }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormField>({
    defaultValues: { name: '', email: '', message: '' },
    resolver: zodResolver(schema),
  });

  const onsubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container id="contact" active={active}>
      <CompenentHeader title="Contact" />
      <div className="flex items-center justify-center flex-wrap gap-6 w-full">
        <form
          className="flex flex-col w-full max-w-[450px] gap-4"
          onSubmit={handleSubmit(onsubmit)}
        >
          <label
            className={twMerge(
              'flex flex-col gap-2 mb-4.5',
              errors.name && 'mb-0'
            )}
          >
            İsim :
            <input
              className="bg-thirtd border border-primary h-10 px-2 rounded-md"
              {...register('name')}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </label>
          <label
            className={twMerge(
              'flex flex-col gap-2 mb-4.5',
              errors.email && 'mb-0'
            )}
          >
            Email :
            <input
              className="bg-thirtd border border-primary h-10 px-2 rounded-md"
              {...register('email')}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </label>
          <label
            className={twMerge(
              'flex flex-col mb-4.5 gap-2',
              errors.message && 'mb-0'
            )}
          >
            Mesaj :
            <textarea
              className="bg-thirtd border border-primary px-2 rounded-md resize-none h-52"
              {...register('message')}
            />
            {errors.message && <span>{errors.message.message}</span>}
          </label>
          <button
            className="bg-thirtd border border-primary py-2 rounded-md hover:bg-primary hover:text-white transition-all duration-300 ease-in-out  "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
}

export default Contact;
