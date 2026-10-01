import { DraftProvider } from "@/components/workspace/draft-store";

export default function EnterLayout({ children }: { children: React.ReactNode }) {
  return <DraftProvider>{children}</DraftProvider>;
}
