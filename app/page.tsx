import HeroSection from "@/components/HeroSection";
// import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      {/* <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle />
      </div> */}
    </div>
  );
}
