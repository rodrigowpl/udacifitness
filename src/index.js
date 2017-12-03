import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/add-entry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default () => (
  <Provider store={createStore(reducer)}>
    <View style={{flex: 1}}>
      <AddEntry />
    </View>
  </Provider>
)
