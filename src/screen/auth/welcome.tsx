import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// Define the stack parameter list
type RootStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
};

// Define props type for the screen
type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC<Props> = ({navigation}) => {
  const handleGetStarted = () => {
    console.log('navigating to signup');
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.gradientBackground}>
        <Image
          source={require('../../utils/assets/tropical-fruits-pattern.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.whiteBox}>
        <View style={styles.textContainer}>
          <View style={styles.MainText}>
            <Text style={styles.mainText}>The King of Fruits</Text>
            <Text style={[styles.mainText, styles.highlightText]}>
              Kesar Mango
            </Text>
            <Text style={styles.mainText}>for a perfect summer.</Text>
          </View>
          <Text style={styles.subText}>
            Relish the richness of Kesar Mango, a summer delight with its
            unmatched sweetness.
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradientBackground: {
    flex: 1,
    backgroundColor: '#FF7E5F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 500,
    height: 1000,
  },
  whiteBox: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 400,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
    zIndex: 1,
    elevation: 5,
  },
  MainText: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  mainText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  highlightText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF7E5F',
    textAlign: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  subText: {
    width: 300,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20,
  },
  button: {
    width: '70%',
    marginTop: 20,
    backgroundColor: '#FF7E5F',
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
