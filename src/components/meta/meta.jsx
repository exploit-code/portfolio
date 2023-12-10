import Head from "next/head";

export const Meta = () => {
  return (
    <Head>
      <title>Frontend-разработчик</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Привет, меня зовут Александр! В течение последних лет я работаю в области веб-разработки, создаю качественные и удобные веб-приложения и сайты. Основная область моих знаний — разработка пользовательских интерфейсов."
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#202024" />
      <meta
        name="keywords"
        content="Портфолио, Frontend-разработчик, Разработчик, Фронтенд, Фронтенд разработчик, портфолио frontend разработчика"
      />
      <meta property="og:image" content="/api/og" />
      <meta name="twitter:image" content="/api/og" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
