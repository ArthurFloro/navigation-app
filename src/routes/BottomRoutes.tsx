import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";

import { Product } from "@/app/Product";
import { Home } from "@/app/Home";

export type BottomRouteList = {
  home: undefined;
  product: undefined | { id: string };
};

export type BottomRoutesProps<T extends keyof BottomRouteList> =
  BottomTabScreenProps<BottomRouteList, T>;

const Tab = createBottomTabNavigator<BottomRouteList>();

export function BottomRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="product" component={Product} />
    </Tab.Navigator>
  );
}
