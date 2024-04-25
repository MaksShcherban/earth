const select = document.querySelector("#earth");

const images = {
  144: document.querySelector(".imgs_1"),
  240: document.querySelector(".imgs_2"),
  480: document.querySelector(".imgs_3"),
  720: document.querySelector(".imgs_4"),
  1080: document.querySelector(".imgs_5"),
};

select.addEventListener("change", () => {
  const selectedValue = parseInt(select.value);
  for (const size in images) {
    if (selectedValue === parseInt(size)) {
      images[size].hidden = false;
    } else {
      images[size].hidden = true;
    }
  }
});
