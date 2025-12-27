import { AppleAuthButton } from '@/app/components/AppleAuthButton'
import { GoogleAuthButton } from '@/app/components/GoogleAuthButton'
import { SmoothInfiniteScroll } from '@/app/components/SmoothInfiniteScroll'
import { Fonts } from '@/constants/theme'
import { LinearGradient } from 'expo-linear-gradient'
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

export default function Index() {
  const openWebBrowser = () => {
    Linking.openURL('https://galaxies.dev')
  }
  return (
    <View style={styles.container}>
      {/* Smooth Infinite Scroll Component */}
      <View style={styles.infinitescroll}>
        <View>
          <SmoothInfiniteScroll iconSet='set1' scrollDirection='down' />
        </View>
        <View>
          <SmoothInfiniteScroll iconSet='set2' scrollDirection='up' />
        </View>
        <View>
          <SmoothInfiniteScroll iconSet='set3' scrollDirection='down' />
        </View>
        <LinearGradient
          colors={['transparent', '#fff']}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 200,
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require('@/assets/images/wolt-logo.png')}
          style={styles.brandLogo}
        />
        <Animated.Text entering={FadeInDown} style={styles.tagline}>
          Almost everything delivered
        </Animated.Text>
        {/* Login Buttons */}
        <View style={styles.buttonContainer}>
          <Animated.View entering={FadeInDown.delay(100)}>
            <AppleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200)}>
            <GoogleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(300)}>
            <TouchableOpacity style={styles.otherButton}>
              <Text style={styles.otherButtonText}>Other options</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
        <Animated.View
          style={styles.privacyContainer}
          entering={FadeInDown.delay(400)}
        >
          <Text style={styles.privacyText}>
            Please visit{' '}
            <Text style={styles.privacyLink} onPress={openWebBrowser}>
              Wolt Privacy Statement
            </Text>{' '}
            to learn about personal data processing at Wolt.
          </Text>
        </Animated.View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  brandLogo: {
    width: 180,
    height: 48,
    resizeMode: 'contain',
    marginBottom: 16,
    marginTop: 16,
  },
  infinitescroll: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch', // ❗ IMPORTANT
    paddingHorizontal: 16,
    overflow: 'hidden',
  },
  tagline: {
    fontSize: 24,
    fontFamily: Fonts.brandBlack,
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 30,
  },
  buttonContainer: {
    width: '100%',
    // alignItems: "center",
    gap: 12,
    marginTop: 20,
  },
  otherButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    paddingHorizontal: 52,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otherButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  privacyContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  privacyText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    lineHeight: 18,
  },
  privacyLink: {
    color: '#4285F4',
    textDecorationLine: 'underline',
  },
})
