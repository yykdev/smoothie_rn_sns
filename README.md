# react native cli 공부

```
노마드 코더를 통해 expo 를 통한 개발은 공부 하였으나,
프로덕트 개발 시 카카오, 네이버 등 과의 연동이 불가능 하거나 eject 를 해야 하는 경우가 발생 하여 cli 개발을 공부 해 보려 함.
```

#### - 참고 도서 : [스무디 한잔 마시면서 끝내는 React Native](http://www.yes24.com/Product/Goods/82895471?Acode=101)

#### - 참고 블로그 : [dev-yakuza](https://dev-yakuza.github.io/ko/)

## 공부 정리.

### ## 프로젝트 기본 셋팅

#### 1. React Native Init

```
$ react-native init smoothie_rn_sns
```

#### 2. Styled Component, babel, typescript 셋팅

```
$ npm install --save styled-components
$ npm install --save-dev typescript @types/react @types/react-native @types/styled-components babel-plugin-root-import
```

#### 3. React Native Navigation 관련 라이브러리 설치

```
$ npm install --save react-navigation react-native-gesture-handler react-native-reanimated
$ cd ios
$ pod install
```

#### 4. Async Storage 관련 라이브러리 설치

```
$ npm install --save @react-native-community/async-storage
$ cd ios
$ pod install
```

#### 5. icon, splash 이미지 셋팅

```
$ yo rn-toolbox:assets --icon ./src/assets/images/app_icon.png
$ yo rn-toolbox:assets --splash ./src/assets/images/app_splash.psd
```
