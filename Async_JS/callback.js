//Question :-1

const strLength = (name, callback) => {
  callback(name);
};
const callback = (name) => {
  console.log(`OMG! my name is ${name.length} char long!
  `);
};

strLength("Anuj", callback);

//Question :-2

const willThanosKillMe = (name, KillMe, dontKillMe) => {
  name.length % 2 === 0 ? dontKillMe() : KillMe();
};
const KillMe = () =>
  console.log("Give my bose speakers and apple headphones to my sister");
const dontKillMe = () => console.log("Yay! I am alive!");

willThanosKillMe("Anuj", KillMe, dontKillMe);
