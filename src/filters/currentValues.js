const currencyFilter = (value) => {
    const valorNumerico = typeof value === 'string' ? parseFloat(value.replace(',', '.')) : value;

    if (!isNaN(valorNumerico)) {
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        return formatter.format(valorNumerico);
    } else {
        return '';
    }
};

export default currencyFilter;
