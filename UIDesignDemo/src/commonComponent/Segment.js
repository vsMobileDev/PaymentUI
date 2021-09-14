/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

const Segment = (props) => {
    const [view, setView] = useState('A')


    return (

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 24 }}>
            <TouchableOpacity style={{ marginLeft: 38 }} onPress={() => {
                setView('A')
                props.onItemPress('A')
            }}>
                <Text style={styles.textColor}>Best Offers for You</Text>
                {
                    view == 'A' && (
                        <View style={styles.bottomLine}>
                        </View>
                    )
                }
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 24 }} onPress={() => {
                setView('B')
                props.onItemPress('B')
            }}>
                <Text>Popular</Text>
                {
                    view == 'B' && (
                        <View style={styles.bottomLine}>
                        </View>
                    )
                }
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 24 }} onPress={() => {
                setView('C')
                props.onItemPress('C')
            }}>
                <Text>Special Recharge</Text>
                {
                    view == 'C' && (
                        <View style={styles.bottomLine}>
                        </View>
                    )
                }
            </TouchableOpacity>
            <TouchableOpacity style={styles.topRechargeBtbStyle} onPress={() => {
                setView('D')
                props.onItemPress('D')
            }}>
                <Text>Top Recharge</Text>
                {
                    view == 'D' && (
                        <View style={styles.bottomLine}>
                        </View>
                    )
                }
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    textColor: {
        color: 'rgba(38, 50, 56, 0.9)',
        fontSize: 16
    },
    topRechargeBtbStyle: {
        marginLeft: 24,
        marginRight: 38
    },
    bottomLine:{
        backgroundColor: '#F1800D', 
        height: 3, 
        marginTop: 7
    }
});
export default Segment;
