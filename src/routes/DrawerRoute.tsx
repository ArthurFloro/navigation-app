import {
  createDrawerNavigator,
  DrawerScreenProps,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

import { Product } from "@/app/Product";
import { Home } from "@/app/Home";

export type DrawerRouteList = {
  home: undefined;
  product: undefined | { id: string };
};

export type DrawerRoutesProps<T extends keyof DrawerRouteList> =
  DrawerScreenProps<DrawerRouteList, T>;

const Drawer = createDrawerNavigator<DrawerRouteList>();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#2C46B1",
        drawerInactiveTintColor: "#444444",
      }}
    >
      <Drawer.Screen
        name="home"
        component={Home}
        options={{
          drawerLabel: "Início",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="product"
        component={Product}
        options={{
          drawerLabel: "Produto",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
