import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSettings } from "../contexts/SettingsContext";
import { formatPrice } from "../utils/currency";
import { useTranslation } from "react-i18next";

export default function ProductCard({ product }) {
  const { currency } = useSettings();
  const { t, i18n } = useTranslation();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px",
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTranslationKey = (name) => {
    // Remove special characters and convert to camelCase
    const key = name
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .trim()
      .split(/\s+/)
      .map((word, index) => 
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join('');

    return `product.items.${key}`;
  };

  const getTranslatedText = (text, type) => {
    const key = getTranslationKey(product.name);
    const fullKey = `${key}.${type}`;

    // Try current language with the generated key
    let translated = t(fullKey, {
      defaultValue: undefined,
      lng: i18n.language
    });

    // If not found, try English version
    if (!translated && i18n.language !== 'en') {
      translated = t(fullKey, {
        defaultValue: undefined,
        lng: 'en'
      });
    }

    // If still not found, return original text 
    return translated || text;
  };

  const translatedName = getTranslatedText(product.name, 'name');
  const translatedDescription = getTranslatedText(product.description, 'description');

  return (
    <Card className="transform transition-transform hover:scale-105">
      <CardHeader>
        <div 
          ref={imageRef}
          className="w-full h-48 relative bg-muted rounded-t-lg overflow-hidden"
        >
          {isInView && (
            <img 
              src={product.image} 
              alt={translatedName}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsImageLoaded(true)}
            />
          )}
          {!isImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-2">{translatedName}</CardTitle>
        <p className="text-sm text-muted-foreground mb-4">
          {translatedDescription}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">
            {formatPrice(parseFloat(product.price), currency)}
          </span>
          <span className="text-sm text-muted-foreground">
            {t('product.inStock', { count: product.inventory })}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}