import { z } from 'zod';

export const createRegisterSchema = (t: (key: string) => string) =>
  z.object({
    firstName: z.string().min(2, { message: t('register.validation.firstName') }),
    email: z.string().email(t('register.validation.email')),
    password: z.string().min(8, { message: t('register.validation.password') }),
    phone: z.string().regex(/^\d{9}$/, {
      message: t('register.validation.phone'),
    }),
  });

export const createLoginSchema = (t: (key: string) => string) =>
  z.object({
    email: z.string().email(t('login.validation.email')),
    password: z.string().min(8, { message: t('login.validation.password') }),
  });

export type RegisterSchema = z.infer<ReturnType<typeof createRegisterSchema>>;
export type LoginSchema = z.infer<ReturnType<typeof createLoginSchema>>;
