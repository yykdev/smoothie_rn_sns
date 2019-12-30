/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styled from 'styled-components/native';

const ScrollView = styled.ScrollView`
    background-color: ${Colors.lighter};
`;

const Body = styled.View`
    background-color: ${Colors.white};
`;

const SectionContainer = styled.View`
    margin-top: 32px;
    padding-horizontal: 24px;
`;

const SectionDescription = styled.Text`
    margin-top: 8px;
    font-size: 18px;
    font-weight: 400;
    color: ${Colors.dark};
`;

const HighLight = styled.Text`
    font-weight: 700;
`;

interface Props {}

const App = ({}: Props) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <Header />
                    <Body style={styles.body}>
                        <SectionContainer style={styles.sectionContainer}>
                            <SectionDescription style={styles.sectionTitle}>
                                Step One
                            </SectionDescription>
                            <SectionDescription
                                style={styles.sectionDescription}>
                                Edit{' '}
                                <HighLight style={styles.highlight}>
                                    App.js
                                </HighLight>{' '}
                                to change this screen and then come back to see
                                your edits.
                            </SectionDescription>
                        </SectionContainer>
                        <SectionContainer style={styles.sectionContainer}>
                            <SectionDescription style={styles.sectionTitle}>
                                See Your Changes
                            </SectionDescription>
                            <SectionDescription
                                style={styles.sectionDescription}>
                                <ReloadInstructions />
                            </SectionDescription>
                        </SectionContainer>
                        <SectionContainer style={styles.sectionContainer}>
                            <SectionDescription style={styles.sectionTitle}>
                                Debug
                            </SectionDescription>
                            <SectionDescription
                                style={styles.sectionDescription}>
                                <DebugInstructions />
                            </SectionDescription>
                        </SectionContainer>
                        <SectionContainer style={styles.sectionContainer}>
                            <SectionDescription style={styles.sectionTitle}>
                                Learn More
                            </SectionDescription>
                            <SectionDescription
                                style={styles.sectionDescription}>
                                Read the docs to discover what to do next:
                            </SectionDescription>
                        </SectionContainer>
                        <LearnMoreLinks />
                    </Body>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
