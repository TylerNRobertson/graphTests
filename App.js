import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ART } from 'react-native'
import * as d3scale from 'd3-scale'
import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis, VictoryZoomContainer,  } from 'victory-native'
import GraphTheme from './GraphTheme'
const data = [ 3000, 200, 500, 900, 1500, 500 ]
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }
  componentWillMount() {
    this.prepData(data)
  }
  prepData(data) {
    let array = []
    let i = 0
    for (let item of data) {
      let x = i + 1
      i = x
      array.push({
        x: x,
        y: item
      })
    }
    this.setState({ data: array })
  }
  handleLayout(event) {
    width = event.nativeEvent.layout.width
    height = event.nativeEvent.layout.height
  }
  handleLabel(d) {
    if (d.y === 0) {
      return 'N/A'
    }
    return Math.floor((d.y / 60)) + 'mins'
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.bodyContainer}>
          <View style={styles.graphContainer} onLayout={(event) => this.handleLayout(event)}>
            <VictoryChart
              domain={{ x: [0, 6], y: [0, 3600]}}
              animate={{ duration: 500, easing: 'bounce' }}
              theme={GraphTheme}
              >
                <VictoryAxis
                  dependentAxis
                  tickValues={[0, 600, 1200, 1800, 2400, 3000, 3600]}
                  tickFormat={(t) => (t / 60) + 'm'}
                  orientation="right"
                />
                <VictoryBar
                  data={this.state.data}
                  barRatio={1}
                  x="x"
                  y="y"
                  alignment="start"
                />
                <VictoryAxis
                  crossAxis
                  tickValues={[0, 1, 2, 3, 4, 5, 6]}
                  tickFormat={(t) => t + 'h'}
                  invertAxis={true}
                />
              </VictoryChart>
            </View>
          </View>
        </View>
      )
    }

  }

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    bodyContainer: {
      flex: 1,
    },
    graphContainer: {
      flex: 1,
      alignItems: 'center',
    }
  });
