//đánh giá giảng viên trên mydtu
Array.from(document.querySelectorAll('td[onclick^="checkOption(\'"][onclick$="A\')"]')).forEach(e => e.click())
for (let i = 48; i <= 51; i++) {
  // get textarea name="R51"
  let el = document.querySelector(`textarea[name="R${i}"]`);
  if (el) {
    // set value
    el.value = "Không có ý kiến";
  }
}
const rootElement = document.documentElement;
rootElement.scrollIntoView({ behavior: 'smooth', block: 'end' });