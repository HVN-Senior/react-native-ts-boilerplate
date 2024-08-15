import {NavigationProp, useNavigation} from "@react-navigation/native";

import {ApplicationStackParamList} from "../types/routes/ApplicationScreenProps";

export default function useAppNavigation() {
  return useNavigation<NavigationProp<ApplicationStackParamList>>();
}
