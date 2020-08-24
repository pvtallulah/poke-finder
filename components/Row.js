import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Row = ({children, containerStyle}) => {
  return <View style={[styles.rowContainer, containerStyle]}>{children}</View>;
};

Row.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Row.defaultProps = {};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    minHeight: 30,
    maxHeight: 30,
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default Row;
