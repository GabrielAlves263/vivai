export const useSpeechRecognition = () => {
  const reconhecer = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition;

      if (!SpeechRecognition)
        return reject("Seu navegador não suporta reconhecimento de voz.");

      const recognition = new SpeechRecognition();
      recognition.lang = "pt-BR";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event: any) => {
        const resultado = event.results[0][0].transcript;
        resolve(resultado);
      };

      recognition.onerror = () => reject("Erro no reconhecimento de fala.");
      recognition.start();
    });
  };

  return { reconhecer };
};
