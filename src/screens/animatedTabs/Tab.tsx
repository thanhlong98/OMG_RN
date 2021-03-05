import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Tab: React.FC<{ item: any; onItemPress: any }> = React.forwardRef(
  ({ item, onItemPress }, ref) => {
    return (
      <TouchableOpacity onPress={onItemPress}>
        <View ref={ref}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}
          >
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
)

export default Tab
