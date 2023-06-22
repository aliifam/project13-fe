import {View, Text} from 'react-native';
import {useState} from 'react';

const onBoarding = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <View>
      <Text>onBoarding</Text>
    </View>
  );
};

export default onBoarding;
