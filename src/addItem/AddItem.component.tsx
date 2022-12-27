import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet, Switch, Button } from 'react-native'
import { createEmptyItem, Item } from '../Item.interface'
import { AddItemProps } from './AddItem.interface'

const AddItem = ({ onPressButton }: AddItemProps) => {
    const [item, setItem] = useState<Item>(createEmptyItem())

    const handleOnChangeText = (key: keyof Item) => (text: 'string') => {
        setItem((prevItem) => ({ ...prevItem, [key]: text }))
    }

    const handleToggleSwitch = (value: boolean) => {
        if (value) {
            setItem((prevItem) => ({ ...prevItem, quantity: '100gr' }))
        } else {
            setItem((prevItem) => ({ ...prevItem, quantity: 'ud' }))
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text>Product name:</Text>
                <TextInput
                    style={styles.input}
                    value={item.name}
                    placeholder="Enter name"
                    onChangeText={handleOnChangeText('name')}
                />
            </View>

            <View style={styles.row}>
                <Text>Product kcal: </Text>
                <TextInput
                    style={styles.input}
                    value={item.kcal}
                    onChangeText={handleOnChangeText('kcal')}
                    placeholder="Enter kcal"
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.row}>
                <Text>ud</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={
                        Boolean(item.quantity === 'ud') ? '#f5dd4b' : '#f4f3f4'
                    }
                    onValueChange={handleToggleSwitch}
                    value={Boolean(item.quantity === '100gr')}
                />

                <Text>100gr</Text>
            </View>

            <View style={styles.button}>
                <Button
                    onPress={() => onPressButton(item)}
                    title="Add item"
                    color="#81b0ff"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        color: '#212121',
        width: '100%',
        padding: '5%',
    },
    row: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    switch: {
        flexDirection: 'row',
    },
    input: {
        padding: 5,
        border: '2px solid #212121',
        borderRadius: 5,
    },
    button: {
        alignSelf: 'center',
        width: 200,
    },
})

export default AddItem
