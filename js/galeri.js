const gallery = document.querySelectorAll(".image");
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const closeIcon = previewBox.querySelector(".close");
const currentImg = previewBox.querySelector(".current-img");
const totalImg = previewBox.querySelector(".total-img");
const shadow = document.querySelector(".shadow");


window.onload = () => {
  for (let i = 0; i < gallery.length; i++){
    totalImg.textContent = gallery.length;
    
    let newIndex = i;
    
    let clickedImgIndex;
    
    gallery[i].onclick = () => {
      clickedImgIndex = i;
      
      function preview(){
        currentImg.textContent = newIndex + 1;
        
        let imageURL = gallery[newIndex].querySelector("img").src;
        
        previewImg.src = imageURL;
      }
      preview();
      
      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      if(newIndex == 0){
        prevBtn.style.display = "none";
      }
      
      prevBtn.onclick = () => {
        newIndex--;
        
        if(newIndex == 0){
          preview();
          prevBtn.style.display = "none";
        }else{
          preview();
          nextBtn.style.display = "block";
        }
      }
      
      nextBtn.onclick = () => {
        newIndex++;
        
        if(newIndex >= gallery.length - 1){
          preview();
          nextBtn.style.display = "none";
        }else{
          preview();
          prevBtn.style.display = "block";
        }
      }
      
      document.querySelector("body").style.overflow = "hidden";
      previewBox.classList.add("tampil");
      shadow.style.display = "block";
      closeIcon.onclick = () => {
        newIndex = clickedImgIndex;
        
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove("tampil");
        shadow.style.display = "none";
        document.querySelector("body").style.overflow = "scroll";
      }
    }
  }
}
