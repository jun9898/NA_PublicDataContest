import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {theme} from "../../color";
import {useNavigation} from "@react-navigation/native";
import {Fontisto} from "@expo/vector-icons";

const BoardRead = ({ id, title, like, check }) => {

    const navigation = useNavigation();

    return (

        <TouchableOpacity
            onPress={() => navigation.navigate('BoardDetail', {id : id})}
        >
            <View style={styles.frame}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> {title} </Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.bottomBtn}>
                        <View style={styles.likeEmojiContainer}>
                            <Fontisto
                                name={"like"}
                                size={15}
                                color={"white"}
                            />
                            <Text style={styles.bottomBtnText}>{like}</Text>
                        </View>
                        <View style={check === "NONE" ? styles.checkContainer : {...styles.checkContainer, backgroundColor: theme.skyblue}}/>
                        </View>
                    </View>
                </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    frame: {
        marginBottom: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        backgroundColor: theme.whiteBlue,
        borderRadius: 20,
        padding: 15,
    },
    titleContainer: {
        flex: 2,
        justifyContent: "center"
    },
    title: {
        fontSize: 16,
        color: "#333",
        fontWeight: "700",
    },
    detail: {
        fontSize: 18,
        color: "#333",
        fontWeight: "500",
    },
    form: {
        marginLeft: 10,
        flex: 1,
        justifyContent: "center",
    },
    bottomBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bottomBtnText: {
        marginLeft: 4,
        color: "white",
    },
    likeEmoji: {
    },
    likeEmojiContainer: {
        flexDirection: "row",
        backgroundColor: theme.skyblue,
        padding: 8,
        borderRadius: 10,
    },
    checkContainer: {
        borderRadius: 10,
        borderWidth: 3,
        borderColor: theme.skyblue,
        backgroundColor: "white",
        paddingHorizontal: 18,
    }

})


export default BoardRead;
