import React from 'react';
import {Modal, StyleSheet, View, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

const Loader = ({isLoaderVisible, size, color}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isLoaderVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <ActivityIndicator size={size} color={color} />
        </View>
      </View>
    </Modal>
  );
};

Loader.propTypes = {
  isLoaderVisible: PropTypes.bool.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

Loader.defaultProps = {
  size: 'large',
  color: 'gray',
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalView: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    width: '90%',
  },
});

export default Loader;
