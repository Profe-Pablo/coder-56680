import Categories from './screens/Categories';
import ProductsByCategory from './screens/ProductsByCategory';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  const [categorySelected, setCategorySelected] = useState('');

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  const onSelectCategory =(category)=>{
    setCategorySelected(category)
  }

  const onReturnHome =()=>{
    setCategorySelected("")
  }

  return (
    <>
      {
        categorySelected 
        ? 
        <ProductsByCategory category={categorySelected} returnHomeHandlerEvent={onReturnHome}/> 
        : 
        <Categories onSelectCategoryEvent={onSelectCategory} />
      }
    </>
  );
}

