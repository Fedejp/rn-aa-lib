import * as React from 'react';
import {View, Dimensions, FlatList, Image } from 'react-native'

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export interface AASlideProps {
  imageUrl: string
}

export interface AACarouselProps {
  images: string[]
}

  const Slide= (props: AASlideProps) => {
    return (
      <View
        style={{
          height: windowHeight,
          width: windowWidth,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: props.imageUrl}}
          style={{ width: windowWidth * 0.9, height: windowHeight * 0.9 }}
        ></Image>
      </View>
    );
  }

export const AACarouselNative = (props: AACarouselProps) => {
    return (
      <FlatList
        data={props.images}
        style={{ flex: 1 }}
        keyExtractor={(item => item)}
        renderItem={({ item }) =>
           <Slide imageUrl={item} />
        }
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    );
  }


