# 🧾 Booking SaaS — Frontend

Frontend часть B2B-платформы для онлайн-бронирования.  
Позволяет малому бизнесу создавать собственные страницы для приёма онлайн-записей и управлять ими через личный кабинет.

---

## 🚀 Технологии и стек

- **Next.js (App Router)** — SSR, маршрутизация
- **TypeScript** — строгая типизация
- **TailwindCSS** — стилизация
- **Redux Toolkit + RTK Query** — глобальное состояние, работа с API
- **React-Hook-Form + Zod** — формы, валидация
- **React-Hot-Toast** — оповещения
- **Feature-Sliced Design (FSD)** — модульная архитектура
- **Shadcn/ui** — UI-компоненты (опционально)
- **Next-Intl** – мультиязычность

---

## 🏗 Архитектура (FSD)

```
src/
├── app/ # App Router: роутинг и layout'ы
├── entities/ # Бизнес-сущности: user, business, booking, service
├── features/ # Функциональные блоки (auth, manage-services и т.д.)
├── widgets/ # Виджеты — крупные блоки UI (например, календарь бронирований)
├── shared/ # Переиспользуемые хуки, UI, утилиты, конфиги
```

---

## 🫸🫷 Рабочие процессы 

- На проекте используется next-intl, поэтому роутинговые утилиты (link, redirect и тд) — 
использовать строго из `@/shared/i18n/routing` (там при роутинге учитывается локаль)
- Чек рутовый файл .gitmessage.txt - там примеры коммитов, чтобы +- в одном стиле коммитили

---

## 👥 Роли

- **Client** — пользователь, бронирующий услуги
- **Business Owner** — владелец бизнеса с доступом к личному кабинету
- _(в перспективе)_ **Employer** — сотрудники внутри бизнеса

---

## 🌐 Маршруты (пример)

| Маршрут                    | Доступ         | Описание                                        |
|----------------------------|----------------|-------------------------------------------------|
| `/`                        | Public         | Главная / каталог бизнесов                      |
| `/auth/login`              | Public         | Авторизация                                     |
| `/auth/registration`       | Public         | Авторизация                                     |
| `/[slug]`                  | Public         | Публичная страница бизнеса для бронирования     |
| `/dashboard`               | BUSINESS_OWNER | Личный кабинет                                  |
| `/dashboard/services`      | BUSINESS_OWNER | Управление услугами                             |
| `/dashboard/schedule`      | BUSINESS_OWNER | Управление расписанием                          |
| `/dashboard/bookings`      | BUSINESS_OWNER | Просмотр записей                                |
| `/profile`		     | CLIENT 	      | Страница клиента с его записями			|
| `/profile/bookings`	     | CLIENT 	      | История, управление бронированиями		|



---

## 📅 Roadmap (пример)
- [ ] Авторизация, хранение токена, AuthGuard
	- [ ] Проверка ролей
	- [ ] Валидные переходы между страницами по роли

- [ ] Динамические slug-страницы бизнеса (/barber) или поддомены (barber.saas.com)
	- [ ] Запрос данных бизнеса по slug

- [ ] Публичная страница с отображением услуг и формой брони
	- [ ] Интерактивный календарь

- [ ] Личный кабинет клиента
  	- [ ] Список моих записей
  	- [ ] Отмена или перенос записи
 	- [ ] История записей
	- [ ] Повторяющиеся брони
	- [ ] Ограничения на отмену/перенос

- [ ] Личный кабинет владельца бизнеса
	- [ ] Управление услугами (создание/редактирование/удаление)
	- [ ] Управление расписанием
	- [ ] Страница с заявками

- [ ] Общее
	- [ ] Адаптация под мобильные
	- [ ] Уведомления (toast'ы)
	- [ ] Локализация (i18n)

 - [ ] Дополнительно _(опционально)_
	- [ ] Подтверждение по email / интеграция с SMS API
 	- [ ] Смена темы (dark/light) 
       

---

## 📦 Установка и запуск

```bash
pnpm install
pnpm dev

