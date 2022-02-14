import { useRef } from 'react'
import { Animated, Easing, PanResponder} from 'react-native'
const useAnimation = () => {

    const opacity = useRef( new Animated.Value(0) ).current
    const position = useRef( new Animated.Value(0) ).current
    const pan = useRef(new Animated.ValueXY()).current;

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
  
    
      const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
          [
          null,
          {
            dx: pan.x, // x,y are Animated.Value
            dy: pan.y,
          }
        ], {useNativeDriver:false}),
        onPanResponderRelease: () => {
          Animated.spring(
            pan, // Auto-multiplexed
            { toValue: { x: 0, y: 0 }, useNativeDriver:false } // Back to zero
          ).start();
        },
      });

  return {
      fadeOut, 
      fadeIn,
      opacity,
      position,
      startMovingPosition,
      panResponder,
      pan
    }
}

export default useAnimation