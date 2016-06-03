//import some code we need
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');

var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Create a react component
var Weekdays = React.createClass ({
  render: function () {
    return <View style={styles.container}>
      <Text style={styles.textStyle}>
        Days of the week:
      </Text>
      <DayItem />
    </View>
  }
});

//Style the react component
var styles = StyleSheet.create({
  container: {
    flex: 1, // height 100% width 100%
    flexDirection: 'column',
    justifyContent: 'center', // move stuff height(column) or width(row) wise depends on flexDirection
    alignItems: 'center' // the opposite of justifyContent
  }
});

// show the react component on the screen
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays
});
