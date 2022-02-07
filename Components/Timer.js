// import React from 'react';
// import { StyleSheet, View, Button, Vibration, TextInput, Text} from 'react-native';

// import Counter from './renderTimer';
// import Header from './Header';

// const WORK = 25*60;
// const BREAK = 5*60;

// export default class Timer extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             WorkTime: 0,
//             BreakTime: 0,
//             workCount: WORK,
//             breakCount: BREAK,
//             running: false,
//             working: true,
//             now: WORK,
//             interval: null,
//         }
//     }

//     decrementWork = () => {
//         this.setState(prevState => ({
//             workCount: prevState.workCount - 1,
//             now: prevState.workCount - 1,
//         }))

//         if (this.state.now === 0){
//             Vibration.vibrate([500, 500, 500])
//         }

//         if(this.state.workCount <= 0){
//             this.setState({
//                 breakCount: BREAK + 1,
//                 working: false,
//             })
//         }
//     }



//     decrementBreak = () => {
//         this.setState(prevState => ({
//             breakCount: prevState.breakCount - 1,
//             now: prevState.breakCount - 1,
//         }))

//         if(this.state.now === 0){
//             Vibration.vibrate([500, 500, 500])
//         }

//         if(this.state.breakCount <= 0){
//             this.setState({
//                 workCount: WORK + 1,
//                 working: truem
//             })
//         }
//     }


//     startCounter = () => {
//         this.setState({
//             running: true,
//             interval: setInterval(() => {
//                 this.state.working ? this.decrementWork() : this.decrementBreak()
//             }, 1000),
//         })
//     }


//     restartCounter = () => {
//         if(this.state.working){
//             this.setState({
//                 workCount: WORK,
//                 now: WORK,
//             })
//         }else {
//             this.setState({
//                 breakCount: BREAK,
//                 now: BREAK,
//             })
//         }
//     }


//     stopCounter = () => {
//         clearInterval(this.state.interval)
//         this.setState({
//             running: false,
//         })
//     }


//     switchCounter = () => {
//         if(this.state.working){
//             this.setState({
//                 working: false,
//                 breakCount: BREAK,
//                 now: BREAK,
//             })
//         } else {
//             this.setState({
//                 working: true,
//                 workCount: WORK,
//                 now: WORK,
//             })
//         }
//     }


//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={{fontSize: 30, marginBottom: 15}}>Set Timer</Text>
//                 {/* <Header working = {this.state.working} /> */}
//                 {/* <Counter count={this.state.now} /> */}

//                 <View style = {{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
//                     <TextInput keyboardType='numeric' style = {{borderColor:'#000', width:50, backgroundColor:'#D3D3D3', borderRadius: 5}} />
//                     <Text style = {{marginLeft: 5}}>Work Time</Text>
//                 </View>
//                 <View style = {{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
//                     <TextInput keyboardType='numeric' style = {{borderColor:'#000', width:50, backgroundColor:'#D3D3D3', borderRadius: 5}} />
//                     <Text style = {{marginLeft: 5}}>Break Time</Text>
//                 </View>

//                 <View style = {styles.buttonsContainer}>
//                     {this.state.running ? 
//                         <View style={styles.button}>
//                             <Button title = 'Pause' onPress={this.stopCounter} color='black' />
//                         </View>
//                         :
//                         <View style={styles.button}>
//                             <Button title = 'Start' onPress={{...this.startCounter, ...this.closeModal}} color='black' />
//                         </View>                     
//                     }

//                     {/* <View style={styles.button}>
//                         <Button title="Restart" onPress={this.restartCounter} color = 'black' />
//                     </View> */}

//                     {/* <View style={styles.button}>
//                         <Button title="Switch" onPress={this.switchCounter} color = 'black' />
//                     </View> */}
//                 </View>
//             </View>
//         )
//     }

// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     buttonsContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     button: {
//         padding: 15,
//         width: 105,
//         height: 80,
//     },
// });













import React from 'react';
import { StyleSheet, View, Button, Vibration, TextInput, Text} from 'react-native';

import Counter from './renderTimer';
import Header from './Header';

let WORK = 1;
let BREAK = 0;

