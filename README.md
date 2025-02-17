This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Asegurarse tener instalado 
1) Node.js (versión recomendada: >=18)
2) React Native CLI → npm install -g react-native-cli
3) Android Studio (para emulador Android)
4) Xcode (para iOS, solo en macOS)
5) CocoaPods (para iOS, solo en macOS)

## Step 1: Install dependencies (npm install)
## Step 2: Install dependencies of CocoaPods if you want to use iOS (cd ios && pod install && cd ..)
## Step 3: Run Metro (npm run start)
## Step 4: Start the app (npm run android or npm run ios)

**Note:** Este es el desafio de Tenpo, una app con react-native cli, para android y ios. Se solicitaba crear un fake-login con un context que maneje la autenticación. Se pedia un home donde renderizara una lista con 2000 elementos y una propuesta teorica para mejorar las solicitudes al backend. La solucion propuesta fue hacer un infinite scroll con 20 elementos por pagina en los dos carruseles secundarios. En el primer carrusel use un ScrollView y en los demas use un FlatList. En la primera lista (Primer carrusel) use un ScrollView ya que nunca se renderizarian mas de 20 elementos, ya que se decidio que esa seccion solo mostraria solo "20 nuevos estrenos". En las demas listas use un FlatList ya que se renderizarian mas elementos. Para no hacer consultas tan pesadas se decidio hacer un infinite scroll.

**Oportuidad de mejoras:** Tome la descicion de no hacer mas robusto y pesado el codigo con librerias como redux, zustand, react-native-dotenv, Formik o React-hook-form, styled-components, etc. Pero esas son librerias con las que trabajo todos los dias. Gestor de estados: Mucha mas experiencia en Redux aunque zustand tambien la utilizo. Bastante experiencia con librerias como Formik o React-hook-form & yup para validaciones y manejo de formularios. react-native-dotenv para manejo de variables de entorno. styled-components para manejo de estilos. React-native-paper o native-base para usos de componentes.

