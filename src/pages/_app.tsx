import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const font = Manrope({ subsets: ["latin"] });

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={` ${font.className}`}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </main>
  );
}
