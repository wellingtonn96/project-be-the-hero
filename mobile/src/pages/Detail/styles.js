import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: '#eeee',
  },
  header: {
    width: '100%',
    height: 60,
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
  },
  logoContent: {
    flex: 1,
  },
  headerTextContent: {
    display: 'flex',
    alignContent: 'center',
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#737380',
  },
  title: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 50,
    borderRadius: 8,
    color: '#737380',
  },
  incidentContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    borderRadius: 8,
    padding: 20,
    backgroundColor: '#fff',
  },
  incidentContent: {
    padding: 5,
    width: '50%',
  },
  incidentProperty: {
    fontWeight: 'bold',
    lineHeight: 25,
  },
  incidentValue: {
    color: '#aaa',
    fontWeight: 'bold',
  },
  detailsLink: {
    width: '100%',
  },
  navDethes: {
    color: 'red',
    marginTop: 20,
  },
  contactProperty: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactValue: {
    lineHeight: 40,
    fontWeight: 'bold',
    color: '#aaa',
  },
  action: {
    backgroundColor: '#e02041',
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginRight: 10,
  },
  actionText: {
    color: '#FFF',
    fontSize: 14,
  },
});
