let ToastBox = document.getElementById("toastbox");
let SuccessMsg =
  '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let ErrorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please Fix The Error!';
let InvalidMsg =
  '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input Check Again';

function ShowToast(msg) {
  let Toast = document.createElement("div");
  Toast.classList.add("Toast");
  Toast.innerHTML = msg;
  ToastBox.appendChild(Toast);

  if (msg.includes("Error")) {
    Toast.classList.add("Error");
  }
  if (msg.includes("Invalid")) {
    Toast.classList.add("Invalid");
  }

  setTimeout(() => {
    Toast.remove();
  }, 4900);
}
