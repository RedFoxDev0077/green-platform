"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const KEY = "gp-consent-v1";
type Choice = "accepted" | "rejected";

/** Analytics only load after explicit consent. Reopen with: window.dispatchEvent(new Event("gp:open-consent")) */
export function ConsentManager() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let stored: Choice | null = null;
    try {
      stored = localStorage.getItem(KEY) as Choice | null;
    } catch {}
    setChoice(stored);
    setReady(true);
    const reopen = () => setChoice(null);
    window.addEventListener("gp:open-consent", reopen);
    return () => window.removeEventListener("gp:open-consent", reopen);
  }, []);

  function decide(next: Choice) {
    try {
      localStorage.setItem(KEY, next);
    } catch {}
    setChoice(next);
  }

  const { ga4, gtm, metaPixel } = site.analytics;
  const hasTags = Boolean(ga4 || gtm || metaPixel);

  return (
    <>
      {choice === "accepted" && (
        <>
          {gtm && (
            <Script id="gtm" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtm}');`}
            </Script>
          )}
          {ga4 && (
            <>
              <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`} strategy="afterInteractive" />
              <Script id="ga4" strategy="afterInteractive">
                {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga4}');`}
              </Script>
            </>
          )}
          {metaPixel && (
            <Script id="meta-pixel" strategy="afterInteractive">
              {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixel}');fbq('track','PageView');`}
            </Script>
          )}
        </>
      )}

      {ready && choice === null && hasTags && (
        <div className="fixed bottom-3 left-3 right-3 z-[70] sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-sm">
          <div className="rounded-[2px] bg-navy-950 p-5 text-ivory-50 shadow-2xl ring-1 ring-ivory-50/10">
            <p className="font-display text-xl">A note on cookies</p>
            <p className="mt-2 text-sm leading-relaxed text-ivory-50/70">
              We use essential cookies to run this site and, only with your permission, analytics cookies
              to improve it. <Link href="/cookies" className="text-sand-300 underline">Learn more</Link>.
            </p>
            <div className="mt-4 flex gap-2">
              <button onClick={() => decide("rejected")} className="flex-1 rounded-full px-4 py-2.5 text-sm ring-1 ring-ivory-50/25 transition hover:bg-ivory-50/10">
                Decline
              </button>
              <button onClick={() => decide("accepted")} className="flex-1 rounded-full bg-sand-500 px-4 py-2.5 text-sm font-medium text-navy-950 transition hover:bg-sand-300">
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
