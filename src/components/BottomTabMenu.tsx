import {View, Text} from 'react-native';
import React from 'react';

interface BottomTabMenuProps {
  label: string;
  isFocused: boolean;
  onLongPress: () => void;
  onPress: () => void;
}

const BottomTabMenu = ({
  label,
  isFocused,
  onLongPress,
  onPress,
}: BottomTabMenuProps) => {
  return (
    <View>
      <Text>BottomTabMenu</Text>
    </View>
  );
};

export default BottomTabMenu;
