import { Divider } from '../../../components/divider';

export default function AppBroker() {
  return (
    <div className="bg-gradient-to-br py-20 dark:from-indigo-950 dark:via-neutral-950 dark:to-indigo-950">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-base-content min-h-screen space-y-6">
          <h1 className="mb-8 text-4xl font-bold">
            App Broker - React Native APP
          </h1>

          <h2 className="text-2xl font-bold">Resumo do Projeto</h2>

          <p className="leading-relaxed">
            O <strong>App Broker</strong> é um aplicativo móvel desenvolvido em{' '}
            <strong>React Native</strong> e <strong>TypeScript</strong>,
            projetado especificamente para operar em máquinas de Ponto de Venda
            (POS) da Cielo. Seu objetivo principal é facilitar a venda de
            seguros e garantias estendidas, integrando-se com funcionalidades de
            hardware do dispositivo, como leitura de códigos de barras/IMEI,
            captura de assinatura e impressão de comprovantes. O aplicativo
            oferece uma experiência de usuário fluida para o processo de venda,
            desde a seleção do produto até a confirmação do pagamento e emissão
            da apólice.
          </p>

          <Divider margin />

          <h2 className="text-2xl font-bold">Principais Funcionalidades</h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Fluxo de Venda de Seguros/Garantias:</strong>
              <ul className="list-disc pl-6">
                <li>Seleção e configuração de seguros e garantias.</li>
                <li>Visualização de detalhes da garantia e apólice.</li>
                <li>Coleta de dados do cliente.</li>
                <li>Confirmação de dados do cliente.</li>
              </ul>
            </li>
            <li>
              <strong>Interação com Hardware POS:</strong>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Leitura de EAN/IMEI/Número de Série:</strong>{' '}
                  Utilização da câmera do dispositivo para escanear códigos de
                  barras e números de identificação de produtos.
                </li>
                <li>
                  <strong>Captura de Assinatura:</strong> Coleta de assinatura
                  digital do cliente diretamente na tela do dispositivo.
                </li>
                <li>
                  <strong>Impressão de Comprovantes:</strong> Geração e
                  impressão de recibos e apólices.
                </li>
              </ul>
            </li>
            <li>
              <strong>Processamento de Pagamento:</strong> Integração com o
              fluxo de pagamento da Cielo.
            </li>
            <li>
              <strong>Gerenciamento de Valores:</strong> Funcionalidades para
              alteração e autorização de valores base.
            </li>
            <li>
              <strong>Navegação Intuitiva:</strong> Menu lateral (Drawer
              Navigator) para acesso rápido às diferentes seções do aplicativo.
            </li>
            <li>
              <strong>Monitoramento de Performance:</strong> Integração com
              Datadog para RUM (Real User Monitoring) e análise de performance.
            </li>
          </ul>

          <Divider margin />

          <h2 className="text-2xl font-bold">
            Arquitetura e Estrutura do Projeto
          </h2>

          <p className="leading-relaxed">
            O projeto segue uma arquitetura modular e componentizada, visando
            reusabilidade, manutenibilidade e escalabilidade.
          </p>

          <h3 className="mt-18 text-xl font-bold">Tecnologias Principais</h3>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Framework:</strong> React Native, framework que permite
              criar aplicações para Android e iOS a partir de um único
              código-fonte, poupando tempo, esforço no desenvolvimento e
              evitando manutenção de dois projetos separados.
            </p>
          </div>
          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Linguagem:</strong> <strong>TypeScript</strong>, para
              garantir a segurança de tipos e facilitar a manutenção de uma
              codebase complexa.
            </p>
          </div>
          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Gerenciamento de Estado:</strong> Hookstate é uma
              biblioteca de gerenciamento de estado leve, eficiente e flexível
              que se baseia nos Hooks do React. Oferece desempenho superior com
              atualizações otimizadas e redução de re-renderizações
              desnecessárias.
            </p>
          </div>
          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Navegação:</strong> React Navigation (Stack e Drawer
              Navigators)
            </p>
          </div>
          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Requisições HTTP:</strong> Axios (<code>axios</code>,{' '}
              <code>axios-retry</code>)
            </p>
          </div>
          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Estilização:</strong> Styled Components (
              <code>styled-components</code>), RNEUI (<code>@rneui/themed</code>
              ), React Native Elements
            </p>
          </div>
          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Análise de Performance:</strong> Datadog (
              <code>@datadog/mobile-react-native</code>,{' '}
              <code>@datadog/mobile-react-navigation</code>)
            </p>
          </div>

          <h3 className="mt-18 text-xl font-bold">Gerenciamento de Estado</h3>
          <p className="leading-relaxed">
            O aplicativo utiliza o <strong>Hookstate</strong> para gerenciar o
            estado global. Isso permite que os dados sejam centralizados e
            acessíveis por diferentes componentes e telas de forma reativa e
            eficiente, garantindo que a UI reflita sempre o estado mais recente
            da aplicação. A estrutura <code>src/store</code> com{' '}
            <code>actions</code> e <code>states</code> indica uma abordagem
            organizada para a manipulação do estado.
          </p>

          <h3 className="mt-18 text-xl font-bold">Navegação</h3>
          <p className="leading-relaxed">
            A navegação é gerenciada pelo <strong>React Navigation</strong>,
            utilizando:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>
                <code>createStackNavigator</code>:
              </strong>{' '}
              Para fluxos lineares, como o processo de login antes da
              autenticação.
            </li>
            <li>
              <strong>
                <code>createDrawerNavigator</code>:
              </strong>{' '}
              Para a navegação principal após o login, oferecendo um menu
              lateral customizado (<code>DrawerContent</code>) para acesso às
              funcionalidades do aplicativo.
            </li>
          </ul>
          <p className="leading-relaxed">
            A lógica de navegação é centralizada em <code>routes.tsx</code>, que
            também lida com a verificação de autenticação e o controle do
            histórico de navegação.
          </p>

          <h3 className="mt-18 text-xl font-bold">
            Interação com Hardware Específico (Cielo POS)
          </h3>

          <p className="leading-relaxed">
            Um ponto importante da arquitetura é a forma como o aplicativo
            interage com as funcionalidades específicas das máquinas POS da
            Cielo. Isso é abstraído e gerenciado principalmente através dos{' '}
            <code>helpers</code>:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>
                <code>Imei</code> e <code>SerialNumber</code>:
              </strong>{' '}
              Módulos dedicados à obtenção de identificadores únicos do
              dispositivo, essenciais para o registro de vendas e seguros.
            </li>
            <li>
              <strong>
                <code>Print</code>:
              </strong>{' '}
              Lógica para comunicação com a impressora térmica do dispositivo,
              permitindo a emissão de comprovantes e apólices.
            </li>
            <li>
              <strong>
                <code>Payment</code>:
              </strong>{' '}
              Esse módulo encapsula a integração com o SDK de pagamento da
              Cielo, orquestrando as transações financeiras.
            </li>
            <li>
              <strong>
                <code>react-native-vision-camera</code> e{' '}
                <code>vision-camera-code-scanner</code>:
              </strong>{' '}
              Utilizados para escanear códigos de barras e QR codes, agilizando
              a identificação de produtos.
            </li>
            <li>
              <strong>
                <code>react-native-signature-capture</code>:
              </strong>{' '}
              Implementado para coletar a assinatura do cliente, um requisito
              comum em transações de seguros.
            </li>
          </ul>

          <h3 className="mt-18 text-xl font-bold">Comunicação com API</h3>

          <p className="leading-relaxed">
            A comunicação com o backend é realizada utilizando o
            <strong>React Query</strong>, uma biblioteca de consulta de dados
            que permite que os dados sejam carregados de maneira assíncrona e
            eficiente.
          </p>

          <Divider margin />

          <h2 className="text-2xl font-bold">Desafios Técnicos e Soluções</h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Integração com Hardware Proprietário:</strong> O principal
              desafio foi a integração com as APIs e SDKs específicos das
              máquinas Cielo, que muitas vezes exigem módulos nativos ou
              wrappers para React Native.
            </li>
            <li>
              <strong>Gerenciamento de Estado Complexo:</strong> Um aplicativo
              de vendas com múltiplos passos e dados de usuário/produto requer
              um gerenciamento de estado consistente. O Hookstate foi escolhido
              para lidar com essa complexidade, oferecendo uma solução reativa e
              performática.
            </li>
            <li>
              <strong>Experiência do Usuário em Dispositivos POS:</strong> O
              design e a usabilidade foram adaptados para telas menores e
              interações específicas de dispositivos POS, com componentes
              reutilizáveis e um fluxo de navegação claro.
            </li>
          </ul>

          <Divider margin />

          <h2 className="mt-10 text-2xl font-bold">Conclusão</h2>

          <p className="leading-relaxed">
            O <strong>App Broker</strong> é um exemplo de aplicativo React
            Native que aborda desafios de integração com hardware específico e
            gerenciamento de fluxo de negócios complexo. Sua arquitetura
            modular, com TypeScript e bibliotecas modernas garantem uma base
            para futuras expansões e manutenções.
          </p>

          <Divider margin />

          <p className="text-sm leading-relaxed text-gray-400">
            <em>
              Este documento é uma representação técnica do projeto para fins de
              portfólio e omite intencionalmente detalhes confidenciais ou
              proprietários.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
