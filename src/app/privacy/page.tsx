import Link from "next/link";

const page = () => {
  return (
    <section className="py-20">
      <div className="mt-10 max-w-[910px] w-full mx-auto px-5">
        <Link
          href="/"
          className="flex items-center gap-[10px] font-helvetica text-base font-normal"
        >
        <span className="rotate-180">→</span>
          Назад
        </Link>

        <h1 className="mt-9 text-[32px] font-medium font-helvetica">
          Политика конфиденциальности
        </h1>

        <p className="font-helvetica text-base leading-[150%] py-[35px]">
          Настоящая Политика конфиденциальности определяет порядок обработки и
          защиты персональных данных пользователей сайта.
        </p>

        <span className="text-black block mb-8">—</span>

        <h2 className="text-xl font-medium mb-3 font-helvetica">1. Общие положения</h2>

        <h3 className="font-medium text-lg mb-2">
          1.1 Какие данные мы собираем
        </h3>
        <ul className="list-disc pl-6 font-helvetica text-base leading-[150%] mb-4">
          <li>Имя и фамилия</li>
          <li>Адрес электронной почты</li>
          <li>Номер телефона</li>
          <li>IP-адрес и данные браузера</li>
        </ul>

        <h3 className="font-medium text-lg mb-2">1.2 Цели сбора информации</h3>
        <ul className="list-disc pl-6 font-helvetica text-base leading-[150%] mb-8">
          <li>Обратная связь с пользователем</li>
          <li>Улучшение качества сервиса</li>
          <li>Отправка уведомлений и новостей</li>
        </ul>

        <span className="text-black block mb-8">—</span>

        <h2 className="text-xl font-medium mb-3 font-helvetica">
          2. Правовые основания обработки данных
        </h2>
        <ul className="list-disc pl-6 font-helvetica text-base leading-[150%] mb-8">
          <li>Согласие пользователя</li>
          <li>Исполнение договора</li>
          <li>Требования законодательства</li>
        </ul>

        <span className="text-black block mb-8">—</span>

        <h2 className="text-xl font-medium mb-3 font-helvetica">
          3. Условия обработки данных
        </h2>
        <ul className="list-disc pl-6 font-helvetica text-base leading-[150%] mb-8">
          <li>Законность обработки</li>
          <li>Конфиденциальность</li>
          <li>Безопасность хранения</li>
        </ul>

        <span className="text-black block mb-8">—</span>

        <h2 className="text-xl font-medium mb-3 font-helvetica">
          4. Передача данных третьим лицам
        </h2>
        <p className="font-helvetica text-base leading-[150%] mb-4">
          Мы не передаем персональные данные третьим лицам без согласия
          пользователя, за исключением случаев, предусмотренных законом.
        </p>
        <ul className="list-disc pl-6 font-helvetica text-base leading-[150%] mb-4">
          <li>По требованию государственных органов</li>
          <li>Для защиты прав компании</li>
        </ul>
        <p className="font-helvetica text-base leading-[150%] mb-8">
          Во всех случаях соблюдаются требования законодательства о защите
          данных.
        </p>

        <span className="text-black block mb-8">—</span>

        <h2 className="text-xl font-medium mb-3 font-helvetica">
          5. Защита персональных данных
        </h2>
        <p className="font-helvetica text-base leading-[150%] mb-4">
          Мы применяем технические и организационные меры для защиты данных.
        </p>
        <p className="font-helvetica text-base leading-[150%] mb-8">
          Доступ к данным имеют только уполномоченные лица.
        </p>

        <span className="text-black block mb-8">—</span>

        <h2 className="text-xl font-medium mb-3 font-helvetica">6. Права пользователя</h2>
        <p className="font-helvetica text-base leading-[150%] mb-8">
          Пользователь имеет право на получение информации, изменение и удаление
          своих данных.
        </p>

        <span className="text-black block mb-8">—</span>

        <h2 className="text-xl font-medium mb-3 font-helvetica">
          7. Использование файлов cookie
        </h2>
        <p className="font-helvetica text-base leading-[150%] mb-4">
          Сайт использует cookie для улучшения работы сервиса.
        </p>
        <ul className="list-disc pl-6 font-helvetica text-base leading-[150%] mb-4">
          <li>Аналитика посещений</li>
          <li>Сохранение пользовательских настроек</li>
        </ul>
        <p className="font-helvetica text-base leading-[150%] mb-8">
          Вы можете отключить cookie в настройках браузера.
        </p>

        <span className="text-black block mb-8">—</span>

        <h2 className="text-xl font-medium mb-3 font-helvetica">8. Изменения политики</h2>
        <p className="font-helvetica text-base leading-[150%] mb-8">
          Компания вправе изменять настоящую политику без уведомления
          пользователей.
        </p>

        <span className="text-black block mb-8">—</span>

        <h2 className="text-xl font-medium mb-3 font-helvetica">9. Контактная информация</h2>
        <p className="font-helvetica text-base leading-[150%] mb-8">
          По всем вопросам вы можете связаться с нами через форму обратной
          связи.
        </p>

        <span className="text-black block mb-8">—</span>

        <h2 className="text-xl font-medium mb-3 font-helvetica">
          10. Заключительные положения
        </h2>
        <p className="font-helvetica text-base leading-[150%]">
          Используя сайт, вы соглашаетесь с условиями данной политики
          конфиденциальности.
        </p>
      </div>
    </section>
  );
};

export default page;
