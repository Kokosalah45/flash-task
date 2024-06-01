import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email({
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(3, {
    message: 'Password must be at least 3 characters.',
  }),
});

const useLoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return { form };
};

export { useLoginForm };
