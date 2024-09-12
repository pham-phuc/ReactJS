import { memo } from "react";

function Content() {
  console.log('re-render');
  return (
    <div style={{ padding: 50 }}>
      <h2>Hello Ae F8</h2>
    </div>
  );
}
export default memo(Content);
