export const testCase1 =
  '{"A": {"start": true, "edges": {"B": 5, "C": 7}}, "B": {"edges": {}}, "C": {"edges": {}}}';

export const testCase2 =
  '{"A": {"start": true, "edges": {"B": 5,"C": 7}}, "B": {"edges": {"D": 3}}, "C": {"edges": {"D": 3}}, "D": {"edges": {"E": 1}}, "E": {}}';

export const testCase3 =
  '{"H": {"start": true, "edges": {"I": 1,"E": 3, "S": 5, "A": 8}}, "I": {"edges": {"R": 1, "A": 5}}, "E": {"edges": {"+": 1}}, "S": {"edges": {"SH": 2}}, "R": {}, "+": {}, "SH": {}, "A": {}}';
