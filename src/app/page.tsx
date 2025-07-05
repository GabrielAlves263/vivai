import TextInputButton from "@/components/buttons/TextInputButton";
import VoiceButton from "@/components/buttons/VoiceButton";
import Header from "@/components/header/Header";
import BottomNav from "@/components/nav/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#FAF9F6]">
      <Header />
      <main className="w-full flex bg-custom-blue flex-col items-center flex-grow text-center px-4 gap-7">
        <h1 className="text-xl mt-6 mb-6 w-full text-left">
          Bem-vindo, Francisco!
        </h1>
        <VoiceButton />
        <TextInputButton />
      </main>
      <BottomNav />
    </div>
  );
}
