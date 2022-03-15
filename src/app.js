let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".es", ".net", ".org"];

const domainname = (primero, segundo, tercero, ultimo) => {
  for (let h of primero) {
    for (let i of segundo) {
      for (let j of tercero) {
        for (let k of ultimo) {
          console.log(i + j + h + k);
        }
      }
    }
  }
};

domainname(pronoun, adj, noun, ext);
