import { Link } from "expo-router";
import { Text, View } from "react-native";

const Index = () => {
  return (
    <View style={{ backgroundColor: "red",
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
     }}>
      <Text style={{fontSize:20,fontWeight:"700",color:"white"}}>Hii , Wllcome to My-First App By Atul Anand 
      </Text>
      <Link href="/about" style={{marginTop:20,fontSize:16,color:"yellow"}}>Go to About Page</Link>
    </View>
  );
};

export default Index;
