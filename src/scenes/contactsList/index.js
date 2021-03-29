import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import ContactRow from '@components/contactRow';
import Layout from '@components/common/layout';
import { getContacts } from '@services/contacts';
import ListSeperator from '@components/common/listSeperator';

const ContactsListScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [page, setPage] = useState(1);
  const [contacts, setContacts] = useState([]);
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);

  async function getAllContacts() {
    const res = await getContacts(page);
    console.log({ res });
    setContacts(contacts.concat(res));
  }

  useEffect(() => {
    getAllContacts();
  }, []);

  const onEndReached = () => {
    if (!onEndReachedCalledDuringMomentum) {
      setOnEndReachedCalledDuringMomentum(true);
      console.log('onEndReached');
      setPage(page + 1);
      getAllContacts();
    }
  };

  return (
    <Layout header={{ title: 'Contacts List' }}>
      <FlatList
        data={contacts}
        renderItem={({ item, index }) => ContactRow(item, navigation)}
        keyExtractor={(item, index) => `${item.id}${index}`}
        style={styles.list}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={() => {
          setOnEndReachedCalledDuringMomentum(false);
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getAllContacts} />
        }
        ItemSeparatorComponent={() => <ListSeperator />}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#f1f1f1',
  },
});

export default ContactsListScreen;
