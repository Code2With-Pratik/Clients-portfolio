function openFullscreen(imgElement) {
  // Create full-screen container
  const fullscreenDiv = document.createElement("div");
  fullscreenDiv.style.position = "fixed";
  fullscreenDiv.style.top = "0";
  fullscreenDiv.style.left = "0";
  fullscreenDiv.style.width = "100vw";
  fullscreenDiv.style.height = "100vh";
  fullscreenDiv.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  fullscreenDiv.style.display = "flex";
  fullscreenDiv.style.justifyContent = "center";
  fullscreenDiv.style.alignItems = "center";
  fullscreenDiv.style.zIndex = "9999";

  // Create image element
  const fullscreenImg = document.createElement("img");
  fullscreenImg.src = imgElement.src;
  fullscreenImg.style.maxWidth = "90%";
  fullscreenImg.style.maxHeight = "90%";
  fullscreenImg.style.border = "5px solid white";
  fullscreenImg.style.borderRadius = "10px";
  fullscreenDiv.appendChild(fullscreenImg);

  // Create close button
  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "&times;";
  closeBtn.style.position = "absolute";
  closeBtn.style.top = "20px";
  closeBtn.style.right = "30px";
  closeBtn.style.fontSize = "40px";
  closeBtn.style.color = "white";
  closeBtn.style.background = "none";
  closeBtn.style.border = "none";
  closeBtn.style.cursor = "pointer";
  closeBtn.style.zIndex = "10000";
  fullscreenDiv.appendChild(closeBtn);

  // Close on button click
  closeBtn.addEventListener("click", () => {
    document.body.removeChild(fullscreenDiv);
  });

  // Append to body
  document.body.appendChild(fullscreenDiv);
}
