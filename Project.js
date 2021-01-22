import * as React from 'react';
import { StatusBar,StyleSheet, Text,TextInput, View,TouchableOpacity,Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component{
  state = {
    inputValue:'',
    todos:[]
  }
  changeText = value => {
    this.setState({
      inputValue:value
    })
  }
  addItem = () =>{
    if (this.state.inputValue !=='') {
      this.setState(prevState => {
        const newToDo = {
          title: this.state.inputValue,
          createdAt:Date.now()
        };
        var todos = this.state.todos.concat(newToDo);
        this.setState({
          todos:todos
        });
      });
    }
};
removeItem = () =>{
    if (this.state.inputValue !=='') {
      this.setState(prevState => {
        const newToDo = {
          title: this.state.inputValue,
        
        };
        var todos = this.state.todos.concat(newToDo);
        this.setState({
          todos:todos
        });
      });
    }
};
 Button = ({ onPress, todos }) => (
  <TouchableOpacity onPress={onPress} style={styles.ButtonContainer}>
    <Text style={styles.ButtonText}>{todos}</Text>
  </TouchableOpacity>
);



  render(){
    const todos=this.state.todos.reverse().map((todo,key) =>
    <View style={{flexDirection:'row',marginTop:20}}>
    <TouchableOpacity style={{
        width:20,
        height:20,
        borderRadius:30,
        borderWidth:1,
        borderColor:'white',
        margin:15}}>
    </TouchableOpacity>
    <Text style={{textDecorationLine:'line-through',textDecorationStyle:'solid'}}>
  <Text style={{paddingleft:5,marginTop:10,fontSize:28,color:'white'}}onPress={()=>todos(todos)}> {todo.title}</Text>
</Text></View>
    );
    return (
      <LinearGradient colors={['#f05454', '#30475e']} style={{flex:1}}>
        <StatusBar barStyle="light-content"/><TextInput
      style={styles.input}
      onSubmitEditing={this.addItem}
      placeholder="Add your tasks"
      placeholderTextColor={'#2c061f'}
      autoCapitalize="sentences"
      returnKeyType="done"
      maxLength={30}
      multiline={true}
      value={this.state.inputValue}
      onChangeText={this.changeText}
      blurOnSubmit={true}
      />
      <View>
        {todos}{todos.removeItem}{<Button 
  title="Delete task"
  color="#03c6fc" style={styles.delbutton} ></Button>}
      {!!this.state.error && (
  <Text>
    Error message: {this.state.error}
  </Text>
)}
      
      
      </View>
      
      
    
    </LinearGradient>
    
  );
}

  }

  

const styles = StyleSheet.create(
      {
  input:
   {
    marginTop:30,
    paddingRight:15,
    paddingTop:10,
    paddingLeft:15,
    fontSize:34,
    color:'white',
    fontweight:'500'
  },
  ButtonContainer:
{
  elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12

},
ButtonText:
{
fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
}
}
) ;
