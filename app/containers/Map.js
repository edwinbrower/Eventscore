import MapView from 'react-native-maps';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

class LocationMap extends Component {
  render() {
    const event = this.props.eventsReducers.currEvent;
    const LATITUDE = event.location.coordinates[1];
    const LONGITUDE = event.location.coordinates[0];
    const LATITUDE_DELTA = 0.01;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    let coords = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    };
    const TITLE = event.artists[0] ? event.artists[0].name : '';
    const DESCRIPTION = event.venue;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}

          provider={this.props.provider}

          // scrollEnabled={false}
          // zoomEnabled={false}
          // pitchEnabled={false}
          // rotateEnabled={false}

          initialRegion={coords}
        >
          <MapView.Marker
            title={TITLE}
            description={DESCRIPTION}
            coordinate={coords}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // marginTop: 50,
    alignItems: 'center',
    // backgroundColor: 'gold',
    // justifyContent: 'center',
  },
  // container: {
  //   ...StyleSheet.absoluteFillObject,
  //   // justifyContent: 'flex-end',
  //   alignItems: 'center',
  // },
  scrollview: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  map: {
    width: width,
    height: 150,
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

// export default EventView;
export default connect(({routes, eventsReducers}) => { return {routes, eventsReducers} }, mapDispatchToProps)(LocationMap);