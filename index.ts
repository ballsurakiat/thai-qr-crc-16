export const getCrc16 = (payload: any) => {
  const buffer = stringToBytes(String(payload))
  return crc16(buffer)
}

function crc16(buffer: number[]): string {
  const table = [
    0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50A5, 0x60C6, 0x70E7,
    0x8108, 0x9129, 0xA14A, 0xB16B, 0xC18C, 0xD1AD, 0xE1CE, 0xF1EF
  ];

  let crc = 0xFFFF;

  for (let i = 0; i < buffer.length; i++) {
    let byte = buffer[i];
    let highNibble = (crc >> 12) & 0xF;
    let index = highNibble ^ (byte >> 4);
    crc = (crc << 4) & 0xFFFF;
    crc ^= table[index];

    highNibble = (crc >> 12) & 0xF;
    index = highNibble ^ (byte & 0xF);
    crc = (crc << 4) & 0xFFFF;
    crc ^= table[index];
  }

  return (crc & 0xFFFF)
    .toString(16)
    .padStart(4, '0')
    .toUpperCase();
}

function stringToBytes(str: string): number[] {
  if (!str) return []

  let bytes: number[] = [];

  for (let i = 0; i < str.length; i++) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}
