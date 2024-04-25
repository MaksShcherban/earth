const select = document.querySelector("#earth");

const img_one = document.querySelector(".imgs_1");
const img_two = document.querySelector(".imgs_2");
const img_three = document.querySelector(".imgs_3");
const img_four = document.querySelector(".imgs_4");
const img_five = document.querySelector(".imgs_5");

select.addEventListener("change", () => {
  if (select.value == 144) {
    img_one.hidden = false;
    img_two.hidden = true;
    img_three.hidden = true;
    img_four.hidden = true;
    img_five.hidden = true;
  } else if (select.value == 240) {
    img_one.hidden = true;
    img_two.hidden = false;
    img_three.hidden = true;
    img_four.hidden = true;
    img_five.hidden = true;
  } else if (select.value == 480) {
    img_one.hidden = true;
    img_two.hidden = true;
    img_three.hidden = false;
    img_four.hidden = true;
    img_five.hidden = true;
  } else if (select.value == 720) {
    img_one.hidden = true;
    img_two.hidden = true;
    img_three.hidden = true;
    img_four.hidden = false;
    img_five.hidden = true;
  } else if (select.value == 1080) {
    img_one.hidden = true;
    img_two.hidden = true;
    img_three.hidden = true;
    img_four.hidden = true;
    img_five.hidden = false;
  }
});

console.log(select);
