---
sidebar_position: 1
---

# 엑셀컨버터

Excel 파일을 생성, 읽기, 쓰기 등 다양한 작업을 지원하는 강력한 라이브러리입니다. 브라우저와 Node.js 환경에서 모두 사용할 수 있으며, Axboot 프로젝트에서는 데이터 내보내기 기능에 주로 사용됩니다.

## 주요 기능

- Excel 파일 생성: 새로운 Excel 파일을 생성하고 시트 및 데이터를 추가.
- Excel 파일 읽기: 기존 Excel 파일에서 데이터를 읽기.
- Excel 파일 쓰기: 데이터를 Excel 파일로 저장.
- 스타일링 지원: 셀 스타일, 병합, 테두리, 글꼴 등 지원.

---

## 기본 사용법

### 1. Excel 파일 생성 및 다운로드 (브라우저 환경)

```typescript jsx
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

const generateExcel = async () => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sample Sheet");

  // 열 정의
  worksheet.columns = [
    { header: "ID", key: "id", width: 10 },
    { header: "Name", key: "name", width: 20 },
    { header: "Email", key: "email", width: 30 },
  ];

  // 데이터 추가
  worksheet.addRow({ id: 1, name: "John Doe", email: "john.doe@example.com" });
  worksheet.addRow({ id: 2, name: "Jane Smith", email: "jane.smith@example.com" });

  // 엑셀 파일 버퍼 생성
  const buffer = await workbook.xlsx.writeBuffer();

  // 파일 다운로드
  saveAs(new Blob([buffer]), "Sample.xlsx");
};

generateExcel();
```

---

### 2. Excel 파일 읽기

```typescript jsx
import ExcelJS from "exceljs";

const readExcel = async (file: File) => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(await file.arrayBuffer());

  const worksheet = workbook.getWorksheet("Sample Sheet");
  worksheet.eachRow((row, rowNumber) => {
    console.log(`Row ${rowNumber}:`, row.values);
  });
};
```

---

### 3. Excel 파일 스타일링

```typescript jsx
import ExcelJS from "exceljs";

const styleExcel = async () => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Styled Sheet");

  worksheet.columns = [
    { header: "ID", key: "id", width: 10 },
    { header: "Name", key: "name", width: 20 },
  ];

  // 스타일이 적용된 데이터 추가
  const row = worksheet.addRow({ id: 1, name: "John Doe" });
  row.getCell(1).font = { name: "Arial", size: 12, bold: true };
  row.getCell(2).fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFFFCC00" },
  };

  // 파일 저장
  const buffer = await workbook.xlsx.writeBuffer();
  console.log(buffer); // Node.js 환경에서는 파일 시스템 모듈로 저장 가능
};
```

---

## API 설명

#### Workbook
| 메서드              | 설명                                   | 예시                                    |
|---------------------|----------------------------------------|-----------------------------------------|
| `addWorksheet(name)`| 새 워크시트를 추가.                   | `const ws = wb.addWorksheet('Sheet1');` |
| `xlsx.writeBuffer()`| 워크북을 버퍼로 변환 (브라우저).       | `const buffer = await wb.xlsx.writeBuffer();` |
| `xlsx.writeFile()`  | 워크북을 파일로 저장 (Node.js).        | `await wb.xlsx.writeFile('output.xlsx');` |
| `xlsx.load(buffer)` | 버퍼를 로드하여 워크북 읽기.           | `await wb.xlsx.load(file.arrayBuffer());` |

#### Worksheet
| 메서드           | 설명                           | 예시                                                  |
|------------------|--------------------------------|------------------------------------------------------|
| `columns`        | 열을 정의.                    | `ws.columns = [{ header: 'ID', key: 'id' }];`        |
| `addRow(data)`   | 행 추가.                      | `ws.addRow({ id: 1, name: 'John' });`               |
| `getRow(number)` | 특정 행을 가져옴.             | `const row = ws.getRow(1);`                         |
| `eachRow(callback)` | 각 행에 대해 반복 작업 수행. | `ws.eachRow((row) => console.log(row.values));`      |


#### Cell Styling
| 속성         | 설명               | 예시                                                                 |
|--------------|--------------------|----------------------------------------------------------------------|
| `font`       | 셀 글꼴 스타일.    | `{ name: 'Arial', size: 12, bold: true }`                            |
| `fill`       | 셀 배경색.         | `{ type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFCC00' } }` |
| `alignment`  | 셀 텍스트 정렬.    | `{ horizontal: 'center', vertical: 'middle' }`                      |
| `border`     | 셀 테두리 스타일.  | `{ top: { style: 'thin' }, bottom: { style: 'thick' } }`            |

---

## 자주 묻는 질문 (FAQ)

#### Q1. 파일 다운로드가 작동하지 않습니다.
A: 브라우저 환경에서 `file-saver` 라이브러리를 설치하고 saveAs를 사용해야 합니다:
```bash
npm install file-saver
```

#### Q2. Excel 파일 읽기가 실패합니다.
A: 파일을 읽을 때 `arrayBuffer` 형식으로 변환해야 합니다:
```typescript jsx
await workbook.xlsx.load(await file.arrayBuffer());
```

#### Q3. Excel 스타일이 저장되지 않습니다.
A: 스타일링은 셀 수준에서 적용해야 하며, 각 셀에 대해 개별 설정해야 합니다:
```typescript jsx
row.getCell(1).font = { name: 'Arial', size: 12, bold: true };
```
