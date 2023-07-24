import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#6CD4FF',
    width: '100%',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  navTxt: {
    marginTop: 30,
    paddingLeft: 20,
  },
  imgLittleLogo: {
    width: 50,
    height: 50,
    // position: 'absolute',
    // right: 0,
    // top: 0,
    marginTop: 30,
    marginEnd: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtLevel: { fontSize: 17, paddingTop: 10, paddingLeft: 2 },

  ralewayExtraBold: {
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'Raleway-ExtraBold',
  },
  difficulty: {
    fontSize: 17,
    textTransform: 'uppercase',
    fontWeight: '700',
    color: '#FABC3C',
  },
  scores: {
    padding: 20,
    fontSize: 16,
    fontFamily: 'Raleway-ExtraBold',
    color: '#FABC3C',
  },
  txtAnswers: {
    fontSize: 18,
    color: '#574D68',
    fontFamily: 'Raleway-ExtraBold',
  },
  queContainer: {
    borderRadius: 15,
    padding: 10,
    marginVertical: 12,
    fontSize: 22,
    backgroundColor: '#CDC1FF',
  },
  queBody: { paddingLeft: 20, fontSize: 20, fontFamily: 'Raleway-Medium' },

  progressView: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 10,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 10,
  },
  progressTxt: {
    backgroundColor: '#ffc08c',
    borderRadius: 10,
    position: 'absolute',
    left: 0,
    height: 10,
    right: 0,
    marginTop: 15,
  },
  safeAreaResultsScreen: {
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  navBarScreenResults: {
    width: '100%',
    borderRadius: 15,
    height: '10%',
    justifyContent: 'center',
  },

  colorGreat: { backgroundColor: '#6BD425' },

  colorFailed: { backgroundColor: 'red' },

  queAnsweredContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  queAnswered: {
    fontFamily: 'Raleway-Regular',
    color: '#F2E9DC',
    fontSize: 19,
    fontWeight: '650',
  },
  jobTxt: {
    fontSize: 60,
    textAlign: 'center',
    fontWeight: '600',
  },

  logoResultsContainer: {
    width: '100%',
    height: '65%',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgLogoResults: {
    width: '90%',
    marginTop: '10%',
    marginLeft: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerContainer: {
    // alignContent: 'center',
    // justifyContent: 'center',
    backgroundColor: '#ffff',
    width: 99,
    height: 99,
    borderRadius: 99 / 2,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#1282A2',
    padding: 5,
  },
  txtTimer: {
    textAlign: 'center',
    color: '#1282A2',
    fontSize: 40,
    fontWeight: '450',
    width: '100%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default styles;
