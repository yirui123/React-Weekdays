//import some code we need
var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;

// Create a react component
var DayItem = React.createClass ({
  render: function () {
    return <Text syle={styles.day}>
      A day of the week
    </Text>
  }
});

//Style the component
var styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#000FFF'
  }
});

// Make this code available elsewhere
module.exports = DayItem;
