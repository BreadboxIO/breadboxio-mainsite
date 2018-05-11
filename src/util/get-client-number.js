export const getClientNumber = clientName => {
    return clientName.match(/\b(\w)/g).join('');
};