export default class Timer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            workCount: WORK,
            breakCount: BREAK,
            running: false,
            working: true,
            now: WORK,
            interval: null,
        }
    }

    decrementWork = () => {
        this.setState(prevState => ({
            workCount: prevState.workCount - 1,
            now: prevState.workCount - 1,
        }))

        if (this.state.now === 0){
            Vibration.vibrate([500, 500, 500])
        }

        if(this.state.workCount <= 0){
            this.setState({
                breakCount: BREAK + 1,
                working: false,
            })
        }
    }



    decrementBreak = () => {
        this.setState(prevState => ({
            breakCount: prevState.breakCount - 1,
            now: prevState.breakCount - 1,
        }))

        if(this.state.now === 0){
            Vibration.vibrate([500, 500, 500])
        }

        if(this.state.breakCount <= 0){
            this.setState({
                workCount: WORK + 1,
                working: true
            })
        }
    }


    startCounter = () => {
        this.setState({
            running: true,
            interval: setInterval(() => {
                this.state.working ? this.decrementWork() : this.decrementBreak()
            }, 1000),
        })
    }

    restartCounter = () => {
        if(this.state.working){
            this.setState({
                workCount: WORK,
                now: WORK,
            })
        }else {
            this.setState({
                breakCount: BREAK,
                now: BREAK,
            })
        }
    }


    stopCounter = () => {
        clearInterval(this.state.interval)
        this.setState({
            running: false,
        })
    }


    switchCounter = () => {
        if(this.state.working){
            this.setState({
                working: false,
                breakCount: BREAK,
                now: BREAK,
            })
        } else {
            this.setState({
                working: true,
                workCount: WORK,
                now: WORK,
            })
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Header working = {this.state.working} />
                <Counter count={this.state.now} />

                <View style = {styles.TimerInputContainer}>
                    <TextInput keyboardType='numeric' 
                        style = {styles.TimerInput} 
                        onChangeText={text => {WORK = parseInt(text)*60}} />
                    <Text style = {{marginLeft: 5}}>Work Time</Text>
                </View>
                <View style = {styles.TimerInputContainer}>
                    <TextInput keyboardType='numeric' 
                        style = {styles.TimerInput} 
                        onChangeText={text => {BREAK = parseInt(text)*60}} />
                    <Text style = {{marginLeft: 5}}>Break Time</Text>
                </View>

                <View style = {styles.buttonsContainer}>
                    {this.state.running ? 
                        <View style={styles.button}>
                            <Button title = 'Pause' onPress={this.stopCounter} color='black' />
                        </View>
                        :
                        <View style={styles.button}>
                            <Button title = 'Start' onPress={this.startCounter} color='black' />
                        </View>                     
                        // :
                        // <View style={styles.button}>
                        //     <Button title = 'Start' onPress={this.startCounter} color='black' />
                        // </View>                     
                    }

                    <View style={styles.button}>
                        <Button title="Restart" onPress={this.restartCounter} color = 'black' />
                    </View>

                    <View style={styles.button}>
                        <Button title="Switch" onPress={this.switchCounter} color = 'black' />
                    </View>
                </View>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        padding: 15,
        width: 105,
        height: 80,
    },
    TimerInputContainer: {
        flexDirection: 'row', 
        marginTop: 10
    },
    TimerInput: {
        borderColor: '#000', 
        width: 50, 
        backgroundColor: '#D3D3D3', 
        borderRadius: 5,
        paddingLeft: 10
    }
});



















// import React from "react";
// import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from "react-native";
// import renderTimer from './renderTimer';

// let WorkTimerMinutes = 25;
// let BreakTimerMinutes = 5;

// const minToSeconds = mins => mins * 60;
// const nextTimer = {Work: 'break', break: 'work'};

// const Countdown = props => {
//     const totalSecs = Math.round(props.timeRemaining/1000);
//     const mins = Math.floor(totalSecs/60);
//     const secs = totalSecs % 60;
//     const Zero = secs < 10 ? '0': '';
//     return(
//         <Text style={props.style}>{mins}:{Zero}{secs}</Text>
//     );
// };

// const TimerToggleBTN = props => {
//     const title = props.isRunning ? 'PAUSE':'START';
//     return (
//         <TouchableOpacity onPress={props.onToggle} style={StyleSheet.opaButton}>
//             <Text style={StyleSheet.opaText}>{title}</Text>
//         </TouchableOpacity>
//     );
// };

// export default class App extends React.Component {
//     state = {
//         workTimeInSeconds: minToSeconds(WorkTimerMinutes),
//         breakTimeInSeconds: minToSeconds(BreakTimerMinutes),
//         timeRemaining: minToSeconds(WorkTimerMinutes) * 1000,
//         isRunning: false,
//         activeTimer: 'work',
//     };

//     componentDidMount() {
//         this.timer = new TimerToggleBTN(
//             this.state.timeRemaining,
//             this.onTickUpdate,
//             this.onTickEnd
//         );
//         this.setState({isRunning: this.timer.isRunning});
//     }

