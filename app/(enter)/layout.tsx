import type { Metadata } from "next";
import { DraftProvider } from "@/components/workspace/draft-store";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function EnterLayout({ children }: { children: React.ReactNode }) {
  return <DraftProvider>{children}</DraftProvider>;
}
