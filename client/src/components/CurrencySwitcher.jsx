import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSettings } from "../contexts/SettingsContext";
import { SUPPORTED_CURRENCIES } from "@shared/constants";

export default function CurrencySwitcher() {
  const { currency, setCurrency } = useSettings();

  return (
    <Select value={currency} onValueChange={setCurrency}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select currency" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(SUPPORTED_CURRENCIES).map(([code, { name, symbol }]) => (
          <SelectItem key={code} value={code}>
            {`${symbol} ${name}`}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
