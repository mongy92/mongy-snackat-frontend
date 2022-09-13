import {Dimensions, StyleSheet, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
const {height} = Dimensions.get('window');
export const Card: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <View
      className="rounded-lg border-2 border-gray-500 mb-2 p-3 min-w-full"
      style={styles.card}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: height / 3,
  },
});
