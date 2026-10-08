import { Header } from "@/components/header-client"
import { Footer } from "@/components/footer"
import { InnovLabsHome } from "@/components/marketing/innovlabs-home"

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#F7F9FC]">
      <Header />
      <main id="main" className="pt-16">
        <InnovLabsHome />
      </main>
      <Footer />
    </div>
  )
}
