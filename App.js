import React from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text, Card, CardItem, Picker, Form, Tab, Tabs } from 'native-base';


export default class App extends React.Component {

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
                    style={{ width: undefined }}
                  >
                    <Picker.Item label="SPA 4056" value="4056" />
                    <Picker.Item label="SPA 4156" value="4156" />
                  </Picker>
                </Form>
                  </Body>
                </CardItem>
                <CardItem footer button onPress={() => alert("Registered")}>
                  <Text>Register</Text>
                </CardItem>
              </Card>
            </Content>
          </ImageBackground>
        </Tab>
        <Tab heading="Check In1">
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
                iosHeader="Departures"
                headerStyle={{ backgroundColor: "#FDEB4F" }}
                placeholder="              Select your flight     "
                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                style={{ width: undefined }}
              >
                <Picker.Item label="SPA 4056" value="4056" />
                <Picker.Item label="SPA 4156" value="4156" />
              </Picker>
              <Picker
                mode="dropdown"
                iosHeader="Returns"
                headerStyle={{ backgroundColor: "#FDEB4F" }}
                placeholder="              Select your flight     "
                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                style={{ width: undefined }}
              >
                <Picker.Item label="SPA 4056" value="4056" />
                <Picker.Item label="SPA 4156" value="4156" />
              </Picker>
            </Form>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => alert("Registered")}>
              <Text>Check IN</Text>
            </CardItem>
          </Card>
        </Content>
      </ImageBackground>
        </Tab>
      </Tabs>
          

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
