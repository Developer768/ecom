import "@/styles/globals.css";
import { cookies } from "next/headers";

import LocalFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/react";
import ReduxProvider from "@/redux/Provider";

const dmSans = DM_Sans({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  subsets: ["latin"],
  variable: "--font-dmSans",
});

const Salome = LocalFont({
  src: "../../public/assets/fonts/Salome.otf",
  variable: "--font-salome",
});

export const metadata = {
  title: "Kratom",
  description: "Buy Kratom Powder",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-dmSans ${dmSans.variable} ${Salome.variable} mx-auto max-w-[1920px]`}
        suppressHydrationWarning={true}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <ReduxProvider>{children}</ReduxProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
