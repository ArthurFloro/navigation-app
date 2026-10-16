import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { Product } from "@/app/Product";
import { Home } from "@/app/Home";

export type StackRouteList = {
  home: undefined;
  product: undefined;
};

export type StackRoutesProps<T extends keyof StackRouteList> =
  NativeStackScreenProps<StackRouteList, T>;

const Stack = createNativeStackNavigator<StackRouteList>();

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="product" component={Product} />
    </Stack.Navigator>
  );
}
