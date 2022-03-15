let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

const domainname = (pronoun, adj, noun) => {
  for (let i of pronoun) {
    for (let j of adj) {
      for (let h of noun) {
        console.log(i + j + h + ".com");
      }
    }
  }
};

domainname(pronoun, adj, noun);
