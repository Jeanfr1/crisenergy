# Guia de Implantação no Netlify

Este guia fornece instruções passo a passo para implantar o projeto CRIS ENERGY no Netlify.

## Pré-requisitos

- Uma conta no [Netlify](https://app.netlify.com/signup)
- Seu repositório GitHub já configurado (https://github.com/Jeanfr1/crisenergy.git)

## Configuração Já Realizada

O projeto já está configurado para implantação no Netlify com os seguintes arquivos:

1. **netlify.toml**: Configuração principal do Netlify
2. **@netlify/plugin-nextjs**: Plugin instalado para otimizar a implantação do Next.js
3. **.env.production**: Arquivo para variáveis de ambiente de produção

## Passos para Implantação

### 1. Faça Login no Netlify

Acesse [app.netlify.com](https://app.netlify.com/) e faça login com sua conta.

### 2. Adicione um Novo Site

1. Clique no botão **"Add new site"** no dashboard do Netlify
2. Selecione **"Import an existing project"**
3. Escolha **"GitHub"** como provedor de Git

### 3. Conecte ao Repositório GitHub

1. Autorize o Netlify a acessar seu GitHub se solicitado
2. Procure e selecione o repositório `Jeanfr1/crisenergy`

### 4. Configure as Opções de Implantação

Os valores padrão devem ser preenchidos automaticamente a partir do arquivo `netlify.toml`:

- **Branch to deploy**: `main`
- **Build command**: `npm run build`
- **Publish directory**: `.next`

### 5. Configurações Avançadas (Opcional)

Se você precisar adicionar variáveis de ambiente além das definidas em `.env.production`:

1. Expanda a seção **"Advanced build settings"**
2. Adicione as variáveis de ambiente necessárias

### 6. Implante o Site

1. Clique no botão **"Deploy site"**
2. Aguarde a conclusão do processo de build e implantação

### 7. Configurar Domínio Personalizado (Opcional)

Após a implantação:

1. Vá para **"Site settings"** > **"Domain management"**
2. Clique em **"Add custom domain"**
3. Siga as instruções para configurar seu domínio personalizado

## Verificando a Implantação

Após a conclusão da implantação, você poderá acessar seu site através da URL fornecida pelo Netlify (geralmente `https://[nome-aleatorio].netlify.app`).

## Implantações Contínuas

O Netlify está configurado para implantar automaticamente sempre que você enviar alterações para a branch `main` do seu repositório GitHub.

## Solução de Problemas

Se encontrar problemas durante a implantação:

1. Verifique os logs de build no Netlify para identificar erros
2. Certifique-se de que todas as dependências estão instaladas corretamente
3. Verifique se o arquivo `netlify.toml` está configurado corretamente

## Recursos Adicionais

- [Documentação do Netlify](https://docs.netlify.com/)
- [Documentação do Next.js no Netlify](https://docs.netlify.com/integrations/frameworks/next-js/overview/)
- [Plugin Next.js para Netlify](https://github.com/netlify/netlify-plugin-nextjs)
