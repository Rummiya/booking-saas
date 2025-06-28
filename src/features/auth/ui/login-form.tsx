'use client';

import { Button } from '@/shared/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Link, useRouter } from '@/shared/libs/i18n/navigation';
import { useTranslations } from 'next-intl';

import { useAppDispatch } from '@/shared/hooks/redux-hooks';
import { useLoginMutation } from '../model/auth.api';
import { createLoginSchema, LoginSchema } from '../model/auth.schema';
import { setAuth } from '../model/auth.slice';

export const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const t = useTranslations('auth');
  const formSchema = createLoginSchema(t);

  const form = useForm<LoginSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const res = await login(data).unwrap();
      dispatch(setAuth(res));
      router.push('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center flex-col gap-[32px]"
      >
        <FormField
          control={form.control}
          name={'email'}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>{t('email')}</FormLabel>
              <FormControl>
                <Input placeholder={t('email')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>{t('password')}</FormLabel>
              <FormControl>
                <Input placeholder={t('password')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* {error && <span className="text-red-500 text-sm">{error?.error}</span>} */}

        <div className="flex flex-col gap-2 items-center">
          <span className="text-xs">
            {t('login.noAccount')}{' '}
            <Link href={'/auth/register'} className="text-blue-800">
              {t('login.registerLink')}
            </Link>
          </span>
          <Button type="submit" disabled={isLoading}>
            <div className="p-3 min-w-[40px] h-[40px] flex items-center justify-center">
              {isLoading ? 'loading...' : t('login.button')}
            </div>
          </Button>
        </div>
      </form>
    </Form>
  );
};
