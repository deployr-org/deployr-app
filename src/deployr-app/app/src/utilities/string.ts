export function lowerCase(value: string): string {
  return value.toLowerCase();
}
export function upperCase(value: string): string {
  return value.toUpperCase();
}
export function replaceAccents(value: string): string {
  let result = value;
  // verifies if the String has accents and replace them
  if (value.search(/[\xC0-\xFF]/g) > -1) {
    result = value
            .replace(/[\xC0-\xC5]/g, 'A')
            .replace(/[\xC6]/g, 'AE')
            .replace(/[\xC7]/g, 'C')
            .replace(/[\xC8-\xCB]/g, 'E')
            .replace(/[\xCC-\xCF]/g, 'I')
            .replace(/[\xD0]/g, 'D')
            .replace(/[\xD1]/g, 'N')
            .replace(/[\xD2-\xD6\xD8]/g, 'O')
            .replace(/[\xD9-\xDC]/g, 'U')
            .replace(/[\xDD]/g, 'Y')
            .replace(/[\xDE]/g, 'P')
            .replace(/[\xE0-\xE5]/g, 'a')
            .replace(/[\xE6]/g, 'ae')
            .replace(/[\xE7]/g, 'c')
            .replace(/[\xE8-\xEB]/g, 'e')
            .replace(/[\xEC-\xEF]/g, 'i')
            .replace(/[\xF1]/g, 'n')
            .replace(/[\xF2-\xF6\xF8]/g, 'o')
            .replace(/[\xF9-\xFC]/g, 'u')
            .replace(/[\xFE]/g, 'p')
            .replace(/[\xFD\xFF]/g, 'y');
  }

  return result;
}
export function removeNonWord(value: string): string {
  return value.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, '');
}
export function camelCase(value: string): string {
  let result = value;
  result = replaceAccents(result);
  result = removeNonWord(result)
    .replace(/\-/g, ' ') // convert all hyphens to spaces
    .replace(/\s[a-z]/g, upperCase) // convert first char of each word to UPPERCASE
    .replace(/\s+/g, '') // remove spaces
    .replace(/^[A-Z]/g, lowerCase); // convert first char to lowercase

  return result;
}
export function slugify(value: string): string {
  let result = value;
  result = replaceAccents(result)
            .replace(/&/g, '-and-');
  result = removeNonWord(result)
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, '') // Trim - from end of text
            .toLowerCase();

  return result;
}
