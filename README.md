# 🍰 Doce Inspiração

Aplicativo mobile de catálogo de confeitaria construído com **Expo** e **React Native**.
O app apresenta o cardápio de bolos, tortas e sobremesas em uma interface limpa, com
tema em tons de rosa/vinho, filtros por categoria e navegação por abas.

## ✨ Funcionalidades

- **Catálogo de produtos** em grade de dois cards com foto, descrição e preço
- **Filtros por categoria** (Todos, Bolos, Tortas, Sem Açúcar, Sazonais) em chips horizontais
- **Favoritar produto** com toque no ícone de coração (estado local)
- **Botão de adicionar ao carrinho** em cada card
- **Barra de navegação inferior** com Início, Cardápio, Perfil e Carrinho (com badge de itens)
- **Top bar** com marca, título e busca
- **Suporte a dark mode** automático (`userInterfaceStyle: automatic`)
- **Safe area** respeitada em dispositivos com notch

## 🛠 Tecnologias

| Tecnologia | Versão | Uso |
| --- | --- | --- |
| [Expo](https://expo.dev) | SDK 54 | Plataforma e tooling |
| [Expo Router](https://docs.expo.dev/router/introduction/) | 6.x | Roteamento baseado em arquivos |
| React Native | 0.81 | UI mobile (iOS/Android/Web) |
| React | 19.1 | UI library |
| TypeScript | 5.9 | Tipagem estática |
| expo-image | 3.x | Carregamento otimizado de imagens |
| @expo/vector-icons (MaterialIcons) | 15.x | Ícones |
| react-native-safe-area-context | 5.x | Áreas seguras |
| ESLint + eslint-config-expo | — | Lint |

## 📁 Estrutura do projeto

```
.
├── app/                  # Rotas (Expo Router — file-based routing)
│   ├── _layout.tsx       # Layout raiz (Stack sem cabeçalho)
│   └── index.tsx         # Tela inicial (catálogo + navegação)
├── assets/images/        # Ícones, splash e imagens do app
├── components/           # Componentes reutilizáveis (themed-text, themed-view…)
├── constants/            # Constantes e tema
├── hooks/                # Hooks (use-theme-color, use-color-scheme)
├── scripts/              # Script de reset do projeto
├── app.json              # Configuração do Expo
├── eslint.config.js      # Configuração do Lint
└── tsconfig.json         # Configuração do TypeScript
```

## 🚀 Como rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20.19 ou superior
- npm (junto com o Node)
- O app **Expo Go** no seu celular (Android/iOS) — ou emulador configurado

### Instalação

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npx expo start
```

No terminal você verá um QR code. Escaneie com o **Expo Go** (Android) ou a
**câmera do iPhone** (iOS) para abrir o app.

### Outros comandos úteis

```bash
npm run android   # Abrir direto no emulador/dispositivo Android
npm run ios       # Abrir direto no simulador iOS
npm run web       # Rodar no navegador
npm run lint      # Verificar o código com ESLint
```

### Resetar o projeto

```bash
npm run reset-project
```

Move o código inicial para `app-example/` e cria um diretório `app/` em branco.

## 📱 Plataformas suportadas

- ✅ Android
- ✅ iOS
- ✅ Web

## 📄 Licença

Projeto privado (`"private": true`).
