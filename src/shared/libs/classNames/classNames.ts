interface Mods {
  [key: string]: boolean;
}

export function classNames(cls: string,
                           additional: Array<string | undefined | null | false> = [],
                           mods: Mods = {}): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => value)
      .map(([key]) => key),
  ].join(' ');
}
