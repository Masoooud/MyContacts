import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import ContactRow from '@components/contactRow';
import Layout from '@components/common/layout';
import { getContacts } from '@services/contacts';
import ListSeperator from '@components/common/listSeperator';
import { Spacing } from '@styles';

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
    if (res !== undefined) {
      setRefreshing(false);
      setContacts(contacts.concat(res));
    }
  }

  useEffect(() => {
    getAllContacts();
  }, []);

  const onEndReached = () => {
    if (!onEndReachedCalledDuringMomentum) {
      setOnEndReachedCalledDuringMomentum(true);
      setPage(page + 1);
      getAllContacts();
    }
  };

  const ListEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={{ alignSelf: 'center' }}>No contants Available</Text>
    </View>
  );

  return (
    <Layout header={{ title: 'Contacts' }}>
      <FlatList
        data={contacts}
        renderItem={({ item, index }) => (
          <ContactRow data={item} navigation={navigation} />
        )}
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
        ListEmptyComponent={() => <ListEmpty />}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#f1f1f1',
  },
  emptyContainer: {
    marginTop: '20%',
    padding: Spacing.SCALE_16,
  },
});

export default ContactsListScreen;
