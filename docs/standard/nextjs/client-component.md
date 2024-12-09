---
sidebar_position: 4
---

# 클라이언트 컴포넌트

서버컴포넌트 페이지 머리에 “use server”를 입력하거나 아무선언이 없으면 Next.js에서 서버컴포넌트로 처리 하게 됩니다. 서버컴포넌트내에서 API요청결과를 사용하는 경우 컴포넌트를 async로 만들고 함수 내부에서 await키워드를 사용하여 API요청을 처리 할 수 있습니다.

클라이언트 컴포넌트는 SSR로 동작되지 않고 SPA모드로 동작되는 컴포넌트이고 클라이언트에서 연산하여 결과 처리 합니다.
SEO에 포함되지 않는 요소의 경우 파일 머리에 “use client”를 넣어주고 사용하게 됩니다.
주로 사용자의 행동에 따라 처리되는 기능을 처리 할 때 사용합니다.


```typescript title="/src/app/qrScanner.tsx"
"use client";
import { Scanner } from "@yudiel/react-qr-scanner";
import "./QRScanner.scss";
import { Button, Divider, Modal, Space } from "antd";
import { useState } from "react";


interface Props {}


export function QRScanner({}: Props) {
  const [open, setOpen] = useState(false);
  const [scanValue, setScanValue] = useState("");


  return (
    <>
      <Divider />
    <Space wrap>
    <p>SCAN value : [{scanValue}]</p>
  <Button onClick={() => setOpen(true)} type={"primary"}>
    Scan
    </Button>
    <Button onClick={() => setScanValue("")}>Clean</Button>
  </Space>
  <Divider />
  <Modal width={550} open={open} onCancel={() => setOpen(false)} footer={null}>
  <div
    style={{
    width: 500,
      height: 500,
  }}
>
  <Scanner
    // paused={!open}
    onScan={(result) => {
    const [data] = result;
    console.log(data.rawValue, data.format);
    if (data.rawValue) {
      setScanValue(data.rawValue);
      setOpen(false);
    }
  }}
  />
  </div>
  </Modal>
  </>
);
}
```
