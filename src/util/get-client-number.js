export const getClientNumber = clientName => {
    if (!clientName) return '';
    return clientName.match(/\b(\w)/g).join('');
};
