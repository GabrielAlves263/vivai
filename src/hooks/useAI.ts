export const useAI = () => {
  const baseUrl = "http://localhost:8000"; // ou IP do servidor FastAPI

  const conversar = async (pergunta: string): Promise<string> => {
    const res = await fetch(`${baseUrl}/perguntar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texto: pergunta }),
    });
    const data = await res.json();
    return data.resposta;
  };

  const falar = async (texto: string) => {
    const res = await fetch(`${baseUrl}/falar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texto }),
    });
    const blob = await res.blob();
    const audio = new Audio(URL.createObjectURL(blob));
    audio.play();
  };

  return { conversar, falar };
};
