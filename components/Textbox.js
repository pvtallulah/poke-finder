import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Textbox = ({
  onChange,
  forwardedRef,
  onBlur,
  onFocus,
  setValue,
  value,
  clearText,
}) => {
  const textHandler = (evt) => {
    const query = evt.nativeEvent.text;
    onChange(query);
    setValue(query);
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={forwardedRef}
        placeholder="Ingrese por lo menos 3 caracteres"
        onChange={textHandler}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.clearTextContainer} onPress={clearText}>
        <Text style={styles.clearText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

Textbox.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  forwardedRef: PropTypes.object,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  clearText: PropTypes.func,
};

Textbox.defaultProps = {
  placeholder: 'Escriba aquí',
  value: '',
  forwardedRef: {},
  textboxBlur: () => {},
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 0.5,
    height: 50,
    backgroundColor: '#fff',
  },
  textInput: {
    width: '94%',
    fontSize: 18,
  },
  clearTextContainer: {
    minWidth: 30,
    minHeight: 30,
    maxWidth: 30,
    maxHeight: 30,
    borderWidth: 1,
    borderRadius: 15,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  clearText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Textbox;
