import * as React from 'react';
import LottieView from 'lottie-react-native';


export default class Santaanimation extends React.Component{
    render(){
        return(
                <LottieView
                    source={require('../assets/review.json')}
                    style={{width:"60%",height:"60%",marginLeft:50}}
                    autoPlay loop
                />
        )
    }
}