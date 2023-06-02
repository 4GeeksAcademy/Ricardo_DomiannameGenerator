console.log("Any string");
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
for (let i = 0; i < pronoun.length; i++) {
  for (let l = 0; l < adj.length; l++) {
    for (let x = 0; x < noun.length; x++) {
      console.log(pronoun[i] + adj[l] + noun[x]);
    }
  }
}
