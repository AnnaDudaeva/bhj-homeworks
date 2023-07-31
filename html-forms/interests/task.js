const interestCheck = Array.from(document.querySelectorAll('.interest__check'));

for (let check of interestCheck) {
  check.addEventListener('change', () => {
    const childCheck = Array.from(check.closest('.interest').querySelectorAll('.interest__check'));

    if (check.checked == true && check.closest('ul.interests_active') == null) {
      for (let child of childCheck) {
        child.checked = true;
      }
    } else if (check.checked == false && check.closest('ul.interests_active') == null) {
        for (let child of childCheck) {
        child.checked = false;
        }
      }
  })
}