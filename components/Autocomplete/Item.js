import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Item = ({element, selected, idKey}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          selected(element);
        }}>
        <Text style={styles.title}>{element[idKey]}</Text>
      </TouchableOpacity>
    </View>
  );
};

Item.prototype = {
  title: PropTypes.string,
  selected: PropTypes.func,
  idKey: PropTypes.string,
  idDesc: PropTypes.string,
};

Item.defaultProps = {
  title: '',
  idKey: 'id',
};

const styles = StyleSheet.create({
  item: {
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    textTransform: 'capitalize',
  },
});

export default Item;
