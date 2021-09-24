import React from 'react'
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  children: string
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={styles.button}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.buttonText}>
        {children ? children : 'Name is missing'}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
})

