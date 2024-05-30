import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import "./webflow.css";
import Script from "next/script";
import { HarmonySetup } from "harmony-ai-editor";
import { fonts } from "@/src/utils/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harmony UI",
  description: "Integrated Design Canavas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script>   
        {`window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};   
        heap.load("1295986271");`}
        </Script>
        <HarmonySetup repositoryId="ae266a29-9d80-4af0-aa94-833108c83515" fonts={fonts} environment="development"/>
      </body>
    </html>
  );
}
