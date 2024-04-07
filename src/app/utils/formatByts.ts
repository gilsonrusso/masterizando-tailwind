// Função para formatar bits em uma string legível
export function formatBits(bits: number) {
    const units = ['bits', 'Kb', 'Mb', 'Gb', 'Tb'];
    let value = bits;
    let unitIndex = 0;

    while (value >= 1024 && unitIndex < units.length - 1) {
        value /= 1024;
        unitIndex++;
    }

    return `${value.toFixed(1)} ${units[unitIndex]}`;
}

// Exemplo de uso
// const bits = 12345678; // Alguns bits arbitrários
// const formattedBits = formatBits(bits);
// console.log(`Bits formatados: ${formattedBits}`);
