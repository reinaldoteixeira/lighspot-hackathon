# LIGHSPOT

## Dependencias

- JDK
- SDK Android

### Instalando JDK

Execute os seguintes comandos para instalar o JDK(A versão 8 do JDK é obrigatória).

```console
$ sudo add-apt-repository ppa:openjdk-r/ppa
$ sudo apt-get update
$ sudo apt-get install openjdk-8-jdk
```

Execute o comando para testar se foi instalado com sucesso.

```console
$ java -version
```

### Configurando o SDK Android

Acesse https://developer.android.com/studio/#downloads, na opção "Command line tools only" baixe a SDK referente ao seu sistema operacional. Após feito o Download, extraia o conteúdo do pacote para a pasta criada no passo anterior. Com esse endereço precisamos configurar algumas variáveis ambiente em nosso sistema, procure pelo primeiro dos seguintes arquivos existentes no seu sistema: ~/.bash_profile, ~/.profile, ~/.zshrc ou ~/.bashrc, e adicione essas três linhas no arquivo (de preferência no início):

```console
$ export ANDROID_HOME=~/Android/Sdk
$ export PATH=$PATH:$ANDROID_HOME/tools
$ export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Agora, abra seu Terminal e execute o seguinte comando:

```console
$ ~/Android/Sdk/tools/bin/sdkmanager "platform-tools" "platforms;android-27" "build-tools;27.0.3"
```

## Iniciando

### Preparar o projeto

Instalar o react-native-cli globalmente

```console
$ npm install -g react-native-cli
```

Instalar pacotes do projeto

```console
$ yarn
```

### Iniciar

Para carregar as dependencias execute:

```console
$ yarn start
```

Para iniciar o projeto em um device(emulador ou celular) execute:

```console
$ react-native run-android
```

Para abrir as ferramentas de emulação no device execute:

```console
$ adb shell input keyevent 82
```

## Utilidades

Visualizar logs da emulação:

```console
$ react-native log-android
```

Para corrigir o erro "INSTALL_FAILED_UPDATE_INCOMPATIBLE" execute:

```console
$ adb uninstall com.lighspot
```

Iniciar servidor adb

```console
$ adb start-server
```

Parar servidor adb

```console
$ adb kill-server
```

Se houver erro para connectar o projeto no emulador do Gennymotion, abra o Gennymotion e em **settings>ADB** selecione a opção "Use custom Android SDK tools" e coloque o caminho do local que está instalado o seu SDK Android.

## Emulador

Nesse projeto utilizamos o Emulador Gennymotion como padrão.
Acesse o link para configurar o Emulador. <a>https://docs.rocketseat.dev/ambiente-react-native/android/emulador</a>

Para conectar o emulador execute o comando

```console
$ adb connect IP_DO_SEU_EMULADOR:5555
```

Para ver os Emuladores execute o comando

```console
$ adb devices
```

## Funcionalidade

- Feed de informações
- Chat de comunicação

## Equipe

- Reinaldo Teixeira
- Leornardo Theodoro
- Douglas Assis
- Nara Barros
- Andre Zagatti
- Giovani Milani

## Apresentação do projeto

- https://docs.google.com/presentation/d/1uAqv2S5-wCqnVK7v0BW0lTqf43fiQBlMcTKkywEHidQ/edit?usp=sharing
