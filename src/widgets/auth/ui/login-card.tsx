import { LoginForm } from '@/features/auth/ui/login-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { useTranslations } from 'next-intl';

export const LoginCard = () => {
  const t = useTranslations('auth.login');

  return (
    <Card className="w-[340px] border-gray-500/50">
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
        <CardDescription>{t('desc')}</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
};