//     onTickUpdate = timeRemaining => {
//         this.setState({timeRemaining});
//     };

//     restartTimer = () => {
//         console.log('onTickEnd: Start next timer ...');
//         const {activeTimer} = this.state;
//         const duration = this.state[`${activeTimer}TimeInSeconds`] * 1000;
//         this.setState({timeRemaining: duration});
//         this.timer.restart(duration);
//         this.setState({isRunning: this.timer.isRunning});
//     };
     
//     resetTimer = () => {
//         console.log('RESET TIMER!');
//         this.setState({activeTimer: 'work'});
//         const duration = this.state.workTimeInSeconds * 1000;
//         this.setState({timeRemaining: duration});
//         this.timer.restart(duration);
//         this.setState({isRunning: this.timer.isRunning});
//     };

//     onTickEnd = () => {
//         console.log('onTickEnd: changing timer!');
//         this.setState(prevState => ({
//             activeTimer: nextTimer[prevState.activeTimer]
//         }));
//         this.restartTimer();
//     };

//     setWorkTime = minStr => {
//         console.log('setWorkTime in Minutes: '+minStr);
//         WorkTimerMinutes = minStr * 1;
//         this.setState({workTimeInSeconds: minToSeconds(WorkTimerMinutes)});
//     };
    
//     setBreakTime = minStr => {
//         console.log('setBreakTime in Minutes: '+minStr);
//         BreakTimerMinutes = minStr * 1;
//         this.setState({breakTimeInSeconds: minToSeconds(BreakTimerMinutes)});
//     };

//     toggleTimer = () => {
//         console.log('toggleTimer ....');
//         if(this.timer.isRunning) this.timer.stop();
//         else this.timer.start();

//         this.setState({isRunning: this.timer.isRunning});
//     };
     
//     render() {
//         return (
//             <View style = {Styles.container}>
//                 <View style = {Styles.topContainer} />
//                 <View style = {Styles.textContainer}>
//                     <Text style = {Styles.headerText}>
//                         {this.state.activeTimer.toUpperCase()} TIMER
//                     </Text>
//                     <Countdown style={Styles.headerText} timeRemaining ={this.state.timeRemaining} />
//                 </View>
//                 <View style={Styles.buttonContainer}>
//                     <TimerToggleBTN onToggle={this.toggleTimer} isRunning = {this.state.isRunning} />
//                     <TouchableOpacity onPress={this.resetTimer} style={Styles.opaButton}>
//                         <Text style={Styles.opaText}>RESET</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style = {Styles.inputContainer}>
//                     <View>
//                         <Text style = {Styles.bold}>Work Timer Setup:</Text>
//                         <View style = {Styles.inputContainer}>
//                             <TextInput defaultValue={WorkTimerMinutes.toString()} style={Styles.input} keyboardType="numeric" onChangeText={this.setWorkTime} />
//                             <Text>minutes</Text>
//                         </View>
//                     </View>
//                 </View>

//                 <View style = {Styles.inputContainer}>
//                     <View>
//                         <Text style = {Styles.bold}>Break Timer Setup:</Text>
//                         <View style = {Styles.inputContainer}>
//                             <TextInput defaultValue={BreakTimerMinutes.toString()} style={Styles.input} keyboardType="numeric" onChangeText={this.setBreakTime} />
//                             <Text>minutes</Text>
//                         </View>
//                     </View>
//                 </View>

//             </View>
//         )
//     }

// }

// const Styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f2f209'
//     },
//     topContainer: {
//         flex: 2,
//     },
//     textContainer: {
//         flex: 2,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     bottomCOntainer: {
//         flex: 5
//     },
//     headerText: {
//         color: '#0909F2',
//         fontSize: 35,
//         padding: 35
//     },
//     buttonContainer: {
//         flex: 2,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between'
//     },
//     button: {
//         padding: 20,
//         marginRight: 20,
//         paddingHorizontal: 20,
//         borderColor: 'black',
//         backgroundColor: "#E91E63",
//         borderWidth: 20
//     },
//     opaButton: {
//         backgroundColor: 'E91E63',
//         width: 90,
//         height: 90,
//         borderRadius: 50,
//         alignItems: 'center',
//         justifyContent: 'center',
//         elevation: 8
//     },
//     opaText: {
//         color: '#fff',
//         fontSize: 24
//     },
//     inputContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     inputControl: {
//         flexDirection: 'row',
//         marginLeft: 'auto',
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: 'black',
//         marginRight: 10,
//         paddingHorizontal: 5,
//         minWidth: 50
//     },
//     bold: {
//         fontWeight: 'bold'
//     }
// });
