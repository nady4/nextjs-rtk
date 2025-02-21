import { Provider } from "react-redux";
import { store } from "./store";

interface Props {
  children: React.ReactNode;
  store: typeof store;
}

export function ProviderWrapper({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
