import React from 'react'
import { 
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

interface SkillProps {
  skill: {
    text: string
    id: string
  }
}

export function SkillCard({ skill }: SkillProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill}> 
      <Text style={styles.textSkill}>
        {skill.text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  }
})