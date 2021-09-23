import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet,
} from 'react-native'
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])

  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill])
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Gustavo</Text>

        <TextInput 
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} >
          Add
        </Button>

        <Text style={[ styles.title, { marginTop: 50} ]}>
          My Skills
        </Text>

        {
          mySkills.map(skill => {
            <SkillCard skill={skill} />
          })
        }

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
  input: {
    backgroundColor: '#1F1e25',
    color: '#FFF',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 8,
  },
})