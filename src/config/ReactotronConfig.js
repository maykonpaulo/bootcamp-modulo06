import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '10.61.10.23' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
