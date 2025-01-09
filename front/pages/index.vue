<template>
  <div class="container">
    <div class="content">
      <div class="imgDiv">
        <img src="/x.svg" alt="x logo" />
      </div>
      <main>
        <span class="nowText">Acontecendo agora</span>
        <span class="signUpText">Inscreva-se hoje</span>
        <Button text="Criar conta" primary></Button>
        <div class="login">
          <span> Já tem uma conta? </span>
          <Button text="Entrar"></Button>
        </div>
      </main>
    </div>
    <Footer
      :links="[
        'Sobre',
        'Baixe o aplicativo do X',
        'Central de Ajuda',
        'Termos de Serviço',
        'Política de Privacidade',
        'Política de cookies',
        'Acessibilidade',
        'Informações de anúncios',
        'Blog',
        'Carreiras',
        'Recursos da marca',
        'Publicidade',
        'Marketing',
        'X para Empresas',
        'Desenvolvedores',
        'Diretório',
        'Configurações',
      ]"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
    display: flex;
    align-items: center;

    .imgDiv {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50%;
      max-height: 380px;
      padding: 32px;

      img {
        height: 100%;
      }
    }

    main {
      min-width: 45vw;
      display: flex;
      flex-direction: column;

      .nowText {
        font-size: 64px;
        font-weight: 700;
        margin: 48px 0;
      }

      .signUpText {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 32px;
      }

      .login {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        span {
          font-weight: 700;
        }
      }
    }
  }
}
</style>
