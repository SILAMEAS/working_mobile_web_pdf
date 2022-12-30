import Moblie_pdf from '@src/components/compoents(ms)/moblie_componens/Moblie_pdf';
import Web_pdf from '@src/components/compoents(ms)/web_components/Web_pdf';
import React from 'react';
import {Platform} from 'react-native';
// import Web_pdf from '../../components/compoents(ms)/web/Web_pdf';
// import Moblie_pdf from '../../components/compoents(ms)/moblie_componens/Moblie_pdf';

const View_PDF = () => {
  return <>{Platform.OS === 'web' ? <Web_pdf /> : <Moblie_pdf />}</>;
};

export default View_PDF;
