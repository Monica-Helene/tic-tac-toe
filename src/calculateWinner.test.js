import { test, expect } from 'vitest';
import calculateWinner from './calculateWinner';

    test('returnere "X" når X har vunnet diagonalt', () => {
      const squares = [
        'X', null, 'O',
        null, 'X', 'O',
        null, null, 'X'
      ];
      expect(calculateWinner(squares)).toBe('X');
    });

    test('retunere "O" når O har vunnet nedover', () => {
        const squares =[
            'O', null, 'X',
            'O', 'X', null, 
            'O', null, 'X'
        ];
        expect(calculateWinner(squares)).toBe('O')
    });

    
    test('retunere "null" når ingen har vunnet', () => {
        const squares =[
            'O', null, 'X',
            null, 'X', null, 
            'O', null, 'X'
        ];
        expect(calculateWinner(squares)).toBe(null)
    });