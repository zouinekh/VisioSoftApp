import React from 'react'
import { Image, View } from 'react-native'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Agenda } from 'react-native-calendars'

function AgendaComponent() {
    return (
        <Agenda
            selected="2024-03-01"
            theme={{
                // agendaDayTextColor: 'yellow',
                // agendaDayNumColor: 'green',
                // agendaTodayColor: 'red',
                // agendaKnobColor: 'blue'
            }}
            hideKnob={false}
            showClosingKnob={true} // hedhy temchy bch tkhalik tchouf el button eli ynjm ysaker bih el calender yelz eli fou9ha false

            onCalendarToggled={calendarOpened => {
                console.log("calendarOpened");
            }}

            items={{
                '2024-03-01': [{ name: 'Cycling' }, { name: 'Walking' }, { name: 'Running' }],
                '2024-03-02': [{ name: 'Writing' }],
                '2024-03-04': [{ name: 'Writing' }],
                '2024-03-06': [{ name: 'Writing' }],
                '2024-03-12': [{ name: 'reading' }],
                '2024-03-11': [{ name: 'reading' }],
                '2024-03-10': [{ name: 'reading' }],
                '2024-03-06': [{ name: "jawha behy oun", color: 'blue', proffesor: "../../assets/images/image.jpg" }] //
            }}
            renderItem={(item, isFirst) => (
                <TouchableOpacity onPress={(e) => { console.log(item) }}>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Image style={{ width: 50, height: 50 }} source={require('../../assets/images/image.jpg')} />

                    </View>
                </TouchableOpacity>
            )}
        />)
}

export default AgendaComponent


const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    itemText: {
        color: '#888',
        fontSize: 16,
    }
})