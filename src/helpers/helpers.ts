export const generateUniqueAccountNumber = (): string => {
    const randomAccountNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    return randomAccountNumber.toString();
}