import {Box, View} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';

const Moblie_pdf = () => {
  if (Platform.OS == 'web') {
    return <div>Web PDF</div>;
  }
  const Pdf = require('react-native-pdf').default;
  const source = {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    cache: true,
  };
  return (
    <Box>
      <View h="100%" width={'100%'}>
        <Pdf
          trustAllCerts={false}
          source={source}
          onLoadComplete={(numberOfPages: any) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page: any) => {
            console.log(`Current page: ${page}`);
          }}
          onError={(error: any) => {
            console.log(error);
          }}
          onPressLink={(uri: any) => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={{width: '100%', height: '100%'}}
        />
      </View>
    </Box>
  );
};

export default Moblie_pdf;
