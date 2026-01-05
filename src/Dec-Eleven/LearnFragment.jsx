import React from "react";
function LearnFragment() {
  return (
    //Instead of Div we can use React.Fragment or <></>.
    // <React.Fragment>
    //   <h1>Learning Fragment 1</h1>
    //   <h2>Learning Fragment 2</h2>
    // </React.Fragment>
    //Shortcut of React.Fragment
    // <>
    //   <h1>Learning Fragment 1</h1>
    //   <h2>Learning Fragment 2</h2>
    // </>
    <>
      <td>Learning Fragment 1</td>
      <td>Learning Fragment 2</td>
    </>
  );
}
//Fragment is used to remove unnecessary nodes.
export default LearnFragment;
