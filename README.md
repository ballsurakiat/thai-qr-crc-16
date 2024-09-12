# Thai QR CRC16 Checksum
This repository provides a utility function for calculating the ```CRC16``` checksum used in generating a ```Thai QR``` payment code. The checksum is essential for verifying the integrity of the QR code data.

## Functions

### ```getCrc16(payload: any)```
This function takes a payload as input and returns the CRC16 checksum for that payload.

#### Parameters:
- ```payload (any)```: The input data for which the CRC16 checksum is to be calculated. The payload is converted into a string before processing.

#### Returns:
- ```string```: A hexadecimal representation of the calculated CRC16 checksum in uppercase length 4.

### ```crc16(buffer: number[])```
This is a helper function that performs the actual CRC16 checksum calculation on a byte buffer.

#### Parameters:
- ```buffer (number[])```: An array of numbers representing the bytes of the input data.

#### Returns:
- ```string```: The CRC16 checksum in hexadecimal format, padded to 4 characters and returned in uppercase.

### ```stringToBytes(str: string)```

This function converts a string into an array of bytes (numbers), where each byte represents the character code of each character in the string.

#### Parameters:
- ```str (string)```: The input string to be converted to bytes.

#### Returns:
- ```number[]```: An array of numbers, where each number is the byte representation of a character in the input string.

# Example Usage

```ts
import { getCrc16 } from 'crc16';

// Example payload
const payload = '001201234567890';
const checksum = getCrc16(payload);

console.log(`CRC16 Checksum: ${checksum}`);  // Outputs the calculated checksum
```

# License
This project is licensed under the MIT License. Feel free to modify and use the code for your purposes.
