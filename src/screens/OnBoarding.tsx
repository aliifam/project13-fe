import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

const OnBoarding = () => {
  const transitionRef = useRef(new Animated.Value(0));
  const [currentPage, setCurrentPage] = React.useState(0);

  const handleNext = () => {
    if (currentPage < 2) {
      Animated.timing(transitionRef.current, {
        toValue: (currentPage + 1) * -width,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setCurrentPage(currentPage + 1);
      });
    } else if (currentPage === 2) {
      // Handle "Get Started" action
      console.log('Get Started');
    } else {
      // Handle "Welcome to the App" screen
      Animated.timing(transitionRef.current, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setCurrentPage(0);
      });
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      Animated.timing(transitionRef.current, {
        toValue: (currentPage - 1) * -width,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setCurrentPage(currentPage - 1);
      });
    }
  };

  const handleDotPress = index => {
    Animated.timing(transitionRef.current, {
      toValue: index * -width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setCurrentPage(index);
    });
  };

  const renderContent = () => {
    const content = [
      {
        title: 'Welcome to the App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        title: 'Explore Features',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        title: 'Get Started',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
    ];

    const transitionStyle = {
      transform: [{translateX: transitionRef.current}],
    };

    return (
      <Animated.View style={[styles.contentContainer, transitionStyle]}>
        {content.map((item, index) => (
          <View key={index} style={styles.contentItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </Animated.View>
    );
  };

  const renderProgressIndicator = () => {
    return (
      <View style={styles.progressContainer}>
        {[...Array(3)].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.progressDot,
              index === currentPage && styles.activeDot,
            ]}
            onPress={() => handleDotPress(index)}
          />
        ))}
      </View>
    );
  };

  const renderButtons = () => {
    const isLastScreen = currentPage === 2;

    return (
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            styles.previousButton,
            currentPage === 0 && styles.disabledButton,
          ]}
          onPress={handlePrevious}
          disabled={currentPage === 0}>
          <Text style={[styles.buttonText, styles.previousButtonText]}>
            Previous
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, isLastScreen && styles.getStartedButton]}
          onPress={handleNext}>
          <Text
            style={[
              styles.buttonText,
              isLastScreen && styles.getStartedButtonText,
            ]}>
            {isLastScreen ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>{renderContent()}</View>
      <View style={styles.bottomContainer}>
        {renderProgressIndicator()}
        {renderButtons()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    width: width * 3,
  },
  contentItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#999',
  },
  bottomContainer: {
    paddingBottom: 30,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previousButton: {
    backgroundColor: '#ccc',
  },
  disabledButton: {
    opacity: 0.5,
  },
  previousButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  getStartedButton: {
    backgroundColor: '#ff5a5f',
  },
  getStartedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnBoarding;
