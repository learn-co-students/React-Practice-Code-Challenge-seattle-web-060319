import React from "react";

const SushiWallet = (props) => {
  return <div>
    <form onSubmit={props.handleAddBalanceClick}>
      <input type="text" name="add"/>
      <input type="submit" value="add balance"/>
    </form>
  </div>
};

export default SushiWallet;
