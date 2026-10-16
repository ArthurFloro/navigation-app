import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./StackRoutes";
import { BottomRoutes } from "./BottomRoutes";
import { DrawerRoutes } from "./DrawerRoute";

export function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}
