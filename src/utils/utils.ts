export const findSection = (section: string, sections: string[]): boolean => {
  return sections.find((s) => s === section) ? true : false;
};
