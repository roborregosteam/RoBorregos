
export const typeTitle = (title:string, idName:string) => {
    const words = [title];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = true;
    let deleteAnimation = false;
    const type = () => {

      currentWord = words[i];
      let t = document.getElementById(idName);
      if (t) {
        if (isDeleting && deleteAnimation) {
          t.textContent = currentWord.substring(0, j - 1);
          j--;
          if (j == 0) {
            isDeleting = false;
            i++;
            if (i == words.length) {
              i = 0;
            }
          }
        } else {
          t.textContent = currentWord.substring(0, j + 1);
          j++;
          if (j == currentWord.length) {
            isDeleting = true;
          }
        }
      }
      setTimeout(type, 200);
    }
    type();
};
