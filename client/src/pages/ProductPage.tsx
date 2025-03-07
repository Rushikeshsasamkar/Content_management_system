import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";
import { MOCK_PRODUCTS } from "@shared/constants";
import { useTranslation } from "react-i18next";

export default function ProductPage() {
  const { t } = useTranslation();
  const { data: products, isLoading } = useQuery({
    queryKey: ["/api/products"],
    queryFn: async () => MOCK_PRODUCTS
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-[400px] animate-pulse bg-muted rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-6">{t('product.featured')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">{t('product.recommended')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
