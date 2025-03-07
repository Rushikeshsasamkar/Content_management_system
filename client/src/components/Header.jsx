import { Link } from "wouter";
import LanguageSwitcher from "./LanguageSwitcher";
import CurrencySwitcher from "./CurrencySwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <nav className="flex items-center space-x-4">
            <Link href="/">
              <a className="text-xl font-bold">{t('brand.name')}</a>
            </Link>
            <Link href="/about">
              <a className="text-sm">{t('nav.about')}</a>
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <CurrencySwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
