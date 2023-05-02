import { Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = (props) => {
    return(
        <Pressable onPress={props.onClick}>
            <Icon name="star" size={30} color="white" margin={10} />
        </Pressable>
    )
}

export default IconButton;