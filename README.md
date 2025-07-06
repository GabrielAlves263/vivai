# Bem 🏡💙

**Sua Casa Segura. Sua Vida com Autonomia.**

Bem é uma solução inteligente, acolhedora e preventiva voltada para o cuidado de idosos e pessoas com necessidades especiais. Unindo **tecnologia assistiva**, **inteligência artificial** e **design inclusivo**, o app promove bem-estar, segurança e companhia no dia a dia de quem mais precisa.

---

## 🧠 Propósito

Com o envelhecimento da população brasileira, o BEM foi criado para transformar o cuidado remoto em uma experiência humanizada. Vai além de soluções emergenciais ao oferecer um cuidado contínuo, preventivo e completo.

---

## 📱 Funcionalidades Principais

- **Interação social** com assistente virtual simpático e conversador.
- **Lembretes personalizados** para medicamentos, alimentação e hidratação.

---

## 🎯 Público-Alvo

- Idosos que vivem sozinhos ou em situação de risco.
- Pessoas com necessidades especiais que exigem atenção contínua.
- Familiares que buscam cuidado remoto e interativo.
- Planos de saúde e instituições de assistência social.

---

## 🌈 Identidade Visual

### 🎨 Paleta de Cores

| Cor                     | Hex       | Significado                  |
| ----------------------- | --------- | ---------------------------- |
| Azul Serenity           | `#4A90E2` | Confiança, calma, tecnologia |
| Verde Menta             | `#7ED6A6` | Saúde, frescor, vitalidade   |
| Amarelo Manteiga        | `#FFE28A` | Acolhimento, energia leve    |
| Branco                  | `#FFFFFF` | Simplicidade, leveza         |
| Cinza Claro             | `#F2F2F2` | Fundo neutro                 |
| Vermelho Claro (alerta) | `#FF6B6B` | Emergência, atenção          |

### 🖋️ Fontes

- **Primária (títulos):** Nunito
- **Secundária (textos):** Inter / Open Sans

---

## 🤖 Assistente Virtual – Alice

### Persona

> A Alice é uma assistente virtual amigável, calma e gentil. Ela acompanha, lembra, interage e cuida com atenção e carinho.

### Funções:

- Lembrar atividades importantes
- Manter conversas leves e afetuosas
- Estimular o bem-estar físico e emocional
- Identificar padrões de comportamento
- Promover a autonomia com segurança

---

## 🧩 Tecnologias usadas

### Frontend

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Web Speech API

### Backend

- [FastAPI](https://fastapi.tiangolo.com/)
- [Google Generative AI (Gemma)](https://makersuite.google.com/)
- [ElevenLabs TTS](https://www.elevenlabs.io/)

---

## 🚀 Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/GabrielAlves263/vivai.git
cd vivai
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Criar o arquivo .env.local

No diretório raiz, crie o arquivo .env.local com o endereço da API:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
```

📌 Importante: Substitua localhost:8000 caso o backend esteja hospedado em outro lugar.

### 4. Rodar o projeto

```bash
npm run dev
```

o frontend estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 🔗 Backend (API da IA e TTS)

O frontend se comunica com um backend que roda em FastAPI. Para rodar o backend, veja o repositório correspondente:

👉 Repositório do backend: [Link](https://github.com/GabrielAlves263/bem-backend)

---

## Pré-requisitos

- Node.js 18+
- Navegador compatível com reconhecimento de fala (preferencialmente Google Chrome)
- Microfone habilitado
