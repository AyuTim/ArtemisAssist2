import React from 'react';
import { StyleSheet, Dimensions, ScrollView, TouchableOpacity, Linking} from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Home extends React.Component {

  handleCardPress = (article) => {

    const callFromAI = async () => {
      try {
        const response = await fetch('https://api.respell.ai/v1/run', {
          method: 'POST',
          headers: {
            authorization: 'Bearer 09cb511e-3ff5-4999-b2c6-12ee8a8de105',
            accept: 'application/json',
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            spellId: 'UM95RikeC63njWaoWv6q9',
            spellVersionId: 'YlLjd2xHCnto0VZ745BTm',
            inputs: {
              phone_number: '9725231074',
              objective: 'Hi I am a freshman at the University of Texas at Dallas walking alone at night, please keep me company about my day and how college is going.', // Replace 'Example text' with actual objective
            },
          }),
        });
  
        if (response.ok) {
          const jsonResponse = await response.json();
          console.log(jsonResponse);
        } else {
          console.error("HTTP-Error: " + response.status);
        }
      } catch (error) {
        console.error('Fetching error:', error);
      }
    };

    const callEmergencyContact = async () => {
      try {
        const response = await fetch('https://api.respell.ai/v1/run', {
          method: 'POST',
          headers: {
            authorization: 'Bearer 09cb511e-3ff5-4999-b2c6-12ee8a8de105',
            accept: 'application/json',
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            spellId: 'UM95RikeC63njWaoWv6q9',
            spellVersionId: 'YlLjd2xHCnto0VZ745BTm',
            inputs: {
              phone_number: '9725231074',
              objective: 'As soon as they pick up the phone say this exactly without introducing yourself, "Hi just wanted to let you know that your friend, Shashi, was detected to be in distress and may be in danger. If you believe this could be a serious issue, please call 911.', // Replace 'Example text' with actual objective
            },
          }),
        });
  
        if (response.ok) {
          const jsonResponse = await response.json();
          console.log(jsonResponse); // Process your response here
        } else {
          console.error("HTTP-Error: " + response.status);
        }
      } catch (error) {
        console.error('Fetching error:', error);
      }
    };


    switch (article.actionData) {
      case 'serialWriter':
        console.log("Initiating serial writer...");
        break;
      case 'callFromAI':
        console.log("Calling from AI...");
        callFromAI();
        
        break;
      case 'callEmergencyContact':
        console.log("Calling emergency contact...");
        callEmergencyContact();
        break;
      case 'viewRecordings':
        console.log("Viewing previous records...");
        break;
      case 'link':
        console.log("Opening link...");
        Linking.openURL(article.actionType).catch(err => console.error("An error occurred", err));
        break;
      default:
        console.log("Action not supported.")
    }
  }


  renderArticles = () => {
    return (
      <ScrollView
  showsVerticalScrollIndicator={false}
  contentContainerStyle={styles.articles}
>
  <Block flex>
    <TouchableOpacity onPress={() => this.handleCardPress(articles[0])} style={{ zIndex: 3 }}>
      <Card item={articles[0]} horizontal navigation={this.props.navigation} />
    </TouchableOpacity>

    <Block flex row style={{ justifyContent: 'space-between', paddingHorizontal: theme.SIZES.BASE }}>
      <TouchableOpacity onPress={() => this.handleCardPress(articles[1])} style={{ flex:1, marginRight: theme.SIZES.BASE/2}}>
        <Card item={articles[1]} navigation={this.props.navigation} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.handleCardPress(articles[2])} style={{ zIndex: 3 }}>
        <Card item={articles[2]} navigation={this.props.navigation} />
      </TouchableOpacity>
    </Block>

    <TouchableOpacity onPress={() => this.handleCardPress(articles[3])} style={{ zIndex: 3 }}>
      <Card item={articles[3]} horizontal navigation={this.props.navigation} />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => this.handleCardPress(articles[4])} style={{ zIndex: 3 }}>
      <Card 
        item={articles[4]} 
        full 
        navigation={this.props.navigation}
      />
    </TouchableOpacity>
  </Block>
</ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
