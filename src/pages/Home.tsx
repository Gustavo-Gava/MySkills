import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet,
    FlatList,
    StatusBar
} from 'react-native'
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

interface MySkillsProps {
  text: string
  id: string
}

export function Home() {
  const [newSkill, setNewSkill] = useState<string>('')
  const [mySkills, setMySkills] = useState<MySkillsProps[]>([])
  const [greeting, setGreeting] = useState('')

  function handleAddNewSkill() {
    const data = {
      id: String(Math.random()),
      text: newSkill
    }
    setMySkills([...mySkills, data])
    setNewSkill('')
  }

  function handleRemoveSkill(id: string) {
    setMySkills(mySkills.filter(skill => skill.id !== id))
  }

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour < 12) {
      setGreeting('Good Morning!')
    } else if (currentHour < 18){
      setGreeting('Good Afternoon!')
    } else {
      setGreeting('Good Evening!')
    }
  }, [])

  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>Welcome, Gustavo</Text>

        <Text style={styles.greeting}>{ greeting }</Text>

        <TextInput 
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
          value={newSkill}
        />

        <Button 
          onPress={handleAddNewSkill} 
        >
          Add
        </Button>

        <Text style={[ styles.title, { marginTop: 50} ]}>
          My Skills
        </Text>

        <FlatList 
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SkillCard 
              skill={item} 
              onPress={() => handleRemoveSkill(item.id)}
            />
          )}
        />
      
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  greeting: {
    color: '#fff',
    fontSize: 16
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#FFF',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 8,
  },
})