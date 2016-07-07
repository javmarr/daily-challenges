/*
# Hamming

Write a program that can calculate the Hamming difference between two DNA strands.

A mutation is simply a mistake that occurs during the creation or
copying of a nucleic acid, in particular DNA. Because nucleic acids are
vital to cellular functions, mutations tend to cause a ripple effect
throughout the cell. Although mutations are technically mistakes, a very
rare mutation may equip the cell with a beneficial attribute. In fact,
the macro effects of evolution are attributable by the accumulated
result of beneficial microscopic mutations over many generations.

The simplest and most common type of nucleic acid mutation is a point
mutation, which replaces one base with another at a single nucleotide.

By counting the number of differences between two homologous DNA strands
taken from different genomes with a common ancestor, we get a measure of
the minimum number of point mutations that could have occurred on the
evolutionary path between the two strands.

This is called the 'Hamming distance'.

It is found by comparing two DNA strands and counting how many of the
nucleotides are different from their equivalent in the other string.

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

The Hamming distance between these two DNA strands is 7.
*/

const compute = (dna1, dna2) => {
  let diff = 0;
  // code here
  // console.log("DNA1 size: ", dna1.length);
  // console.log("DNA2 size: ", dna2.length);
  if (dna1.length !== dna2.length) {
    throw new Error('DNA strands must be of equal length.');
  } else {
    for (let index = 0; index < dna1.length; index++) {
      if (dna1.charAt(index) !== dna2.charAt(index)) {
        diff++;
      }
    }
  }
  return diff;
};

const dna1 = 'ADCDS';
const dna2 = 'ACCSS';

const diff = compute(dna1, dna2);

console.log(dna1);
console.log(dna2);
console.log(`Difference is: ${diff}`);

// -- do not edit below ---

describe('Hamming', () => {
  it('no difference between identical strands', () => {
    expect(compute('A', 'A')).toEqual(0);
  });

  it('complete hamming distance for single nucleotide strand', () => {
    expect(compute('A', 'G')).toEqual(1);
  });

  it('complete hamming distance for small strand', () => {
    expect(compute('AG', 'CT')).toEqual(2);
  });

  it('small hamming distance', () => {
    expect(compute('AT', 'CT')).toEqual(1);
  });

  it('small hamming distance in longer strand', () => {
    expect(compute('GGACG', 'GGTCG')).toEqual(1);
  });

  it('large hamming distance', () => {
    expect(compute('GATACA', 'GCATAA')).toEqual(4);
  });

  it('hamming distance in very long strand', () => {
    expect(compute('GGACGGATTCTG', 'AGGACGGATTCT')).toEqual(9);
  });

  it('throws error when strands are not equal length', () => {
    expect(() => { compute('GGACGGATTCTG', 'AGGAC'); }).toThrow(
      new Error('DNA strands must be of equal length.')
    );
  });
});
