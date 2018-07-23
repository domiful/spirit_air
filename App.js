import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Linking, WebView } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text, Card, CardItem, Picker, Form, Tab, Tabs, Item, Label, Input, Subtitle } from 'native-base';
import Modal from 'react-native-modal';
import register from './actions/push';

var DeviceInfo = require('react-native-device-info');

export default class App extends React.Component {
  state = {
    isModalVisible: false,
    
  }

  openWallet(){
    Linking.openURL('https://ioswallet-gse00015026.uscom-east-1.oraclecloud.com/loadPass?gate=123&passenger=Saravana&date=8/23');
    this.setState({isModalVisible:false});
  }

  registerFlight(){
    let message =  {
                         "notificationToken": DeviceInfo.getUniqueID(),
                         "mobileClient": {
                             "id": "com.oraclecorp.internal.ent3.ocsnas.demo2",
                             "version": "1.0",
                             "platform": "IOS"
                         },
                         "notificationProvider":"APNS"
              };
    register(message);
  }
  render() {
    return (
      <Container>
        <Header hasTabs
          style={{backgroundColor:"#FDEB4F", height: 100}}>
          <Body>
          <Image
              style={{width: 200, height: 200}}
              source={{uri: 'https://www.seeklogo.net/wp-content/uploads/2016/11/spirit-airlines-logo-preview.png'}}
            />
          </Body>
        </Header>
        <Tabs
        tabBarPosition="overlayTop"
        >
        <Tab heading="Register">
          <ImageBackground
              source={{uri: 'https://art.pixilart.com/d1d83dba314e320.gif'}}
              style={{flex:1}}
            >
            <Content>
              <Card  style={{marginTop:50, marginLeft: 10, marginRight:10}}>
                <CardItem header>
                  <Body><Text>Flight</Text></Body>
                </CardItem>
                <CardItem button onPress={() => alert("This is Card Body")}>
                  <Body>
                  <Form>
                  <Picker
                    mode="dropdown"
                    iosHeader="Flights"
                    headerStyle={{ backgroundColor: "#FDEB4F" }}
                    placeholder="              Select your flight     "
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                    selectedValue="4056"
                    style={{ width: undefined }}
                    onValueChange={()=>{}}
                  >
                    <Picker.Item label="SPA 4056" value="4056" />
                    <Picker.Item label="SPA 4156" value="4156" />
                  </Picker>
                </Form>
                  </Body>
                </CardItem>
                <CardItem footer button onPress={() => this.registerFlight()}>
                  <Text>Register</Text>
                </CardItem>
              </Card>
            </Content>
          </ImageBackground>
        </Tab>
        <Tab heading="Check In">
        <ImageBackground
          source={{uri: 'https://art.pixilart.com/d1d83dba314e320.gif'}}
          style={{flex:1}}
        >
        <Content>
          <Card  style={{marginTop:50, marginLeft: 10, marginRight:10}}>
            <CardItem header>
              <Body><Text>Login</Text></Body>
            </CardItem>
            
              <Form>
                <Item floatingLabel>
                  <Label>Username</Label>
                  <Input />
                </Item>
                <Item floatingLabel last>
                  <Label>Password</Label>
                  <Input />
                </Item>
              </Form>
            

              <Button full success onPress={()=>{this.setState({isModalVisible:true})}}>
              <Text>Submit</Text>
            </Button>
          </Card>
        </Content>
      </ImageBackground>
        </Tab>
      </Tabs>
          
      <Modal isVisible={this.state.isModalVisible}>
      <Container>
      <Header span
        style={{backgroundColor:"#FDEB4F", height: 200}}>
        <Body>
        <Title style={{fontSize: 24}}>Looks like you have a flight.</Title>
        <Subtitle style={{fontSize: 20, fontWeight:'bold'}}>Let's get you checked in!</Subtitle>
        </Body>
      </Header>
          <Content>
            <Card  style={{marginTop:50, marginLeft: 10, marginRight:10}}>
              
              <CardItem button onPress={() => this.openWallet()}>
                <Body>
                <Image
                style={{width: "100%", height: 200}}
                source={{uri: 'https://cdn.dribbble.com/users/315048/screenshots/3710002/check.gif'}}
                  />
                </Body>
              </CardItem>
              <CardItem footer button onPress={() => this.openWallet()}>
                <Body>
                  <Text>CHECK IN!</Text>
                </Body>
              </CardItem>
              
            </Card>
          </Content>
          </Container>
      </Modal>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
