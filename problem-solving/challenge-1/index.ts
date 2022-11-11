export const numbersFractionCalculator = (numbers: number[]) => {

    let positives: number = 0;
    let negatives: number = 0;
    let zeros: number = 0;

    for (let i: number = 0; i < numbers.length; i++) {
        numbers[i] > 0 ? positives++ : numbers[i] < 0 ? negatives++ : zeros++;
    }

    return {
        positives: (positives / numbers.length).toFixed(6),
        negative: (negatives / numbers.length).toFixed(6),
        zeros: (zeros / numbers.length).toFixed(6),
    }
};
