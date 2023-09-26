import Categories from './screens/Categories';
import ProductsByCategory from './screens/ProductsByCategory';
import ProductDetail from './screens/ProductDetail';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  const [categorySelected, setCategorySelected] = useState('');
  const [productIdSelected, setProductIdSelected] = useState(0);

  /* useEffect(()=>{
    console.log("Product id en app:", productIdSelected)
  },[productIdSelected]) */

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  const onSelectCategory =(category)=>{
    setCategorySelected(category)
  }

  const onReturnHome =()=>{
    setCategorySelected("")
    setProductIdSelected(0)
  }

  const onSelectProductId = (id) => {
    setProductIdSelected(id)
  }

  return (
    <>
     {
        productIdSelected
        ?
        <ProductDetail productId={productIdSelected} returnHomeHandlerEvent={onReturnHome} />
        :
        categorySelected 
        ? 
        <ProductsByCategory 
          category={categorySelected} 
          onSelectProductEvent={onSelectProductId} 
          returnHomeHandlerEvent={onReturnHome}
        /> 
        : 
        <Categories onSelectCategoryEvent={onSelectCategory} />
      }
    </>
  );
}

