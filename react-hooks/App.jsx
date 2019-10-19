import React from 'react'
import { Counter, CounterClassComponent } from './components/Counter'
import {
  CounterWithEffect,
  CounterWithEffectClassComponent
} from './components/UseEffectDemo'
import {
  CustomHookDemo,
  CustomHookDemo2,
  CustomHookDemo2ClassComponent
} from './components/CustomHookDemo'
import { UseReducerDemo } from './components/UseReducerDemo'
import { UseRefDemo } from './components/UseRefDemo'
import { UseContextDemo } from './components/UseContextDemo'
import { UseMemoDemo } from './components/UseMemoDemo'
import { UseCallbackDemo } from './components/UseCallbackDemo'

export default function App() {
  return (
    <div>
      <Counter></Counter>
      <CounterClassComponent></CounterClassComponent>
      <CounterWithEffect></CounterWithEffect>
      <CounterWithEffectClassComponent></CounterWithEffectClassComponent>
      <CustomHookDemo></CustomHookDemo>
      <CustomHookDemo2></CustomHookDemo2>
      <CustomHookDemo2ClassComponent></CustomHookDemo2ClassComponent>
      <UseReducerDemo></UseReducerDemo>
      <UseRefDemo></UseRefDemo>
      <UseContextDemo></UseContextDemo>
      <UseMemoDemo></UseMemoDemo>
      <UseCallbackDemo></UseCallbackDemo>
    </div>
  )
}
