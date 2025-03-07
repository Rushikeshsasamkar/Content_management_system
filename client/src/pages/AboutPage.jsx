import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{t('about.title')}</h1>
      
      <section className="prose dark:prose-invert">
        <h2>{t('about.history.title')}</h2>
        <p>{t('about.history.content')}</p>

        <h2>{t('about.contact.title')}</h2>
        <div className="not-prose space-y-4">
          <div>
            <h3 className="font-semibold">{t('about.contact.address.title')}</h3>
            <p className="text-muted-foreground">
              {t('about.contact.address.line1')}<br />
              {t('about.contact.address.line2')}<br />
              {t('about.contact.address.line3')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold">{t('about.contact.phone.title')}</h3>
            <p className="text-muted-foreground">{t('about.contact.phone.number')}</p>
          </div>

          <div>
            <h3 className="font-semibold">{t('about.contact.email.title')}</h3>
            <p className="text-muted-foreground">{t('about.contact.email.address')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
