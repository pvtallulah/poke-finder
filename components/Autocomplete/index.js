import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

import Item from './Item';

const Autocomplete = ({showList, data, selected, query, noResultText}) => {
  const [filtredData, setFiltredData] = useState([]);

  useEffect(() => {
    if (query.length < 3) {
      setFiltredData([]);
    } else {
      const tmpData = [];
      data.forEach((itm) => {
        if (itm.name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
          tmpData.push(itm);
        }
      });
      setFiltredData(tmpData);
    }
  }, [query, data]);

  const renderItem = ({item}) => (
    <Item element={item} idKey="name" selected={selected} />
  );

  return (
    showList && (
      <View>
        {query.length < 3 ? (
          <Text>{noResultText}</Text>
        ) : (
          <FlatList
            data={filtredData}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            style={styles.list}
          />
        )}
      </View>
    )
  );
};

Autocomplete.prototype = {
  showList: PropTypes.bool,
  selected: PropTypes.func,
  query: PropTypes.string,
  noResultText: PropTypes.string,
};

Autocomplete.defaultProps = {
  showList: true,
  query: '',
  noResultText: 'No se encontraron elementos.',
};

const styles = StyleSheet.create({
  container: {},
  list: {
    backgroundColor: '#fff',
  },
  item: {
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    textTransform: 'capitalize',
  },
});

export default Autocomplete;
