import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const choices = ['Taş', 'Kağıt', 'Makas'];

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const handleChoice = (choice) => {
    setUserChoice(choice);
    const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerRandomChoice);
    determineWinner(choice, computerRandomChoice);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      Alert.alert('Berabere!', 'Her ikiniz de aynı seçeneği seçtiniz.');
    } else if (
      (user === 'Taş' && computer === 'Makas') ||
      (user === 'Kağıt' && computer === 'Taş') ||
      (user === 'Makas' && computer === 'Kağıt')
    ) {
      Alert.alert('Kazandınız!', `Siz: ${user}, Bilgisayar: ${computer}`);
      setUserScore(userScore + 1);
    } else {
      Alert.alert('Kaybettiniz!', `Siz: ${user}, Bilgisayar: ${computer}`);
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Taş Kağıt Makas</Text>
      <View style={styles.choicesContainer}>
        {choices.map((choice) => (
          <TouchableOpacity
            key={choice}
            style={styles.choiceButton}
            onPress={() => handleChoice(choice)}
          >
            <Text style={styles.choiceText}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Sizin Seçiminiz: {userChoice || '-'}</Text>
        <Text style={styles.resultText}>Bilgisayarın Seçimi: {computerChoice || '-'}</Text>
        <Text style={styles.resultText}>SKOR</Text>
        <Text style={styles.resultText}>Siz : {userScore} - Bilgisayar : {computerScore}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  choicesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  choiceButton: {
    backgroundColor: '#3498db',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  choiceText: {
    color: '#fff',
    fontSize: 18,
  },
  resultContainer: {
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    fontStyle:'italic',
    marginVertical: 5,
  },
});

export default App;