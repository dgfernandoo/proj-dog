1. Criação do Projeto com Expo

O aplicativo foi iniciado utilizando o Expo, que facilita a configuração e execução do ambiente React Native. O comando npx create-expo-app gerou toda a estrutura inicial do projeto.

2. Estruturação das Telas

Foram criadas 5 telas obrigatórias:

Home – Tela principal que mostra a foto aleatória do cachorro.

Photos – Segunda aba com outra funcionalidade visual.

Settings – Tela de configurações com uma opção simples (ex: ativar modo escuro).

About – Tela Sobre o app com informações, link da API e versão.

Modal – Componente flutuante usado para exibir detalhes sobre o app.

Cada tela foi desenvolvida usando StyleSheet para cumprir a exigência de estilização.

3. Navegação (Drawer, Tabs, Modal)

O app usa React Navigation para organizar toda a navegação:

Drawer Navigation como menu lateral, contendo:

HomeTabs

Settings

About

Tab Navigation dentro do Drawer, com duas abas:

Home

Photos

Modal personalizado aberto pela Home para mostrar informações extras.

Essa estrutura atende aos requisitos de possuir Drawer + Tabs + Modal.

4. Consumo da Dog API

Foi usada a API pública Dog API, especificamente o endpoint:

https://dog.ceo/api/breeds/image/random


Ele retorna uma foto aleatória de cachorro.
O app faz a requisição usando fetch() e atualiza a imagem na tela quando o usuário pressiona o botão.

5. Uso de Módulos do Expo

O projeto incluiu mais de 5 módulos do Expo, como:

expo-status-bar – Controla a barra de status do app.

expo-constants – Exibe informações como versão do app (usado na tela About).

expo-font – Permite carregar fontes personalizadas.

expo-linking – Abre links externos no navegador (usado no Modal e About).

expo-navigation-bar – Ajustes visuais da barra de navegação no Android.

Esses módulos foram usados para complementar funcionalidades do aplicativo e atender aos requisitos do projeto.

6. Implementação da Tela de Configurações

Na tela Settings, foi criada uma configuração simples:
✔ Alternar entre modo escuro e claro (função demonstrativa).

Essa tela foi adicionada ao Drawer para completar as telas obrigatórias.

7. Tela Sobre (About.js)

Uma tela dedicada com:

Descrição do app

Função geral do projeto

Versão do aplicativo através do Constants

Nome do desenvolvedor

Link da Dog API clicável

Foi adicionada ao Drawer como uma das opções principais.

8. Componente Modal

O Modal apresenta:

Texto explicativo sobre o app

Link para abrir a Dog API

Botão para fechar o Modal

É ativado pela Home e desenvolvido com Modal do React Native.

9. Organização das Pastas

O projeto foi estruturado em pastas claras:

navigation/ → navegadores  
screens/ → telas  
components/ → modal e outros componentes  
assets/ → imagens e fontes


Essa organização facilita manutenção e leitura do código.

10. Testes no Expo Go

O app foi rodado e testado no Expo Go, garantindo funcionamento em dispositivos Android e iOS sem configuração adicional.
