declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export const reportConversion = (url?: string) => {
  const callback = () => {
    if (url) window.location.href = url
  }

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-17372354031/SSqaCKijwK4bEO-r5NtA",
      event_callback: callback,
    })
  }

  return false
}
