import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Card = ({containerStyle, headerStyle, headerText, children}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.headerContainer, headerStyle]}>
        <Text style={[styles.header]}>{headerText}</Text>
      </View>
      {children}
    </View>
  );
};

Card.propTypes = {
  containerStyle: PropTypes.object,
  headerStyle: PropTypes.object,
  headerText: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

Card.defaultProps = {
  headerText: '',
  children: {},
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
  },
  headerContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
    backgroundColor: '#536D79',
    color: '#fff',
    textTransform: 'uppercase',
    width: '100%',
  },
  header: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    height: 30,
    lineHeight: 30,
  },
});

export default Card;
