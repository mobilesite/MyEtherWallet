import { decryptMnemonicToPrivKey } from 'libs/decrypt';
import { fromPrivateKey } from 'ethereumjs-wallet';
import { signWrapper } from 'libs/wallet';

// export const MnemonicWallet = (phrase: string, pass: string, path: string, address: string) =>
//   signWrapper(fromPrivateKey(decryptMnemonicToPrivKey(phrase, pass, path, address)));

export const MnemonicWallet = (phrase: string, pass: string, path: string, address: string) => {
  debugger;
  console.log('助记词-用于生成钱包的参数：', {
    phrase,
    pass,
    path,
    address
  });

  const privateKey = decryptMnemonicToPrivKey(phrase, pass, path, address);
  console.log('助记词-生成的私钥：', privateKey);

  //fromPrivateKey(input) - 基于原始私钥创建一个钱包实例
  const instance = fromPrivateKey(privateKey);
  console.log('instance:', instance);

  const wrappedInstance = signWrapper(instance);
  console.log('wrappedInstance:', wrappedInstance);

  return wrappedInstance;
};
