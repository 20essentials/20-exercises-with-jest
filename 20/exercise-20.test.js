import { howManyReindeers } from './exercise-20.js';

describe('howManyReindeers()', () => {
  it('should be defined as a function', () => {
    expect(typeof howManyReindeers).toBe('function');
  });

  it('should return the correct reindeer distribution for multiple countries, excluding the reindeer with the highest capacity', () => {
    expect(
      howManyReindeers(
        [
          { type: 'Nuclear', weightCapacity: 50 },
          { type: 'Electric', weightCapacity: 10 },
          { type: 'Gasoline', weightCapacity: 5 },
          { type: 'Diesel', weightCapacity: 1 }
        ],
        [
          { country: 'Spain', weight: 30 },
          { country: 'France', weight: 17 },
          { country: 'Italy', weight: 50 }
        ]
      )
    ).toEqual([
      {
        country: 'Spain',
        reindeers: [
          { type: 'Electric', num: 1 },
          { type: 'Gasoline', num: 3 },
          { type: 'Diesel', num: 5 }
        ]
      },
      {
        country: 'France',
        reindeers: [
          { type: 'Electric', num: 1 },
          { type: 'Gasoline', num: 1 },
          { type: 'Diesel', num: 2 }
        ]
      },
      {
        country: 'Italy',
        reindeers: [
          { type: 'Electric', num: 3 },
          { type: 'Gasoline', num: 3 },
          { type: 'Diesel', num: 5 }
        ]
      }
    ]);
  });

  it('should return the correct reindeer distribution for one country with a medium load', () => {
    expect(
      howManyReindeers(
        [
          { type: 'Electric', weightCapacity: 10 },
          { type: 'Gasoline', weightCapacity: 5 },
          { type: 'Diesel', weightCapacity: 1 }
        ],
        [{ country: 'Spain', weight: 37 }]
      )
    ).toEqual([
      {
        country: 'Spain',
        reindeers: [
          { type: 'Electric', num: 2 },
          { type: 'Gasoline', num: 2 },
          { type: 'Diesel', num: 7 }
        ]
      }
    ]);
  });

  it('should return the correct reindeer distribution for multiple countries with mixed weights, including low and high values', () => {
    expect(
      howManyReindeers(
        [
          { type: 'Nuclear', weightCapacity: 50 },
          { type: 'Electric', weightCapacity: 10 },
          { type: 'Gasoline', weightCapacity: 5 },
          { type: 'Diesel', weightCapacity: 1 }
        ],
        [
          { country: 'Spain', weight: 30 },
          { country: 'Germany', weight: 7 },
          { country: 'France', weight: 17 },
          { country: 'Italy', weight: 50 }
        ]
      )
    ).toEqual([
      {
        country: 'Spain',
        reindeers: [
          { type: 'Electric', num: 1 },
          { type: 'Gasoline', num: 3 },
          { type: 'Diesel', num: 5 }
        ]
      },
      {
        country: 'Germany',
        reindeers: [
          { type: 'Gasoline', num: 1 },
          { type: 'Diesel', num: 2 }
        ]
      },
      {
        country: 'France',
        reindeers: [
          { type: 'Electric', num: 1 },
          { type: 'Gasoline', num: 1 },
          { type: 'Diesel', num: 2 }
        ]
      },
      {
        country: 'Italy',
        reindeers: [
          { type: 'Electric', num: 3 },
          { type: 'Gasoline', num: 3 },
          { type: 'Diesel', num: 5 }
        ]
      }
    ]);
  });

  it('should return the correct distribution when only small-capacity reindeers are available', () => {
    expect(
      howManyReindeers(
        [
          { type: 'Diesel', weightCapacity: 1 },
          { type: 'Gasoline', weightCapacity: 5 }
        ],
        [
          { country: 'Spain', weight: 30 },
          { country: 'Germany', weight: 7 }
        ]
      )
    ).toEqual([
      {
        country: 'Spain',
        reindeers: [
          { type: 'Gasoline', num: 5 },
          { type: 'Diesel', num: 5 }
        ]
      },
      {
        country: 'Germany',
        reindeers: [
          { type: 'Gasoline', num: 1 },
          { type: 'Diesel', num: 2 }
        ]
      }
    ]);
  });
});
