import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { getMeetsByStudents } from '../../services/meetings.service';

function AgendaComponent() {
    const [meets, setMeets] = useState({});
    async function loadData() {
        try {
            // TODO: Get the logged user id
            const data = await getMeetsByStudents("65c631fb63500cdc729300e0");
            setMeets(data);
        } catch (error) {
            console.error("Error fetching meets:", error);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <Agenda
            futureScrollRange={50}
            selected="2024-03-01"
            theme={{
                // agendaDayTextColor: 'yellow',
                // agendaDayNumColor: 'green',
                // agendaTodayColor: 'red',
                // agendaKnobColor: 'blue'
            }}
            hideKnob={false}
            showClosingKnob={true}
            onCalendarToggled={calendarOpened => {
                console.log("calendarOpened");
            }}
            items={meets}
            renderItem={(item, isFirst) => (
                <TouchableOpacity onPress={(e) => { console.log(item) }}>
                    <View style={styles.item}>
                        <View>
                            <Text >{item["title"] || "No Title"}</Text>
                            <Text style={styles.itemText}>{item.professorId.fullName}</Text>
                        </View>
                        <Image style={{ width: 50, height: 50 }} source={require('../../assets/images/image.jpg')} />
                    </View>
                </TouchableOpacity>
            )}
            renderEmptyData={() => {
                return <View style={styles.item}>
                    <Text style={styles.itemText}>{"there is nothing to render here"}</Text>
                    <Image style={{ width: 50, height: 50 }} source={require('../../assets/images/image.jpg')} />
                </View>;
            }}
        />
    );
}

export default AgendaComponent;

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
});
