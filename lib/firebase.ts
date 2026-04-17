import { initializeApp, getApps } from "firebase/app"
import { getAnalytics, isSupported } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyBXpFgFNLaR_Kwr7iry1EhDzwKO46Z4kMg",
  authDomain: "integratewise-4a649.firebaseapp.com",
  projectId: "integratewise-4a649",
  storageBucket: "integratewise-4a649.firebasestorage.app",
  messagingSenderId: "829139036914",
  appId: "1:829139036914:web:04df6fb98cc309df243e6b",
  measurementId: "G-J8PJ6KS67M",
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

let analytics: ReturnType<typeof getAnalytics> | null = null
if (typeof window !== "undefined") {
  // Skip analytics in development environment to avoid network errors
  const isDevelopment = typeof window !== "undefined" &&
    (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")

  if (!isDevelopment) {
    isSupported().then((supported) => {
      if (supported) {
        try {
          analytics = getAnalytics(app)
        } catch (error) {
          console.error("Failed to initialize analytics:", error)
        }
      }
    }).catch((error) => {
      console.error("Failed to check analytics support:", error)
    })
  }
}

export { app, analytics }
