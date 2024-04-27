import { zodResolver } from '@hookform/resolvers/zod';
import CompenentHeader from '../CompenentHeader';
import Container from '../Container';
import { FormProvider, useForm } from 'react-hook-form';
import z from 'zod';
import CustomButton from '../CustomButton';
import Field from './Field';

const schema = z.object({
  name: z.string().nonempty('İsim boş olamaz.'),
  email: z.string().email('Email hatalı.').nonempty('Email boş olamaz.'),
  message: z.string().nonempty('Mesaj boş olamaz.').min(10, 'Mesaj çok kısa.'),
});

export type FormField = z.infer<typeof schema>;

function Contact() {
  const methods = useForm<FormField>({
    defaultValues: { name: '', email: '', message: '' },
    resolver: zodResolver(schema),
  });
  const onsubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container id="contact">
      <CompenentHeader title="Contact" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
        <div className="text-center mt-4 italic">
          <div>
            <h2 className="text-3xl font-bold">Hadi Konuşalım</h2>
          </div>
          <p>
            Benimle iletişime geçmek, bir proje işbirliği hakkında konuşmak veya
            sadece merhaba deyin, formu doldurun ve size geri döneceğim.
          </p>
        </div>
        <FormProvider {...methods}>
          <form
            className="flex flex-col w-full max-w-[450px] gap-2"
            onSubmit={methods.handleSubmit(onsubmit)}
          >
            <Field type="input" name="name" />
            <Field type="input" name="email" />
            <Field type="textarea" name="message" />
            <CustomButton className="mt-2" type="submit">
              Submit
            </CustomButton>
          </form>
        </FormProvider>
      </div>
    </Container>
  );
}

export default Contact;
