import React from 'react';
import { StyleSheet, Text } from 'react-native';
import propTypes from 'prop-types';



const addZeroBeforeNumber = number => {
    if(number.toString().length < 2){
        return '0' + number
    }else{
        return number
    }
}


const Counter = props => {
    return (
        <Text style={StyleSheet.paragraph}>
            {addZeroBeforeNumber(Math.floor(props.count / 60))}:{addZeroBeforeNumber(props.count%60)}
        </Text>
    )
}


export default Counter

Counter.propType = {
    count: propTypes.number,
}

const styles = StyleSheet.create({
    paragraph: {
        fontSize: 42,
    }
})

















// import PropTypes from "prop-types";
// import TimerStack from "../Routes/TimerStack";

// export class render {
//     constructor(duration, onTick, onEnd) {
//         this.duration = duration;
//         this.onTick = onTick;
//         this.onEnd = onEnd;
//         this.endTime = Date.now() + duration;
//         this.isTicking = false;
//     }

//     get timeRemaining() {
//         return this.endTime - Date.now();
//     }

//     get isRuning() {
//         return this.isTicking;
//     }

//     clearTick = () => {
//         clearTimeout(this.timeout);
//         this.timeout = null;
//     };

//     tick = () => {
//         if(this.endTIme < Date.now()) {
//             this.onTick(0);
//             this.onEnd();
//         } else {
//             this.onTick(this.timeRemaining);
//             const nextTick = this.timeRemaining % 1000;
//             this.timeOut = setTimeout(this.tick, nextTick);
//         }
//     };

//     stop = () => {
//         if (!this.isRunning) return;
//         this.clearTick();
//         this.duration = this.timeRemaining;
//         this.endTime = null;
//         this.isTicking = false;
//     };

//     start = () => {
//         if (this.isRuning) return;
//         this.endTime = Date.now() + this.duration;
//         this.tick();
//         this.isTicking = true;
//     }

//     restart = duration => {
//         if(this.isRunning) this.clearTick();
//         this.duration = duration;
//         this.endTime = Date.now() + this.duration;
//         this.tick();
//         this.isTicking = true;
//     };
// }

// Timer.PropTypes = {
//     duration: propTypes.number.isRequired,
//     onTick: propTypes.func.isRequired, 
//     onEnd: propTypes.func.isRequired, 
// };