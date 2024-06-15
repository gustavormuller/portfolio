type PropsWithLocale<T = {}> = T & {
  params: { locale: string };
};

export type Locale<T = {}> = T & { locale: string };

export default PropsWithLocale;
