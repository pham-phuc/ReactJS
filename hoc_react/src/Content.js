import { useState, useEffect } from "react";

function Content() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {

    return () =>{
      avatar && URL.revokeObjectURL(avatar.preview)
    }

  },[avatar]);

  const handleSetAvatar = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);

    setAvatar(file);
  };

  return (
    <div style={{ padding: 50 }}>
      <input type="file" onChange={handleSetAvatar} />
      {avatar && <img src={avatar.preview} alt="" width="80%" />}
    </div>
  );
}
export default Content;
