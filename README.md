# mobile-operator

## types

```typescript
enum OperatorType {
  ALL = 0,
  CMCC = 1,
  CUCC = 2,
  CTCC = 3,
  UNKNOWN = -1
}

interface Operator {
  name: string
  type: OperatorType
}

// example
const CMCC: Operator = {
  name: '中国移动',
  type: OperatorType.CMCC
}

```