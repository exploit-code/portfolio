import "../styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { Layout } from "../components/layout/layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider enableSystem={true}>
      <Layout>
        <style jsx global>{`
          html {
            font-family: "Inter", sans-serif;
          }
        `}</style>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
