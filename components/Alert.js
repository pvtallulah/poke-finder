import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import PropTypes from 'prop-types';

const Alert = ({isAlertVisible, setIsAlertVisible, message, title}) => {
  return (
    <Modal animationType="slide" visible={isAlertVisible} transparent={true}>
      <View style={[styles.modalContainer]}>
        <View style={styles.modalView}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.message}>{message}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => setIsAlertVisible(false)}>
              <Text style={styles.okBtn}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

Alert.propTypes = {
  isAlertVisible: PropTypes.bool.isRequired,
  setIsAlertVisible: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
};

Alert.defaultProps = {
  title: 'Pokefinder',
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: '10%',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 0,
    padding: 35,
    alignItems: 'center',
    maxWidth: '90%',
    minWidth: '90%',
  },
  titleContainer: {
    width: '100%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 15,
  },
  messageContainer: {
    width: '100%',
    marginBottom: 15,
  },
  message: {
    fontSize: 20,
    textAlign: 'left',
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  okBtn: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    backgroundColor: 'green',
    borderWidth: 1,
    width: 150,
    marginRight: 15,
    height: 35,
    lineHeight: 35,
  },
});

export default Alert;
