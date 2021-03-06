import React from 'react'
import {
  StyleSheet,
  View,
  Modal,
} from 'react-native'
import LottieView from 'lottie-react-native'

const file = require('../../assets/animations/loader.json')

// Loader function using lottie-react-native
const Loader = props => {
  const { loading } = props
  return (
    <Modal
      transparent
      animationType='none'
      visible={!!loading}
      onRequestClose={() => { console.log('close modal') }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <LottieView
            style={{ width: 200, height: 200 }}
            source={file}
            autoPlay={!!loading}
            loop
          />
        </View>
      </View>
    </Modal>
  )
}

export default Loader

const styles = StyleSheet.create({
  activityIndicatorWrapper: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-around'
  },
  modalBackground: {
    alignItems: 'center',
    backgroundColor: '#00000040',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
})
