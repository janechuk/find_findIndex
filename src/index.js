import "./styles.css";
import { userInfo } from "os";

document.getElementById("app").innerHTML = `
<h1></h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
//Find / Findindex

//findUserByUsername

function findUserByUsername(arr) {
  return arr.find(function(val) {
    return user.username === username;
  });
}

//removeUser
function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function(user) {
    return user.username === username;
  });
  if (foundIndex === -1) return;

  return usersArray.splice(foundIndex, 1)[0];
}
