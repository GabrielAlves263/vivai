import Header from "@/components/header/Header";
import BottomNav from "@/components/nav/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-md items-center justify-between bg-[#FAF9F6] border-x">
      <Header />
      <main className="w-full flex bg-custom-blue flex-col items-center flex-grow text-center px-10 gap-4">
        <h1 className="text-xl mt-4 w-full text-left">
          <strong>Meu perfil</strong>
        </h1>
        Esta tela ainda não foi implementada 😥 <br /> Novidades em breve!
      </main>
      <BottomNav />
    </div>
  );
}
