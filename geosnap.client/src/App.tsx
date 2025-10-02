import { useEffect, type ReactElement } from "react";
import "./App.css";
import "react";
import "./index.css";
import { Button } from "@chakra-ui/react"

interface AppProps {
  date?: string | undefined;
  temperatureC?: number | undefined;
  temperatureF?: number | undefined;
  summary?: string | undefined;
}

const App = (props: AppProps): ReactElement => {
  //const [forecasts, setForecasts] = useState<AppProps[]>();


  return (
      <Button>click me chakra { props.date}</Button>
  );
};

export default App;
