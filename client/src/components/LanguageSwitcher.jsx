import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSettings } from "../contexts/SettingsContext";
import { SUPPORTED_LANGUAGES } from "@shared/constants";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../i18n";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useSettings();
  const { t } = useTranslation();

  const handleLanguageChange = async (value) => {
    await changeLanguage(value);
    setLanguage(value);
  };

  return (
    <Select value={language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={t('language.select')} />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => (
          <SelectItem key={code} value={code}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}