import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import AddItem from './src/addItem/AddItem.component'

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Open up App.js to start working on your app!
            </Text>
            <AddItem onPressButton={console.log} />
            {/* <StatusBar style="auto" /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
})
