import { Header } from "@/components/header-client"
import { Footer } from "@/components/footer"
import { HostLandingGate } from "@/components/marketing/host-landing"
import { EnterpriseHome } from "@/components/marketing/home-enterprise"

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white">
      <Header />
      <main id="main">
        <HostLandingGate>
          <EnterpriseHome />
        </HostLandingGate>
      </main>
      <Footer />
    </div>
  )
}
