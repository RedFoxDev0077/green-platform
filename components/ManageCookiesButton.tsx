"use client";

export function ManageCookiesButton() {
  return (
    <button onClick={() => window.dispatchEvent(new Event("gp:open-consent"))} className="link-underline">
      Cookie settings
    </button>
  );
}
