import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight+20,
        backgroundColor: '#233958'
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 270,
        height: 150
    },
    headerText:{
        fontSize: 15,
        color:'#fff',
    },
    headerTextBold:{
        fontWeight: 'bold',
    },
    title:{
        fontSize:30,
        marginBottom:16,
        marginTop:0,
        color: '#fff',
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#fff',
    },
    incidentList:{
        marginTop: 32,
    },
    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom:16,
    },
    incidentProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight:'bold',
    },
    incidentValue:{
        marginTop:8,
        fontSize:15,
        marginBottom:24,
        color:'#737380',
    },
    detailsButton:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsButtonText:{
        color: '#1e90ff',
        fontSize:15,
        fontWeight: 'bold',
    },
});