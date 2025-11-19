import {History, historyConfig} from "@/features/History";
import {useState} from "react";

export const Payment = () => {
  const [limit, setLimit] = useState(5);
  return <History  config={historyConfig} limit={limit} setLimit={setLimit}/>;
};
