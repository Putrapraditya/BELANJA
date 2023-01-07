let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');


document.querySelectorAll('.products-container .product ').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

//<![CDATA[
    //Script Redirect CTRL + U
    function redirectCU(e) {
      if (e.ctrlKey && e.which == 85) {
          window.location.replace("https://putrapraditya.github.io/");
          return false;
      }
      }
      document.onkeydown = redirectCU;
      //]]>