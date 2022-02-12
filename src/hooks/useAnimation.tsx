import { useRef } from 'react'
import { Animated, Easing} from 'react-native'
const useAnimation = () => {

    const opacity = useRef( new Animated.Value(0) ).current
    const position = useRef( new Animated.Value(0) ).current
  
    const fadeIn = ()=> {
      Animated.timing(
        opacity,
        {
          toValue:1,
          duration:300,
          useNativeDriver:true
        }
      ).start(()=> console.log('animacion termino'));
  
   
    }
  
    const fadeOut = ()=> {
      Animated.timing(
        opacity,
        {
          toValue:0,
          duration:300,
          useNativeDriver:true
        }
      ).start();

    }

    const startMovingPosition = (initPosition = 0, defaultPosition=0, duration = 300)=> {
        position.setValue(initPosition)
        Animated.timing(
            position,
            {
              defaultPosition,
              duration,
              useNativeDriver:true,
               easing: Easing.bounce
            }
          ).start()
    }
  
  return {
      fadeOut, 
      fadeIn,
      opacity,
      position,
      startMovingPosition
    }
}

export default useAnimation