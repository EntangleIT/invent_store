import { encrypt, decrypt } from '@babbage/sdk-ts';

const handleBitcoinTransaction = async (taskDescription) => {
  const encryptedData = await encrypt({
    plaintext: Uint8Array.from(Buffer.from(taskDescription)),
    protocolID: 'inventory protocol',
    keyID: '1'
  });

  console.log('Encrypted Data:', encryptedData);
};

export { handleBitcoinTransaction };
