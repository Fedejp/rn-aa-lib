import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { AACarouselNative } from 'rn-aa-lib';

export default function App() {
  const carouselProps = ['https://picsum.photos/200/300?id=1', 'https://picsum.photos/200/300?id=2', 'https://picsum.photos/200/300?id=3']

  return (
    <View style={styles.container}>
      <AACarouselNative images={carouselProps}></AACarouselNative>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
