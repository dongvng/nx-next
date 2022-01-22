export function array(): string {
  return 'array';
}

export function isArray(input: any): input is true {
  return Array.isArray(input);
}
